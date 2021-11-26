import React from "react";
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
        if (this.state.img===null) {
            this.setState({img:"https://i.pinimg.com/736x/49/f7/25/49f725a9f2b62ea80603f3fe51289735--le-design-icon-design.jpg"})
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
                <a href="#" class="btn btn-sm btn-success me-2"><i class="bi bi-binoculars"></i> مشاهده</a>
                <a href="#" class="btn btn-sm btn-primary"><i class="bi bi-cart"></i> فروشگاه</a>
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