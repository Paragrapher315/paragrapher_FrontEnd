import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../common";
import { useStyles } from "../common";
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
//import {Grid} from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Bgtest } from "../common";
import { makeStyles, withStyles } from '@material-ui/core/styles';



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
            opacity: 1,
          },
          '100%': {
            transform: 'scale(3)',
            opacity: 0,
          },
        },
      }))(Badge);
      
      
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" className={classes.profileTotalContainer}>
                <Grid container className={classes.profileTotalGrid}>
                    <Grid item xs={12} sm={4}>
                        <Grid align="center">
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                variant="dot"
                                >
                                <Avatar style={{width:"165px" , height:"165px"}} alt="Remy Sharp" src="" />
                            </StyledBadge>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Grid align="center">
                            LEFT
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>

    );
}
export default EditProfile;