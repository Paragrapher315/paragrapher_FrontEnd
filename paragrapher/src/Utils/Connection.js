import axios from "axios";
import references from '../assets/References.json';
import { setUserSession, cookie } from "./Common";
import Cookies from "universal-cookie";
import {makeURL} from './Common';

export const Logout = async () => {
    cookie.remove("x-access-token");
    // send some data to backend to remove cookie
    window.location.reload();
    await axios 
        .post(makeURL(references.url_logout), {cookie: cookie})
        .then((response) => {
            cookie.remove("x-access-token");
        })
        .catch((error) => {
            console.log("error in logout");
        })
}

export const Register = async (email, username, password) => {
    let message = ""
    await axios
        .post(makeURL(references.url_register), {
            email: email, 
            username: username, 
            password: password,
        })
        .then((response) => {
            // register success
            setUserSession(response.data.token, response.data.user);
            message = "successful register";
        })
        .catch((error) => {
            // register failed
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}
export const Login = async(username, password) => {
    let message = "";
    if(cookie.get("x-access-token") !== undefined) {
        message = "already logged in"
    } else {
    await axios 
        .post(makeURL(references.url_login), {
            username: username, 
            password: password
        })
        .then((response) => {
            // login success
            setUserSession(response.data.token, response.data.user);
            var today = new Date();
            var expirationDate = new Date();
            expirationDate.setDate(today.getDate() + 1)
            cookie.set("x-access-token", response.data.token, { path: "/", expires: expirationDate }); // add expire 
            message = "successful login";
        })
        .catch((error) => {
            // login faild
            if(error.response.status === 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    }
    return message;
}
