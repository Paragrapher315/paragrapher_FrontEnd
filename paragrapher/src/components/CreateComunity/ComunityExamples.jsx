import React from "react";
import Comunity from "../CreateComunity/Comunity"
function ComunityExamples(){
    return(
        <div class="rounded contaner" style={{backgroundColor:"#d4e1e7"}}>
            <div class="row">
                {/* <h1 class="text-center p-2">کامیونیتی های عمومی برتر</h1> */}
            </div>
            <div className="row">
                <div class="col-12 col-md-6  mt-5">
                    <Comunity/>
                </div>

                <div class="col-12 col-md-6">
                    <Comunity/>
                </div>

                
            </div>
            
        </div>

    );
}
export default ComunityExamples;