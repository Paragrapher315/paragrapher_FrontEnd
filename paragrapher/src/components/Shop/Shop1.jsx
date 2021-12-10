import React from "react";
import Carousel from "./Carousel"
import topShop from "../../assets/topShop.jpg"
import Book1 from "./Book1";
class Shop1 extends React.Component {
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
                <div className="col-12 col-md-6 col-xl-4">
                        <Book1/>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                        <Book1/>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                        <Book1/>
                </div>
            </div>
     
    );
  }
}
export default Shop1;


