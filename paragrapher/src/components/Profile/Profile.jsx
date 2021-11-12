import React from "react";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import Avatar from "../Profile/Avatar"
import BadgeAvatars from "../Profile/Avatar";
import { TextField } from "@material-ui/core";
import { EditBio, EditPass, EditDob } from "../../Utils/Connection";
import { Button } from "@mui/material";
import { Input } from "@material-ui/core";
class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username:"", email:"", name:"", bio:"", dob:"",oldPass:"",newPass:"",confirmNewPass:"", img:null, new_img:null, loaded:0, new_img_src:null};
    }

    componentDidMount(){
        this.loadData();
    }

    handleselectedFile = event => {
        this.setState({
          new_img: event.target.files[0],
          loaded: 0,
          new_img_src:URL.createObjectURL(event.target.files[0])
        })
       
      }

    handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.new_img)

    axios
        .post(makeURL(references.url_upload_pp), data, {
        onUploadProgress: ProgressEvent => {
            this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
            })
        },
        })
        .then(res => {
        console.log(res.statusText)
        })

    }
    
    loadData = async () => {
      await axios
          .get(makeURL(references.url_profile_info))
          .then((response) => {
              console.log(response.data[0]);
              this.setState({username : response.data[0].username});
              this.setState({email : response.data[0].email});
              this.setState({name : response.data[0].profile_name});
              this.setState({bio : response.data[0].bio});
              this.setState({dob : response.data[0].dob});
              this.setState({img : response.data[0].avatar});
              console.log(response.data[0].avatar)
          })
          .catch((error) => {
              window.alert(error);
          })
    }
    checkPassBeforeSend(){
        if(this.state.confirmNewPass!==this.state.newPass){
            document.getElementById("errors").innerHTML="رمز جدید و تکرار آن مطابقت ندارد!"
        }
        else{
            this.EditPass();
            
        }
    }
    EditPass = async () => {
        let message = ""
        await axios
            .post(makeURL(references.url_change_pass), {
                old_password:this.state.oldPass,
                new_password:this.state.newPass
            })
            .then((response) => {
                if(response.data.message=="Wrong password entered."){
                    document.getElementById("errors").innerHTML="پسور وارد شده با پسور قبلی شما مطابقت ندارد"
                }
                else{
                    window.alert("رمز شما با موفقیت تغییر کرد");
                    window.location.reload();
                }
            
                
            })
            .catch((error) => {
                window.alert("خطای سرور. لطفا دوباره تلاش کنید")
                console.log(error, error.response.data);
                if(error.response.status == 401) {
                    message = error.response.data.message;
                } else {
                    message = error.response.data;
                }
            })
        return message;
    }
  
    render() {
     
      return (
        <div className="container">
            <div className="row mt-4  border border-dark rounded" style={{minHeight:"500px"}}>
                <div className="col my-3 px-1">
                    
                    <div className="d-flex align-items-start">
                        
                        <div className="d-none  d-md-flex nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="text-start nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">ویرایش مشخصات</button>
                            <button className="text-start nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">پاراگراف های محبوب من</button>
                            <button className="text-start nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">کانالهای من</button>
                            <button className="text-start nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">کتابهای خریداری شده</button>
                        </div>
                        
                        <div className="tab-content w-100 border-start" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
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
                                                <div className="col"><BadgeAvatars src={references.url_address+this.state.img} h="100px" w="100px"/></div>
                                                <div className="col"></div>
                                            </div>
                                            <br/>
                                            <br/>
                                            <div className="row py-2">
                                                <div className="col"></div>
                                                
                                                <div className="col"></div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <Button color="secondary" variant="contained" component="span" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                         تغییر تصویر
                                                    </Button>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <Button color="secondary" variant="contained" component="span" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>document.getElementById("errors").innerHTML=""}>
                                                        تغییر رمز
                                                    </Button>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                           

                                            
                                            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel1">تغییر تصویر کاربری  </h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col"></div>
                                                        <div className="col"><BadgeAvatars src={this.state.new_img_src} h="150px" w="150px"/></div>
                                                        <div className="col"></div>
                                                    </div>
                                                    
                                                    
                                                    <form  className="container" enctype="multipart/form-data" onsubmit={()=>window.location.reload()}>
                                                        <div className="form-inline justify-content-center mt-5">
                                                            <label htmlFor="image" className="ml-sm-4 font-weight-bold mr-md-4 mb-5">تصویر :  </label>
                                                            <div className="input-group">
                                                                <input type="file" id="image" name="file" 
                                                                accept="image/*" className="file-custom" onChange={this.handleselectedFile}/>
                                                            </div>
                                                        </div>

                                                        <div className="input-group justify-content-center mt-4">
                                                            <button type="submit" className="btn btn-md btn-primary" onClick={this.handleUpload}>ارسال</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">تغییر رمز عبور </h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3 ms-3 row">
                                                        <label for="oldPass" className="col-sm-3 col-form-label">رمز قدیم</label>
                                                        <div className="col-sm-9">
                                                            <input type="password"  className="form-control" id="oldPass" defaultValue={this.state.oldPass} onChange={e => this.setState({oldPass:e.target.value})}/>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 ms-3 row">
                                                        <label for="newPass" className="col-sm-3 col-form-label">رمز جدید</label>
                                                        <div className="col-sm-9">
                                                            <input type="password"  className="form-control" id="newPass" defaultValue={this.state.newPass} onChange={e => this.setState({newPass:e.target.value})}/>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 ms-3 row">
                                                        <label for="confirmNewPass" className="col-sm-3 col-form-label">تکرار رمز جدید </label>
                                                        <div className="col-sm-9">
                                                            <input type="password"  className="form-control" id="confirmNewPass" defaultValue={this.state.confirmNewPass} onChange={e => this.setState({confirmNewPass:e.target.value})}/>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 ms-3 row">
                                                        <span id="errors" className="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                                                    <button type="button" className="btn btn-primary" onClick={()=>this.checkPassBeforeSend()}>ذخیره </button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-12 p-3 col-lg-9 px-5">
                                            
                                            <div className="mb-3 ms-3 row">
                                                <label for="email" className="col-sm-3 col-form-label">ایمیل:</label>
                                                <div className="col-sm-9">
                                                    <input type="text" readOnly className="form-control-plaintext" id="email" defaultValue={this.state.email}/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row ms-3">
                                                <label for="username" className="col-sm-3 col-form-label">نام کاربری:</label>
                                                <div className="col-sm-9">
                                                <input type="text" readOnly className="form-control-plaintext" id="username" defaultValue={this.state.username}/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row ms-3">
                                                <label for="name" className="col-sm-3 col-form-label">نام: </label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="name" defaultValue={this.state.name} onChange={ e => this.setState({name:e.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row ms-3">
                                                <label for="inputDob" className="col-sm-3 col-form-label">تاریخ تولد: </label>
                                                <div className="col-sm-9">
                                                    <TextField style={{marginTop:"10px", width:"100%", borderColor:"lightcyan"}}
                                                        id="Dob"
                                                        
                                                        type="date"
                                                        defaultValue = {this.state.dob}
                                                        onChange={ e => this.setState({dob:e.target.value})}
                                                        // defaultValue="2017-05-24"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="border border-secondary rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3 row ms-3">
                                                <label for="inputBio" className="col-sm-3 col-form-label"> بیو: </label>
                                                <div className="col-sm-9">
                                                    <textarea type="text" className="form-control" id="inputBio" rows="3" defaultValue={this.state.bio} onChange={ e => this.setState({bio:e.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <div className="d-grid gap-2">
                                                        <button className="btn btn-success" type="button" onClick={()=>{EditBio(this.state.bio); {EditDob(this.state.dob)}; alert("تغییرات با موفقیت انجام شد",'success')}}>اعمال تغییرات</button>
                                                    </div>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      );
    }
  }
export default Profile;

function alert(message, type) {
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
}

  