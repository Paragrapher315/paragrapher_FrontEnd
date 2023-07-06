/* eslint-disable eqeqeq */
import React from "react";
import CreatecommunityPic1 from "../../assets/CreatecommunityPic1.png";
import CreatecommunityPic2 from "../../assets/CreatecommunityPic2.svg";
import miniPic1 from "../../assets/miniPic1.svg";
import miniPic2 from "../../assets/miniPic2.svg";
import miniPic3 from "../../assets/miniPic3.svg";
import CommunityExamples from "./CommunityExamples";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import { GetBestCommunities } from "../../Utils/Connection";
class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "0",
      name: "",
      bio: "",
      password: "",
      passwordConfirm: "",
      isPublic: 0,
      bestCommunities: [],
      name1: "",
      img1: "",
      bio1: "",
      numberOfmembers1: "",
      date1: "",
      name2: "",
      img2: "",
      bio2: "",
      numberOfmembers2: "",
      date2: "",
    };
  }

  componentDidMount() {
    // GetBestCommunities().then((res) => {
    //   console.log(".....", res.length);
    //   this.setState({ bestCommunities: res });
    //   this.setState({ name1: res[0].name });
    //   this.setState({ date1: res[0].creation_year });
    //   this.setState({ date1: res[0].creation_year });
    //   console.log(".....", res[0].name);
    // });
  }
  CreateCommunity = async () => {
    document.getElementById("bioErr").innerHTML = "";
    document.getElementById("nameErr").innerHTML = "";
    let message = "";
    if (this.state.bio == "") {
      document.getElementById("bioErr").innerHTML = "بیو نمیتواند خالی باشد";
    } else {
      await axios
        .post(makeURL(references.url_create_community), {
          name: this.state.name,
          bio: this.state.bio,
        })
        .then((response) => {
          //window.alert(response)
          console.log(response);
          window.location.replace("/profile");
        })
        .catch((error) => {
          console.log(error, "&&&&&", error.response.data.message, "####");
          if (
            "A community with the same Name already exist. " ==
            error.response.data.message
          ) {
            document.getElementById("nameErr").innerHTML =
              "کامیونیتی دیگری با این نام وجود دارد، لطفا نام دیگری انتخاب کنید";
          }
          if (error.response.status == 401) {
            message = error.response.data.message;
          } else {
            message = error.response.data;
          }
        });
    }

    return message;
  };
  Checkbox() {
    if (this.state.check === "0") {
      document.getElementById("communityPassConfirm").style.display = "none";
      document.getElementById("confirmLable").style.display = "none";
      document.getElementById("communityPass").style.display = "none";
      document.getElementById("PassLable").style.display = "none";
      this.setState({ check: "1" });
    }
    if (this.state.check === "1") {
      document.getElementById("communityPassConfirm").style.display = "block";
      document.getElementById("confirmLable").style.display = "block";
      document.getElementById("communityPass").style.display = "block";
      document.getElementById("PassLable").style.display = "block";
      this.setState({ check: "0" });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <br />
          <br />
          <p />
          <br />
          <br />
          <p />
          <p />
        </div>
        <div className="row align-items-center">
          <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
            <img
              className="w-100 mx-md-0 mx-auto w3-animate-zoom"
              src={CreatecommunityPic1}
              alt="Illustration"
            />
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
            <div className="mx-md-0 mx-auto">
              <h2 style={{ fontFamily: 'BYekan' }} className="mb-md-5 mb-4">چرا باید کامیونیتی بسازیم؟</h2>

              <div className="d-md-flex align-items-start d-block mb-4 pb-2">
                <img
                  className="me-md-4 mb-md-0 mb-4"
                  src={miniPic1}
                  alt="Icon"
                />
                <div className="ps-md-2">
                  <h3 style={{ fontFamily: 'BYekan' }} className="h6 mb-2">اشتراک گزاری پاراگراف</h3>
                  <p style={{ fontFamily: 'BYekan' }} className="mb-0 fs-sm">
                    با ساخت کامیونیتی شما میتوانید با دوستان خود پاراگراف های
                    خود را به اشتراک بگذارید و منبعی از پاراگراف های خاص را جمع
                    آوری کنید
                  </p>
                </div>
              </div>

              <div className="d-md-flex align-items-start d-block mb-4 pb-2">
                <img
                  className="me-md-4 mb-md-0 mb-4"
                  src={miniPic2}
                  alt="Icon"
                />
                <div className="ps-md-2">
                  <h3 style={{ fontFamily: 'BYekan' }} className="h6 mb-2">رقابت با سایر کامیونیتی ها</h3>
                  <p style={{ fontFamily: 'BYekan' }} className="mb-0 fs-sm">
                    شما میتوانید با سایر کامیونیتی ها رقابت کنید و اعضای خود را
                    افزایش دهید
                  </p>
                </div>
              </div>

              <div className="d-md-flex align-items-start d-block">
                <img
                  className="me-md-4 mb-md-0 mb-4"
                  src={miniPic3}
                  alt="Icon"
                />
                <div className="ps-md-2">
                  <h3 style={{ fontFamily: 'BYekan' }} className="h6 mb-2">داشتن فروشگاه کتاب</h3>
                  <p style={{ fontFamily: 'BYekan' }} className="mb-0 fs-sm">
                    بعد از ساخت کامیونیتی شما میتوانید یک فروشگاه کتاب بسازید و
                    از طریق آن کسب درآمد کنید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <br />
          <br />
        </div>
        <div className="row align-items-center">
          <div className="col"></div>
          <div className="col-12 col-sm-10 col-lg-5">
            <a href="#communityForm">
              <button style={{ fontFamily: 'BYekan', borderRadius: '8px' }} type="button" class="w-100 btn btn-lg btn-primary">
                همین حالا کامیونیتی خود را بسازید
              </button>
            </a>
          </div>
          <div className="col"></div>
          <br />
          <br />
          <p />
          <br />
          <br />
          <p />
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 my-2">
            
          </div>
          <div className="col-12 col-lg-6">
            <img
              className="w3-animate-zoom w-100"
              src={CreatecommunityPic2}
              alt="Illustration"
            />
          </div>
        </div>
        <div className="row">
          <p />
          <p />
          <p />
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h3 style={{ fontFamily: 'BYekan' }} >راهنمای ایجاد کامیونیتی</h3>
            <br />
            <br />
            <h6>
              <li style={{ fontFamily: 'BYekan' }}>نام</li>
            </h6>
            {/* <br/> */}
            <p style={{ fontFamily: 'BYekan' }}>نام همان اسمی است که کاربران سایت از کامیونیتی شما میبینند</p>
            <br />
            <h6>
              <li style={{ fontFamily: 'BYekan' }}>بیو</li>
            </h6>
            {/* <br/> */}
            <p style={{ fontFamily: 'BYekan' }}>بیو حداکثر شامل دو خط در رابطه با کامیونیتی شما است</p>

            {/* <h6><li>کامیونیتی عمومی</li></h6>
                    <p>اگر کامیونیتی شما عمومی باشد همه میتوانید در آن عضو شوند</p>
                    <h6><li>کامیونیتی غیر عمومی</li></h6>
                    <p>اگر کامیونیتی شما خصوصی باشد فقط افرادی که رمز آن را دارند میتوانند در آن عضو شوند</p>
                    <h6><li>رمز ورود</li></h6>
                    <p>اگر کامیونیتی شما خصوصی است یک رمز برای آن تعیین کنید تا افراد مورد نظرتان را از آن طریق به کامیونیتی خود دعوت کنید</p> */}
          </div>

          <div className="col-12 col-lg-6">
            <div class="card-body" id="communityForm">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control form-control-flush"
                  id="cardName"
                  placeholder="Name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <label style={{ fontFamily: 'BYekan' }} for="cardName">نام کامیونیتی</label>
                <span id="nameErr" style={{ color: "red" }}></span>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  onChange={(e) => this.setState({ bio: e.target.value })}
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">بیو کامیونیتی</label>
                <span id="bioErr" style={{ color: "red" }}></span>
              </div>
              {/* <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>this.Checkbox()}/>
                                <label class="form-check-label" for="flexCheckChecked">
                                    کامیونیتی عمومی
                                </label>
                            </div> */}
              {/* <div class="form-floating mb-3">
                                <input type="password"
                                    class="form-control form-control-flush"
                                    id="communityPass"
                                    onChange={(e) =>
                                    this.setState({ password: e.target.value })}
                                placeholder="Name"/>
                                <label for="cardName" id="PassLable">رمز ورود</label>
                            </div> */}
              {/* <div class="form-floating mb-3">
                                <input type="password"
                                    class="form-control form-control-flush" 
                                    id="communityPassConfirm"
                                    onChange={(e) =>
                                    this.setState({ passwordConfirm: e.target.value })}
                                placeholder="Name"/>
                                <label for="cardName" id="confirmLable">تکرار رمز ورود</label>
                            </div> */}
              <div class="mt-6">
                <button
                  style={{ fontFamily: 'BYekan', marginLeft: '40px' }}
                  class="btn btn-primary lift"
                  onClick={() => {
                    this.CreateCommunity();
                  }}
                >
                  ساخت کامیونیتی
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p />
          <p />
          <p />
          <p />
        </div>
      </div>
    );
  }
}
export default CreateCommunity;
