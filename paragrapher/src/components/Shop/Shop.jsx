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
        <div className="container">
            <div className="row">
                <img className="w-100" src={topShop}></img>
            </div>
            <div className="row">
                <div className="col">
                    
                </div>

                <div className="col-10">
                <Book/>
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
     
    );
  }
}
export default Shop;


