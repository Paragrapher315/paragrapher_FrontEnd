import React from "react";
import Community from "../CreateCommunity/Community";
import {SearchCommunity} from "../../Utils/Connection"
import CommunitySearchList from "./CommunitySearchList"
class CommunitySearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Text:"",
            Result:[],
        };
    }
    async componentDidMount(){
        var splitted = window.location.toString().split("/");
        await this.setState({ Text: decodeURIComponent(splitted.pop())});
        decodeURIComponent(this.state.Text)
        //window.alert(this.state.Text)
        SearchCommunity(this.state.Text, 0, 30).then((ret) => {
            //console.log(ret.data.res.length,"#######");
            //console.log(ret.data.res[0],"#######")
            //this.setState({ Result: ret.data });


            for (let i = 0; i < ret.data.res.length; i++) {
                
                console.log(i);
                this.setState({
                    Result: this.state.Result.concat(
                    ret.data.res[i]
                ),
                });
              }
          });
    }
    render(){
        return(
            <div className="container">
                <br/>
                <br/>
                <h5 className="text-center text-primary">"نتایج جستجوی {this.state.Text} در دسته کامیونیتی ها" </h5>
                <br/>
                <div className="row">
                    <div className="col-0 col-md-2 col-lg-3 col-xl-1"></div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-12" style={{minHeight:"400px"}}>
                    <CommunitySearchList items={this.state.Result}/>
                    </div>
                    
                    <div className="col-0 col-md-2 col-lg-3 col-xl-1"></div>
                </div>
            </div>
            
           
            
        );
    }
}
export default CommunitySearch;