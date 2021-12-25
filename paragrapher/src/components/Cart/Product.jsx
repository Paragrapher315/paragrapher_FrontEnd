import React from "react";
import references from "../../assets/References.json";
import { Link } from "react-router-dom";
import { DeleteFromCart } from "../../Utils/Connection";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id,
        name: props.name,
        genre: props.genre,
        author: props.author,
        price: props.price,
        modified_time: props.modified_time,
        reserved_time: props.reserved_time,
        description: props.description,
        seller_id: props.seller_id,
        community_id: props.community_id,
        community_name: props.community_name,
        image: props.image,
        //image1: references.url_address + props.image,
        view: "",
        viewC:"",
      };
  }

  componentDidMount() {
    if (this.state.image === null) {
      // this.setState({image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg"})
      this.setState({
        image:
          "https://via.placeholder.com/250x250/5fa9f8/ffffff",
      });
    } else {
      this.setState({ image: this.state.image1 });
    }
    console.log(this.state.image1);
    this.view =
      "/community/" + this.state.community_name + "/ShowBook/" + this.state.id;
    this.viewC= "/community/"+this.state.community_name;
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
                    <div class="col-md-5 text-left">
                        <img src={this.state.image} alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow " />
                    </div>
                    <div class="col-md-7 text-left mt-5">
                        <Link to={this.view}>
                            <h5>{this.state.name} اثر {this.state.author}</h5>
                        </Link>
                        
                        
                    </div>
                </div>
            </td>
            <td data-th="Price">
                <div className="row mt-5">
                    <h5>
                    {this.state.price} تومان
                    </h5>
                
                </div>
                
            </td>
            <td data-th="Quantity">
                <div className="row mt-5">
                    <Link to={this.viewC}>
                        <h5>{this.state.community_name}</h5>
                    </Link>
                </div>
                
            </td>
            <td class="actions" data-th="">
                <div class="text-right mt-5">
                    {/* <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="fas fa-sync"></i>
                    </button> */}
                    <button class="btn btn-outline-danger btn-md mb-2" onClick={()=>DeleteFromCart(this.state.id)}>
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
  }
}
export default Product;