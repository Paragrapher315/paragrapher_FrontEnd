import React from "react";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3n from "../../assets/c3n.jpg";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "شازده کوچولو",
        genre: "",
        author: "سنت اگزوپری",
        description: "یک کتاب که از خواندن آن لذت خواهید برد",
        price: "5000"
    
    };
  }

  componentDidMount() {
    
  }


 



  render() {
    return (
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-5">
      <img src={c1} class="img-fluid rounded-start h-100" alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">{this.state.name} اثر {this.state.author}</h5>
        <p></p>
        <p class="card-text">{this.state.description}</p>
        <p class="card-text text-danger">قیمت : {this.state.price} تومان</p>
        <button type="button" class="btn btn-secondary">مشاده</button>
        <button type="button" class="btn btn-secondary ms-4">افزودن به سبد</button>
      </div>
    </div>
  </div>
</div>
    );
  }
}
export default Book;


