/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
class communitydisabled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      img: props.img,
      bio: props.bio,
      numberOfmembers: props.numberOfmembers,
      date: props.date,
      view: props.veiw,
    };
    console.log(this.state.img);
  }
  componentDidMount() {
    this.setState({ view: "/community/" + this.state.name });
    if (this.state.img === null) {
      this.setState({
        img: "data:image/png;base64,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",
      });
    }
  }
  render() {
    return (
      <div class="card w3-hover-shadow m-2 text-center pb-0">
        <img src={this.state.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{this.state.name}</h5>
          <small class="card-text text-sm">{this.state.bio}</small>
          <p />
          {/* <Link to={this.state.view}> */}
          <button
            type="button"
            className="btn btn-sm btn-secondary me-2 disabled"
          >
            مشاهده <i class="bi bi-binoculars"></i>
          </button>
          {/* </Link> */}

          <a href="#" class="btn btn-sm btn-secondary disabled">
            <i class="bi bi-cart"></i> فروشگاه
          </a>
        </div>
        <div className="card-footer bg-white">
          <div className="row ">
            <div className="col-6">
              <i class="bi bi-person-fill"></i> {this.state.numberOfmembers}
            </div>

            <div className="col-6">{this.state.date}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default communitydisabled;
