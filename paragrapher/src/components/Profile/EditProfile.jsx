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
  const username = INPUTS("");
  const email = INPUTS("");
  const name = INPUTS("");
  const bio = INPUTS("");
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
        <Grid container className={classes.profileTotalContainer}>
          <Grid item xs={12} sm={4} align="center"  className={classes.profileTotalGrid}>
            <Grid align="center">
              <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                  }}
                  variant="dot"
                  >
                  <Avatar className={classes.profileAvatar} style={{width:"165px" , height:"165px", marginTop:"90px"}} alt="Remy Sharp" src="" />
              </StyledBadge>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <label htmlFor="contained-button-file">
                      <Input accept="image/*" id="contained-button-file" multiple type="file" />
                      <Button color="secondary" variant="contained" component="span" style={{marginTop:"25px", width:"120px"}}>
                        بارگذاری تصویر
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} >
                    <Button color="secondary" variant="contained" style={{marginTop:"25px", width:"120px", marginBottom:"70px"}} onClick={handleClickOpen}>
                      تغییر رمز عبور
                    </Button>
                  </Grid>
                </Grid>
                          
                <Grid>
                  <Box maxWidth="sx">
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                      <DialogTitle align="start" id="form-dialog-title">تغییر رمز عبور</DialogTitle>
                            
                      <DialogContent>
                        <Grid itme xs={12} >
                          <TextField style={{marginTop:"10px"}}
                            type="password"
                            id="oldPass"
                            label="رمز قدیم"
                            {...oldPass}
                          />
                        </Grid>
                        <Grid itme xs={12} >
                          <TextField style={{marginTop:"10px"}}
                            type="password"
                            id="newPass"
                            label="رمز جدید"
                            {...newPass}
                          />
                        </Grid>
                        <Grid itme xs={12} >
                            <TextField style={{marginTop:"10px"}}
                              type="password"
                              id="confirmNewPass"
                              label="تکرار رمز جدید"
                              {...confirmNewPass}
                          />
                        </Grid>
                        <Grid sx={6} item align="start">
                          <Button style={{margin:"23px", width:"50px"}} align="start" variant="contained" onClick={handleClose}>
                            تغییر
                          </Button>
                          <Button  style={{margin:"23px", width:"50px"}} align="end" variant="contained" onClick={handleClose}>
                            انصراف
                          </Button>
                        </Grid>
                      </DialogContent>
                  </Dialog>
                </Box>  
              </Grid>             
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.profileTotalGrid1}>
            <Grid align="center">
              <Grid container>
                <Grid itme xs={12} >
                    <TextField style={{marginTop:"0px"}}
                      id="outlined-required"
                      label="نام کاربری"
                      defaultValue="username"
                      {...username}
                      InputProps={{
                        readOnly: true,
                    }}
                  />
                </Grid>
                <Grid itme xs={12} >
                    <TextField style={{marginTop:"10px"}}
                      id="outlined-required"
                      label="ایمیل"
                      {...email}
                      defaultValue="user@mail.com"
                      InputProps={{
                        readOnly: true,
                    }}
                  />
                </Grid>
                <Grid itme xs={12} >
                  <TextField style={{marginTop:"10px"}}
                    id="outlined-required"
                    label="نام "
                    defaultValue="نام و نام خانوادگی"
                    placeholder="نام خود را وارد کنید"
                    {...name}
                  />
                </Grid>
                <Grid itme xs={12} >
                  <form noValidate>
                      <TextField style={{marginTop:"10px", width:"227px"}}
                        id="date"
                        label="تاریخ تولد"
                        type="date"
                        defaultValue="2017-05-24"
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
                    {...bio}
                    rows={4}
                    defaultValue="بیو خود را شامل حداکثر 200 کاراکتر وارد کنید"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button color="secondary" variant="contained" style={{marginTop:"25px", width:"227px", marginBottom:"15px"}}>
                    اعمال تغییرات
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
export default EditProfile;