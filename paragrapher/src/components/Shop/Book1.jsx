import React from "react";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3n from "../../assets/c3n.jpg";
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
            image: props.image
    
    };
  }

  componentDidMount() {
    
  }


 



  render() {
    return (
        <div class="card h-100 w3-hover-shadow">
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>جدید</div>
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{this.state.name}</h5>

                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
   
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">افزودن به سبد</a></div>
                            </div>
                        </div>
    );
  }
}
export default Book1;


