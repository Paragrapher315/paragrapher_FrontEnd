import React from "react";
import { Link } from "react-router-dom";
class community extends React.Component{
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
            this.setState({img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0WbvoW6vkO4ntTlpvJSOP7R0lqudCQN9bQ&usqp=CAU"})
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
                <Link to={this.state.view}>
                  <button
                    type="button"
                      className="btn btn-sm btn-success me-2"
                      
                    >
                        مشاهده{" "}
                      <i class="bi bi-binoculars"></i>
                    </button>
                  </Link>
                
                
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
export default community;