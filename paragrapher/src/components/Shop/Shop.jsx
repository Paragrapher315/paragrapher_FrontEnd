import React from "react";
import Carousel from "./Carousel"
import topShop from "../../assets/topShop.jpg"
import Book from "./Book";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }


 



  render() {
    return (
        <div className="row">
                <div className="col-12 col-md-6 col-xl-6">
                        <Book/>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                        <Book/>
                </div>
            </div>
     
    );
  }
}
export default Shop;


