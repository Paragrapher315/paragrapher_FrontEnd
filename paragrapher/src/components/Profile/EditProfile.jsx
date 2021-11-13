import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../common";
import { useStyles } from "../common";
import Avatar from '@material-ui/core/Avatar';
import { useState, useEffect } from "react";
import Badge from '@material-ui/core/Badge';
//import {Grid} from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import references from "../../assets/References.json";
import { Input1 } from "../common";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";
import Cookies from "universal-cookie";
import { makeURL } from "../../Utils/Common";
import { cookie } from "../../Utils/Common";
import { EditBio } from "../../Utils/Connection";
import { Input } from "@material-ui/core";


class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"", email:"", name:"", bio:"", dob:"",oldPass:"",newPass:"",confirmNewPass:"", open:false};
    this.loadData();
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
        })
        .catch((error) => {
            window.alert(error);
        })
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    // const username = INPUTS("username");
    // const email = INPUTS("");
    // const name = INPUTS("");
    // const bio = INPUTS("لطفا در حد دو خط بیو خود را وارد کنید");
    return (
      <Grid container style={{marginTop:"20px",borderRadius:"20px",overflow:"hidden"}}>
        <Grid item xs={12} sm={4} align="center"  style={{paddingTop:"20px",backgroundColor: "#e9edde",}}>
          <Grid align="center">
            <div
                overlap="circular"
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                variant="dot"
                >
                <Avatar style={{width:"165px" , height:"165px", marginTop:"90px",alignContent: 'center',paddingTop: '50'}} alt="Remy Sharp" src="" />
            </div>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button color="secondary" variant="contained" component="span" style={{marginTop:"25px", width:"120px" ,borderRadius:"50px"}}>
                      بارگذاری تصویر
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} >
                  <Button color="secondary" variant="contained" style={{marginTop:"25px", width:"120px", marginBottom:"70px", borderRadius:"50px"}} onClick={this.setState({open:true})}>
                    تغییر رمز عبور
                  </Button>
                </Grid>
              </Grid>
                        
              <Grid>
                <Box maxWidth="sx">
                  <Dialog open={this.state.open} onClose={this.setState({open:false})} aria-labelledby="form-dialog-title">
                    <DialogTitle align="start" id="form-dialog-title">تغییر رمز عبور</DialogTitle>
                          
                    <DialogContent>
                      <Grid itme xs={12} >
                        <TextField style={{marginTop:"10px"}}
                          type="password"
                          id="oldPass"
                          placeholder="رمز قدیم"
                          value={this.oldPass}
                        />
                      </Grid>
                      <Grid itme xs={12} >
                        <TextField style={{marginTop:"10px"}}
                          type="password"
                          id="newPass"
                          placeholder="رمز جدید"
                          value={this.newPass}
                        />
                      </Grid>
                      <Grid itme xs={12} >
                          <TextField style={{marginTop:"10px"}}
                            type="password"
                            id="confirmNewPass"
                            placeholder="تکرار رمز جدید"
                            value={this.confirmNewPass}
                        />
                      </Grid>
                      <Grid sx={6} item align="start">
                        <Button style={{margin:"23px", width:"50px"}} align="start" variant="contained" onClick={this.setState({open:false})}>
                          تغییر
                        </Button>
                        <Button  style={{margin:"23px", width:"50px"}} align="end" variant="contained" onClick={this.setState({open:false})}>
                          انصراف
                        </Button>
                      </Grid>
                    </DialogContent>
                </Dialog>
              </Box>  
            </Grid>             
          </Grid>
        </Grid>
        
        <Grid item xs={12} sm={8}>
          <Grid align="center">
            <Grid container style = {{paddingTop:"20px", backgroundColor: "#e9edde"}}>
              <Grid itme xs={12}>
                  <TextField style={{marginTop:"0px"}}
                    label="نام کاربری"
                    id="outlined-required"
                    value = {this.state.username}
                    // {... this.state.username}
                    InputProps={{
                      readOnly: true,
                  }}
                />
              </Grid>
              <Grid itme xs={12} >
                  <TextField align="end" style={{marginTop:"10px"}}
                    label="Standard"
                    id="outlined-required"
                    label="ایمیل"
                    value = {this.state.email}
                    // defaultValue="user@mail.com"
                    InputProps={{
                      readOnly: true,
                  }}
                />
              </Grid>
              <Grid itme xs={12} >
                <TextField style={{marginTop:"10px"}}
                  id="outlined-required"
                  label="نام "
                  // defaultValue="نام و نام خانوادگی"
                  placeholder="نام خود را وارد کنید"
                  value = {this.state.name}
                />
              </Grid>
              <Grid itme xs={12} >
                <form noValidate>
                    <TextField style={{marginTop:"10px", width:"227px"}}
                      id="date"
                      label="تاریخ تولد"
                      type="date"
                      value = {this.state.dob}
                      // defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                </form>
              </Grid>
              <Grid item xs={12}>
                <TextField style={{marginTop:"10px", width:"227px"}}
                  
                  id="outlined-multiline-static"
                  label="بیو"
                  multiline
                  {... this.state.bio}
                  rows={4}
                  // defaultValue="بیو خود را شامل حداکثر 200 کاراکتر وارد کنید"
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={handleSubmit()} color="secondary" variant="contained" style={{marginTop:"25px", width:"227px", marginBottom:"15px", borderRadius:"50px"}}>
                  اعمال تغییرات
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button color="secondary" variant="contained" style={{marginTop:"10px", width:"227px", marginBottom:"15px", borderRadius:"50px"}}>
                  بازگشت به پروفایل 
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    );
  }
}




          


function EditProfile(){
  // const containerstyle={maxWidth:"700px",heigt:"70vh"}
  // const rigthPaper={pending:"20",backgroundColor:"blue", width:"100%", heigt:"3000px"}
  // const leftPaper={maxWidth:"1000px"}
  // return(
  //     <ThemeProvider theme={theme}>
  //         <Container style={containerstyle}>
  //             <Grid container spacing={0}>
  //                 <Grid item xs={12} sm={3}>
  //                     <Paper style={rigthPaper} elevation={0}>xs=12 sm=6gfgfgfgfgf</Paper>
  //                 </Grid>
  //                 <Grid style={containerstyle} item xs={12} sm={9}>
  //                     <Paper elevation={0}>xs=12 sm=6</Paper>
  //                 </Grid>
  //             </Grid>
  //         </Container>
  //     </ThemeProvider>
  // );
  // const [data, setData] = useState(null);
  // axios
  //     .get(makeURL(references.url_profile_editProfile))
  //     .then((response) => {
  //         // register success
  //         setData(response.data[0]) ;
  //     })
  //     .catch((error) => {
  //         // register failed
          
  //     })
  
    
    const oldPass = INPUTS("");
    const newPass = INPUTS("");
    const confirmNewPass = INPUTS("");
    
  
  const StyledBadge = withStyles((theme) => ({
      badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120%',
          height: '120%',
          borderRadius: '50%',
          animation: '$ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(1)',
          opacity: 10,
        },
        '100%': {
          transform: 'scale(3)',
          opacity: 0,
        },
      },
    }))(Badge);
    const Input = styled('input')({
      display: 'none',
    })
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className={classes.profileTotalContainer}>
          <ProfileForm />
      </Container>
    </ThemeProvider>
  );
}

const INPUTS = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
      setValue(e.target.value);
  }
  return {
      value,
      onChange: handleChange
  }
}
// function readDataFromBackToShow(){
//   axios.get(references.url_address+references.url_profile_editProfile)
//     .then(response =>setInitialValues());
// }

function handleSubmit() {
  // console.log("hello");
}

export default EditProfile;