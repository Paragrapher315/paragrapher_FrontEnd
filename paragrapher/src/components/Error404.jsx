import React from "react";
import E from "../assets/E.png";
class Error404 extends React.Component {
  
  

  

  render() {
    return (
      <div>
          <div className="row mt-4">
              <div className="col-4"></div>
              <div className="col-4">
              <img src={E} style={{width:"500px", height:"300px"}}></img>
              </div>
              <div className="col-4"></div>
          </div>
          
      </div>
    );
  }
}
export default Error404;
