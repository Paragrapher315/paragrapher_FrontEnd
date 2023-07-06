import React, { Component } from "react";
import { useState } from "react";
import Product from "./Product";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import { Link } from "react-router-dom";
import { Buy, RefreshLogin } from "../../Utils/Connection";

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';


///import DiscountForm from "../BuyCredits/DiscountCode";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberofProducts: "",
      allProducts: [],
      totalCost: 0,
      discountCode: '',
      discountPrice: 0,
      finalPrice: 0,
      validDiscountCodes: ['CODE1', 'CODE2'],// کدهای تخفیف معتبر در سمت بک‌اند
      checked: false,
    };
  }

  handleChange = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked
    }));
  };


  //////////////////// DISCOUNT CODE //////////////
  handleDiscountCodeChange = (event) => {
    this.setState({ discountCode: event.target.value });
  }

  applyDiscountCode = () => {
    const { discountCode, validDiscountCodes, totalCost } = this.state;

    if (validDiscountCodes.includes(discountCode)) {
      // کد تخفیف معتبر است، تخفیف را اعمال کنید
      const discount = 100000; // مثال: مقدار تخفیف ثابت
      const finalPrice = totalCost - discount;
      this.setState({ discountPrice: discount, finalPrice: finalPrice });
    } else {
      // کد تخفیف معتبر نیست، نمایش پیام خطا
      alert('کد تخفیف وارد شده معتبر نیست.');
    }

    ////////////////// for connect to backend ////////////////
    // const { discountCode } = this.state;

    // // ارسال درخواست به بک‌اند
    // axios.post('/api/checkDiscountCode', { discountCode })
    //   .then(response => {
    //     // دریافت پاسخ از بک‌اند
    //     if (response.status === 200) {
    //       // کد تخفیف معتبر است، تخفیف را اعمال کنید
    //       const discount = 100000; // مثال: مقدار تخفیف ثابت
    //       const finalPrice = this.state.totalCost - discount;
    //       this.setState({ discountPrice: discount, finalPrice: finalPrice });
    //     } else {
    //       /// نمایش پیام خطا
    //       alert('کد تخفیف وارد شده معتبر نیست.');
    //     }
    //   })
    //   .catch(error => {
    //     // خطا در ارتباط با بک‌اند
    //     console.error('خطا در ارتباط با بک‌اند:', error);
    //     alert('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
    //   });
    ////////////////// for connect to backend ////////////////



  }
  //////////////////// DISCOUNT CODE //////////////

  componentDidMount() {
    this.loadData();
    RefreshLogin().then(() => {
      console.log("Login Refereshed");
    });
  }

  loadData = async () => {
    await axios
      .get(makeURL("/store/book/reserve"))
      .then((response) => {
        this.setState({ numberofProducts: response.data.res.length });
        console.log("000000", response.data.res.length);
        for (let index = 0; index < this.state.numberofProducts; index++) {
          this.state.totalCost += response.data.res[index].price;
          console.log(index, "::", response.data.res[index]);
          this.setState({
            allProducts: this.state.allProducts.concat(
              response.data.res[index]
            ),
          });
        }
      })
      .catch((error) => {
        if (error.response.status !== 404) {
          window.alert(error);
        }
      });
  };



  render() {

    const icon = (
      <Paper sx={{ m: 1 }} elevation={4}>
        <Box component="svg" sx={{ width: 100, height: 100 }}>
          <Box
            component="polygon"
            sx={{
              fill: (theme) => theme.palette.common.white,
              stroke: (theme) => theme.palette.divider,
              strokeWidth: 1,
            }}
            points="0,100 50,00, 100,100"
          />
        </Box>
      </Paper>
    );

    const { checked } = this.state;



    return (
      <div class="container mt-5 mb-5 bg-white col-11 col-md-10 col-lg-9">
        {/* <div class="row pt-5 pb-5"> */}
        {/* <div class="container"> */}
        <div class="row w-100">
          <div class="col-lg-12 col-md-12 col-12">
            <h3 style={{ fontFamily: 'BYekan' }} class="display-5 mb-2 text-center">سبد خرید</h3>
            <p style={{ fontFamily: 'BYekan' }} class="mb-5 text-center">
              تعداد محصولات در سبد خرید شما:{" "}
              <i style={{ color: 'black' }} class="font-weight-bold">
                {this.state.numberofProducts}
              </i>
            </p>
            <table
              id="shoppingCart"
              class="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: "40%", fontFamily: 'BYekan' }}>محصول</th>
                  <th style={{ width: "20%", fontFamily: 'BYekan' }}>قیمت</th>
                  <th style={{ width: "28%", fontFamily: 'BYekan' }}>نام اجتماع</th>
                  <th style={{ width: "10%", fontFamily: 'BYekan' }}></th>
                </tr>
              </thead>
              <tbody>
                {/* <Product image={null} name="test1"/>
                                    <Product/> */}

                {this.state.allProducts.map((p) => (
                  <Product
                    id={p.id}
                    name={p.name}
                    genre={p.genre}
                    author={p.author}
                    price={p.price}
                    modified_time={p.modified_time}
                    reserved_time={p.reserved_time}
                    description={p.description}
                    seller_id={p.seller_id}
                    community_id={p.community_id}
                    community_name={p.community_name}
                    image={p.image}
                  />
                ))}
              </tbody>
            </table>
            <div style={{ fontFamily: 'BYekan' }} class="float-right text-right">

              <h4 style={{ fontFamily: 'BYekan' }}>قیمت کل:</h4>

              <h1 style={{ fontFamily: 'BYekan' }}>{this.state.totalCost} تومان</h1>





              <Box sx={{ height: 180 }}>
                <FormControlLabel
                
                  control={<Switch checked={checked} onChange={this.handleChange} />}
                  label="آیا کد تخفیف دارید؟"
                />
                <Box sx={{ display: 'flex' }}>
                  <Fade in={checked}>{icon}</Fade>
                </Box>
              </Box>





              <div>

                <input
                  style={{ height: '30px' }}
                  type="text"
                  value={this.state.discountCode}
                  onChange={this.handleDiscountCodeChange}
                  placeholder="کد تخفیف را وارد کنید"
                />
                <button style={{ paddingTop: '5px', paddingBottom: '5px', borderRadius: '8px' }} onClick={this.applyDiscountCode}>اعمال تخفیف</button>

                <h2 style={{ fontFamily: 'BYekan', fontSize: '20px' }}>مقدار تخفیف: {this.state.discountPrice} تومان</h2>
                <h2 style={{ fontFamily: 'BYekan', fontSize: '20px' }}>قیمت نهایی: {this.state.finalPrice} تومان</h2>
              </div>






            </div>
          </div>
        </div>
        <div style={{ fontFamily: 'BYekan' }} class="row mt-4 d-flex align-items-center">
          <div class="col-sm-6 order-md-2 text-right">
            <a
              style={{ fontFamily: 'BYekan' }}
              href="/books"
              onClick={() => Buy()}
              class="btn btn-primary mb-4 btn-lg pl-5 pr-5"
            >
              پرداخت
            </a>
            <a
              style={{ fontFamily: 'BYekan' }}
              href="/BuyCredits"
              class="ms-3 btn btn-primary mb-4 btn-lg pl-5 pr-5"
            >
              شارژ کیف پول
            </a>
          </div>
          <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a href="/">
              <button style={{ fontFamily: 'BYekan' }} class="bi bi-arrow-right ms-3  mb-4 btn-lg pl-5 pr-5"> بازگشت به صفحه اصلی</button>
            </a>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default Cart;
