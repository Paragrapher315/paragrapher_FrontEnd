import React from "react";
import { Link } from "react-router-dom";
class communityd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name:props.name,
          img:props.img,
          bio:props.bio,
          numberOfmembers:props.numberOfmembers,
          date:props.date,
          view:props.veiw
        };
        console.log(this.state.img)
        
    }
    componentDidMount(){
        this.setState({view:"/community/"+this.state.name});
        if (this.state.img===null) {
            this.setState({img:"data:image/jpeg;base64,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"})
        }
        
    }
    render(){
        return(
            <div class="card w3-hover-shadow m-2 text-center pb-0">
            <img src={this.state.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{this.state.name}</h5>
                <small class="card-text text-sm">{this.state.bio}</small>
                <p/>
                {/* <Link to={this.state.view}> */}
                  <button
                    type="button"
                      className="btn btn-sm btn-secondary me-2 disabled"
                      
                    >
                        مشاهده{" "}
                      <i class="bi bi-binoculars"></i>
                    </button>
                  {/* </Link> */}
                
                
                <a href="#" class="btn btn-sm btn-secondary disabled"><i class="bi bi-cart"></i> فروشگاه</a>
            </div>
            <div className="card-footer bg-white">
                    <div className="row ">
                        <div className="col-6"><i class="bi bi-person-fill"></i>  {this.state.numberOfmembers}</div>
                        
                        <div className="col-6">{this.state.date}</div>
                    </div>
            </div>
        </div>
        );
    }
}
export default communityd;