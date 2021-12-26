/* eslint-disable no-unused-vars */
import React from "react";
import Communityd from "./Communitydisabled";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import Communitydisabled from "./Communitydisabled";
import { GetBestCommunities } from "../../Utils/Connection";
import Community from "./Community";
import { Try } from "@mui/icons-material";
class communityExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: props.name,
      img1: props.img,
      bio1: props.bio,
      numberOfmembers1: props.numberOfmembers,
      date1: props.date,
      name2:props.name2,
      img2:props.img2,
      bio2:props.bio2,
      numberOfmembers2: props.numberOfmembers2,
      date2: props.date2,
      bestCommunities:[],
    };
  }
  componentDidMount() {
    GetBestCommunities().then((res) => {
      console.log(".....",res.length);
      this.setState({ bestCommunities: res });
      this.setState({name1:res[0].name});
      this.setState({date1:res[0].creation_year});
      this.setState({date1:res[0].creation_year});
      console.log(".....",res[0].name);
    });
  }
  render() {
    if(this.state.bestCommunities.length>= 2){
      return (
        <div class="rounded contaner" style={{ backgroundColor: "#d4e1e7" }}>
          <div class="row">
            {/* <h1 class="text-center p-2">کامیونیتی های عمومی برتر</h1> */}
          </div>
          <div className="row">
            <div class="col-12 col-md-6  mt-5">
            <Community  name={this.state.bestCommunities[0].name} bio={this.state.bestCommunities[0].description} numberOfmembers={this.state.bestCommunities[0].member_count + " عضو"} img={this.state.bestCommunities[0].avatar} date={ChangeToPersian(this.state.bestCommunities[0].jalali_date.split(" ")[2]) +" "+this.state.bestCommunities[0].jalali_date.split(" ")[3]} badge=""/>
            </div>
  
            <div class="col-12 col-md-6">
            <Community  name={this.state.bestCommunities[1].name} bio={this.state.bestCommunities[1].description} numberOfmembers={this.state.bestCommunities[1].member_count + " عضو"} img={this.state.bestCommunities[1].avatar} date={ChangeToPersian(this.state.bestCommunities[1].jalali_date.split(" ")[2]) +" "+this.state.bestCommunities[1].jalali_date.split(" ")[3]} badge=""/>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.bestCommunities.length==1){
      return(
        <div class="rounded contaner" style={{ backgroundColor: "#d4e1e7" }}>
          <div class="row">
            {/* <h1 class="text-center p-2">کامیونیتی های عمومی برتر</h1> */}
          </div>
          <div className="row">
            <div class="col-12 col-md-6  mt-5">
            <Community  name={this.state.bestCommunities[0].name} bio={this.state.bestCommunities[0].description} numberOfmembers={this.state.bestCommunities[0].member_count + " عضو"} img={this.state.bestCommunities[0].avatar} date={ChangeToPersian(this.state.bestCommunities[0].jalali_date.split(" ")[2]) +" "+this.state.bestCommunities[0].jalali_date.split(" ")[3]} badge=""/>
            </div>
  
            <div class="col-12 col-md-6">
            <Communitydisabled
                name="نام کامیونیتی"
                img="https://en.tehran.ir/Portals/0/newsfile/books/b.jpg"
                bio="این یک بیو تست برای کامیونیتی است"
                numberOfmembers="55 عضو"
                date="بهار 1398"
              />
            </div>
          </div>
        </div>
        );
    }
    else{
      return(
        <div class="rounded contaner" style={{ backgroundColor: "#d4e1e7" }}>
          <div class="row">
            {/* <h1 class="text-center p-2">کامیونیتی های عمومی برتر</h1> */}
          </div>
          <div className="row">
            <div class="col-12 col-md-6  mt-5">
            
            <Communitydisabled
                name="نام کامیونیتی"
                img="https://en.tehran.ir/Portals/0/newsfile/books/b.jpg"
                bio="این یک بیو تست برای کامیونیتی است"
                numberOfmembers="55 عضو"
                date="بهار 1398"
              />
            </div>
  
            <div class="col-12 col-md-6">
              <Communitydisabled
                name="نام کامیونیتی"
                img="https://en.tehran.ir/Portals/0/newsfile/books/b.jpg"
                bio="این یک بیو تست برای کامیونیتی است"
                numberOfmembers="55 عضو"
                date="بهار 1398"
              />
            </div>
          </div>
        </div>
        );
    }

  }
}

function ChangeToPersian(month){
  if (month=="Farvardin" || month=="Ordibehesht" || month=="Khordad") {
      return("بهار")
  }
  if (month=="Tir" || month=="Mordad" || month=="Shagrivar") {
      return("تابستان")
  }
  if (month=="Mehr" || month=="Aban" || month=="Azar") {
      return("پاییز")
  }
  else{
      return("زمستان")
  }

}
export default communityExamples;
