import React from "react";
import Comunity from "../CreateComunity/Comunity"
function ComunityExamples(){
    return(
        <div class="bg-light rounded contaner">
            <div class="row">
                <h1 class="text-center bg-primary p-2">کامیونیتی های عمومی برتر</h1>
            </div>
            <div className="row">
                <div class="col-12 col-md-6">
                    <Comunity/>
                </div>

                <div class="col-12 col-md-6">
                    <Comunity/>
                </div>

                <div class="col-12 col-md-6">
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