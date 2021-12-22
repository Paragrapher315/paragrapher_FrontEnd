import { Height } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      data:"",
      name:"",
      img:"",
      bio:""
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div class="container ">
        <div class="row mt-4  mb-3">
          <div class="offset-lg-4 col-lg-4 col-sm-8 offset-sm-2 col-12 text-center" style={{border:"1px solid #138496" , backgroundColor: "#fff"}}>
            <div class="row">
              <div class="col-lg-12 col-sm-12 col-12 " style={{backgroundColor: "#17a2b8", height:"75px"}}></div>
            </div>
            <div class="row " style={{margin:"-50px 0px 30px 0px"}}>
              <div class="col-lg-12 col-sm-12 col-12">
                <img src={this.state.img} class="rounded-circle img-thumbnail" style={{height:"200px", width:"200px"}}/>
                <h3 style={{margin:"15px 0px 5px 0px"}}>{this.state.username}</h3>
                
                <hr/>
                <h6>{this.state.name}</h6>
                <hr/>
                <h6 style={{margin:"15px 0px 5px 0px"}}>{this.state.bio}</h6>
              </div>
            </div>
            <div class="row" style={{padding:"5px 0px", backgroundColor: "#17a2b8"}}>
              <div class="col-lg-12 col-sm-12 col-12">
                <p style={{color:"#fff" , fontSize:"23px" , padding: "0px 3px"}}>{this.state.data}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ProfileShow;
