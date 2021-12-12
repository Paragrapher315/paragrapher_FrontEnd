import React from "react";
import Community from "../CreateCommunity/Community";
import { SearchBook } from "../../Utils/Connection";
import BookSearchList from "./BookSearchList";
class BookSearch extends React.Component{
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
        SearchBook(this.state.Text, 0, 30).then((ret) => {
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
                <h5 className="text-center text-primary">"نتایج جستجوی {this.state.Text} در دسته کتاب ها" </h5>
                <br/>
                <div className="row">
                    <div className="col-0 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-12 col-md-10 col-lg-10 col-xl-10" style={{minHeight:"400px"}}>
                    <BookSearchList items={this.state.Result}/>
                    </div>
                    
                    <div className="col-0 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
            </div>
            
           
            
        );
    }
}
export default BookSearch;