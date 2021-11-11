import React from "react";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import Avatar from "../Profile/Avatar"
import BadgeAvatars from "../Profile/Avatar";
import { TextField } from "@material-ui/core";
import { EditBio } from "../../Utils/Connection";
import { Button } from "@mui/material";
import { Input } from "@material-ui/core";
class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username:"", email:"", name:"", bio:"", dob:"",oldPass:"",newPass:"",confirmNewPass:"", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibxCUG41QkeuC2K5fzpYUsh05n-lYj-Oj1w&usqp=CAU"};
      this.loadData();
    }
  
    
  
    render() {
     
      return (
        <div className="container">
            <div className="row mt-4  border border-dark rounded" style={{minHeight:"500px"}}>
                <div className="col my-3 px-1">
                    
                    <div class="d-flex align-items-start">
                        
                        <div class="d-none  d-md-flex nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="text-start nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">ویرایش مشخصات</button>
                            <button class="text-start nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">پاراگراف های محبوب من</button>
                            <button class="text-start nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">کانالهای من</button>
                            <button class="text-start nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">کتابهای خریداری شده</button>
                        </div>
                        
                        <div class="tab-content w-100 border-start" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="container p-5 py-2">
                                    <div className="row p-1">
                                        <div id="liveAlertPlaceholder"></div>
                                    </div>
                                    <div className="row border border-primary" id="changeProfile" style={{borderRadius:"40px",overflow:"hidden"}}>
                                        <div className="col-12 p-3 col-lg-3 bg-light">
                                            <br/>
                                            <br/>
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col"><BadgeAvatars src={this.state.img}/></div>
                                                <div className="col"></div>
                                            </div>
                                            <br/>
                                            <br/>
                                            <div className="row py-2">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <label htmlFor="contained-button-file"  className="w-100">
                                                        <Input accept="image/*" id="contained-button-file" multiple type="file" className="d-none"/>
                                                        <Button color="secondary" variant="contained" component="span" className="w-100">
                                                        بارگذاری تصویر
                                                        </Button>
                                                    </label>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <Button color="secondary" variant="contained" component="span" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        تغییر رمز
                                                    </Button>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">تغییر رمز عبور </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="mb-3 ms-3 row">
                                                            <label for="oldPass" class="col-sm-3 col-form-label">رمز قدیم</label>
                                                            <div class="col-sm-9">
                                                                <input type="password"  class="form-control" id="oldPass" value={this.state.oldPass} onChange={e => this.setState({oldPass:e.target.value})}/>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 ms-3 row">
                                                            <label for="newPass" class="col-sm-3 col-form-label">رمز جدید</label>
                                                            <div class="col-sm-9">
                                                                <input type="password"  class="form-control" id="newPass" value={this.state.newPass} onChange={e => this.setState({newPass:e.target.value})}/>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 ms-3 row">
                                                            <label for="confirmNewPass" class="col-sm-3 col-form-label">تکرار رمز جدید </label>
                                                            <div class="col-sm-9">
                                                                <input type="password"  class="form-control" id="confirmNewPass" value={this.state.confirmNewPass} onChange={e => this.setState({confirmNewPass:e.target.value})}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                                                        <button type="button" class="btn btn-primary">ذخیره </button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                           

                                            
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      );
    }
  }
export default Profile;
