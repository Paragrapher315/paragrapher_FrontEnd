import React from "react";
function ComunityExamples(){
    return(
        <div class="card w3-hover-shadow m-2 text-center pb-0">
                <img src="https://www.w3schools.com/w3css/img_5terre.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">نام کامیونیتی</h5>
                    <small class="card-text text-sm">این یک توضیح کوتاه درباره کامیونیتی است</small>
                    <p/>
                    <a href="#" class="btn btn-sm btn-success me-2"><i class="bi bi-binoculars"></i> مشاهده</a>
                    <a href="#" class="btn btn-sm btn-primary"><i class="bi bi-cart"></i> فروشگاه</a>
                   
                </div>
                <div className="card-footer bg-white">
                        <div className="row ">
                            <div className="col-6"><i class="bi bi-person-fill"></i>  22عضو</div>
                            
                            <div className="col-6">پاییز-99</div>
                        </div>
                        
                </div>
            </div>
    );
}
export default ComunityExamples;