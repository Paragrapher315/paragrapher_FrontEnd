import React from "react";
import Community from "../CreateCommunity/Community";
import Downshift from 'downshift';
class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          Text:"",
          CommunitySearch:[],
          BookSearch:[],
          AuthoroutherSearch:[],
        };
    }
    
    componentDidMount() {
        
    }
    
    SearchChange(text,val){
        if(text.target.value.split(":")[0]=="کتاب ها"){
            window.location.assign("/SearchBook/"+val)
            // window.alert(text.target.value);
        }
        else if(text.target.value.split(":")[0]=="اجتماع ها"){
            //window.location.replace("/SearchCommunity/"+val+"/");
            window.location.assign("/SearchCommunity/"+val)
        }
        else if(text.target.value.split(":")[0]=="نویسنده ها"){
            window.location.assign("/SearchAuthor/"+val)
        }
        else{
            this.setState({Text:text.target.value})
            
        }

    }


    render(){
        return(
            <div className="container ms-4">

                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="جستجو کنید..."
                onChange={(e) =>
                    
                    this.SearchChange(e,this.state.Text)
                  }
                />
                <div dir="rtl">
                    <datalist id="datalistOptions">
                        <option value={"نویسنده ها:"+this.state.Text}>{" در دسته نویسنده ها "}</option>
                        <option value={"اجتماع ها:"+this.state.Text}>{" در دسته اجتماع ها "}</option>
                        <option value={"کتاب ها:"+this.state.Text}>{" در دسته کتاب ها "}</option>
                    </datalist>
                </div>
            </div>
        );
    }
}



export default Search;