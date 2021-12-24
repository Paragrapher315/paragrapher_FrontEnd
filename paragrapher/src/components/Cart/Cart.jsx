import React from "react";
import Product from "./Product";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <div class="container mt-5 mb-5 bg-white">
            <section class="pt-5 pb-5">
                <div class="container">
                    <div class="row w-100">
                        <div class="col-lg-12 col-md-12 col-12">
                            <h3 class="display-5 mb-2 text-center">سبد خرید</h3>
                            <p class="mb-5 text-center">
                                 تعداد محصولات در سبد خرید شما: <i class="text-info font-weight-bold">3</i></p>
                            <table id="shoppingCart" class="table table-condensed table-responsive">
                                <thead>
                                    <tr>
                                        <th style={{width:"50%"}}>محصول</th>
                                        <th style={{width:"12%"}}>قیمت</th>
                                        <th style={{width:"20%"}}>نام اجتماع</th>
                                        <th style={{width:"16%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Product/>
                                    <Product/>

                                </tbody>
                            </table>
                            <div class="float-right text-right">
                                <h4>قیمت نهایی:</h4>
                                <h1>$98.00</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 d-flex align-items-center">
                        <div class="col-sm-6 order-md-2 text-right">
                            <a href="#" class="btn btn-primary mb-4 btn-lg pl-5 pr-5">پرداخت</a>
                            <a href="#" class="ms-3 btn btn-primary mb-4 btn-lg pl-5 pr-5">شارژ کیف پول</a>
                        </div>
                        <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                            <a href="#">
                            <i class="bi bi-arrow-right"></i> بازگشت به صفحه اصلی</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}
export default Cart;