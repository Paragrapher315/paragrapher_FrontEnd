import React from "react";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3n from "../../assets/c3n.jpg";
import { Link } from "react-router-dom";
import references from "../../assets/References.json";
class Book1 extends React.Component {
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
            image1:references.url_address+ props.image,
            view:""
    
    };
  }

  componentDidMount(){
    if (this.state.image===null) {
      // this.setState({image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg"})
      this.setState({image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4jN6kIAxYjwJYFdZfE3QPHnINMXm5EjExQ&usqp=CAU"})
      
    } 
    else{
      this.setState({image:this.state.image1})
    }
    this.view="/community/"+this.state.community_name+"/ShowBook/"+this.state.id
  }


 



  render() {
    return (
        <div class="card h-100 w3-hover-shadow">
          <div class="badge bg-danger text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>جدید</div>
          <img class="card-img-top" src={this.state.image} alt="..."/>
          <div class="card-body p-4">
              <div class="text-center">
              <Link to={this.view}>
                {/* <button type="button" className="btn btn-danger"> */}
                <h5 class="fw-bolder">{this.state.name} اثر {this.state.author}</h5>
                {/* </button> */}
              </Link>
                  {/* <a class="btn"></a> */}
                  
                  {/* <p/> */}
                  {/* <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                  </div> */}
                  <p>{this.state.description}</p>
                  <p>{this.state.genre}</p>
                  {/* <span class="text-muted text-decoration-line-through">$20.00</span>
                  $18.00 */}
                  <span class="text-danger">{this.state.price} تومان</span>
              </div>
          </div>
          
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn disabled btn-outline-secondary mt-auto"> افزودن به سبد <i class="bi bi-cart-plus"></i></a></div>
          </div>
      </div>
    );
  }
}
export default Book1;


