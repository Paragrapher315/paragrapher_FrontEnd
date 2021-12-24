import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        // <div class="d-flex justify-content-center row">
        //     <div class="col-md-10">
        //         <div class="row p-2 bg-white border rounded">
        //             <div class="col-md-3 mt-1">
        //                 <img class="img-fluid img-responsive rounded product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"/>
        //             </div>
        //             <div class="col-md-6 mt-1">
        //                 <h5>نام کتاب : نام</h5>
        //                 <h5>نام نویسنده : نویسنده</h5>
        //                 <h5>ژانر کتاب : ژانر</h5>
        //                 <div class="d-flex flex-row">
        //                     {/* <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span> */}
        //                 </div>
        //                 {/* <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br/></span></div>
        //                 <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br/></span></div> */}
        //                 <p class="text-justify mb-0"> توضیحاتی درباره کتاب توضیحاتی درباره کتاب توضیحاتی درباره کتابتوضیحاتی درباره کتاب<br/><br/></p>
        //             </div>
        //             <div class="align-items-center align-content-center col-md-3 border-left mt-1">
        //                 <div class="d-flex flex-row align-items-center">
        //                     <h4 class="mr-1"></h4><span class="strike-text"></span>
        //                 </div>
        //                 <h6 class="text-success">1500000 تومان</h6>
        //                 <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">مشاهده محصول</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-md-3 text-left">
                        <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                        <h4>نام این محصول</h4>
                        <p class="font-weight-light">نویسنده این محصول</p>
                    </div>
                </div>
            </td>
            <td data-th="Price">$49.00</td>
            <td data-th="Quantity">
                <a href="#">اجتماع اول</a>
            </td>
            <td class="actions" data-th="">
                <div class="text-right">
                    {/* <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="fas fa-sync"></i>
                    </button> */}
                    <button class="btn btn-outline-danger btn-md mb-2">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
  }
}
export default Product;