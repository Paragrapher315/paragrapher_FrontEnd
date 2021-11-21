import React from "react";
import CreateComunityPic1 from "../../assets/CreateComunityPic1.png";
import CreateComunityPic2 from "../../assets/CreateComunityPic2.svg";
import miniPic1 from "../../assets/miniPic1.svg";
import miniPic2 from "../../assets/miniPic2.svg";
import miniPic3 from "../../assets/miniPic3.svg";
import ComunityExamples from "./ComunityExamples";
class CreateComunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <br/>
                <br/>
            </div>
            <div className="row align-items-center">
                <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3"><img className="w-100 mx-md-0 mx-auto w3-animate-zoom" src={CreateComunityPic1} alt="Illustration"/></div>
                <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
                    <div className="mx-md-0 mx-auto" >
                        <h2 className="mb-md-5 mb-4">چرا باید کامیونیتی بسازیم؟</h2>
                    
                        <div className="d-md-flex align-items-start d-block mb-4 pb-2"><img className="me-md-4 mb-md-0 mb-4" src={miniPic1} alt="Icon"/>
                            <div className="ps-md-2">
                                <h3 className="h6 mb-2">اشتراک گزاری پاراگراف</h3>
                                <p className="mb-0 fs-sm">با ساخت کامیونیتی شما میتوانید با دوستان خود پاراگراف های خود را به اشتراک بگذارید و منبعی از پاراگراف های خاص را جمع آوری کنید</p>
                            </div>
                        </div>
                
                        <div className="d-md-flex align-items-start d-block mb-4 pb-2"><img className="me-md-4 mb-md-0 mb-4" src={miniPic2} alt="Icon"/>
                            <div className="ps-md-2">
                                <h3 className="h6 mb-2">رقابت با سایر کامیونیتی ها</h3>
                                <p className="mb-0 fs-sm">شما میتوانید با سایر کامیونیتی ها رقابت کنید و اعضای خود را افزایش دهید</p>
                            </div>
                        </div>
                
                        <div className="d-md-flex align-items-start d-block"><img className="me-md-4 mb-md-0 mb-4" src={miniPic3} alt="Icon"/>
                            <div className="ps-md-2">
                                <h3 className="h6 mb-2">داشتن فروشگاه کتاب</h3>
                                <p className="mb-0 fs-sm">بعد از ساخت کامیونیتی شما میتوانید یک فروشگاه کتاب بسازید و از طریق آن کسب درآمد کنید</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <br/>
                <br/>
            </div>
            <div className="row align-items-center">
                {/* <ComunityExamples/> */}
            </div>
        </div>
    );
  }
}
export default CreateComunity;

