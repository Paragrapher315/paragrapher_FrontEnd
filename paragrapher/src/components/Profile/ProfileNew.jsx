import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
class ProfileNew extends React.Component{
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
        
    }
    render(){
        return(
            

            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                            <span data-feather="home"></span>
                            ویرایش مشخصات
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <span data-feather="file"></span>
                            پاراگراف های اخیر من
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <span data-feather="file"></span>
                            پاراگراف های لایک شده
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <span data-feather="shopping-cart"></span>
                            کامیونیتی های من
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <span data-feather="users"></span>
                            کامیونیتی ها
                            </a>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">لوحة القيادة</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">مشاركة</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">تصدير</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            هذا الأسبوع
                        </button>
                        </div>
                    </div>

                    <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

                    
                    </main>
                </div>
            </div>
        );
    }
}
export default ProfileNew;
