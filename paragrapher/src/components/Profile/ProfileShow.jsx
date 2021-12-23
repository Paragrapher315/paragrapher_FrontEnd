import { Height } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import user from "../../assets/user.svg";
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

  async componentDidMount() {
    var splitted = window.location.toString().split("/");
    await this.setState({ username: decodeURIComponent(splitted.pop())});
    decodeURIComponent(this.state.username)
    this.loadData();
  }
  loadData = async () => {
    await axios
        .get(makeURL("/users/"+this.state.username+"/profile"))
        .then((response) => {

        this.setState({ username: response.data.profile.username });
        this.setState({ data: response.data.profile.register_date });
        this.setState({ name: response.data.profile.profile_name });
        if(this.state.name===null){
          this.setState({name:"نام کاربر"});
        }
        
        if (response.data.profile.avatar==null) {
          this.setState({ img: user });
        }
        else{
          this.setState({img : references.url_address + response.data.profile.avatar})
        }
        
        this.setState({ bio: response.data.profile.bio});
        if(this.state.bio===null){
          this.setState({bio:"این کاربر پاراگرافر هنوز بیویی برای خود نگذاشته است"});
        }
        console.log(response.data.profile.username);
        console.log("********************************");
        })
        .catch((error) => {
          window.location.assign("/404");
        });
    };
  render() {
    return (
      <div class="container ">
        <div class="row mt-4  mb-3 ">
          <div class="offset-lg-4 rounded col-lg-4 col-sm-8 offset-sm-2 col-12 text-center" style={{border:"1px solid #138496" , backgroundColor: "#fff"}}>
            <div class="row">
              <div class="col-lg-12 col-sm-12 col-12" style={{backgroundColor: "#219EBC", height:"75px"}}></div>
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
            <div class="row" style={{padding:"5px 0px", backgroundColor: "#219EBC"}}>
              <div class=" col-lg-12 col-sm-12 col-12">
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
