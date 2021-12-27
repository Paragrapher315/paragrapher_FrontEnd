import React from "react";
import Product from "./Product";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import { Link } from "react-router-dom";
import { Buy, RefreshLogin } from "../../Utils/Connection";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberofProducts: "",
      allProducts: [],
      totalCost: 0,
    };
  }

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
    return (
      <div class="container mt-5 mb-5 bg-white col-11 col-md-10 col-lg-9">
        {/* <div class="row pt-5 pb-5"> */}
        {/* <div class="container"> */}
        <div class="row w-100">
          <div class="col-lg-12 col-md-12 col-12">
            <h3 class="display-5 mb-2 text-center">سبد خرید</h3>
            <p class="mb-5 text-center">
              تعداد محصولات در سبد خرید شما:{" "}
              <i class="text-info font-weight-bold">
                {this.state.numberofProducts}
              </i>
            </p>
            <table
              id="shoppingCart"
              class="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>محصول</th>
                  <th style={{ width: "20%" }}>قیمت</th>
                  <th style={{ width: "28%" }}>نام اجتماع</th>
                  <th style={{ width: "10%" }}></th>
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
            <div class="float-right text-right">
              <h4>قیمت نهایی:</h4>
              <h1>{this.state.totalCost} تومان</h1>
            </div>
          </div>
        </div>
        <div class="row mt-4 d-flex align-items-center">
          <div class="col-sm-6 order-md-2 text-right">
            <a
              href="#"
              onClick={() => Buy()}
              class="btn btn-primary mb-4 btn-lg pl-5 pr-5"
            >
              پرداخت
            </a>
            <a
              href="/BuyCredits"
              class="ms-3 btn btn-primary mb-4 btn-lg pl-5 pr-5"
            >
              شارژ کیف پول
            </a>
          </div>
          <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a href="/">
              <i class="bi bi-arrow-right"></i>بازگشت به صفحه اصلی
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
