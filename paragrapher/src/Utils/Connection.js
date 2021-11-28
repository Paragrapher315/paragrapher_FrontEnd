import axios from "axios";
import references from '../assets/References.json';
import { setUserSession, cookie, getUser } from "./Common";
import Cookies from "universal-cookie";
import {makeURL} from './Common';

export const Logout = async () => {
    cookie.remove("x-access-token");
    // send some data to backend to remove cookie
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
            setUserSession(response.data.token, username);
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
export const EditBio = async (bio) => {
    let message = ""
    await axios
        .post(makeURL(references.url_change_bio), {
            bio:bio,
        })
        .then((response) => {
        
            console.log(response)
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}
export const EditDob = async (dob) => {
    let message = ""
    await axios
        .post(makeURL(references.url_change_dob), {
            dob:dob,
        })
        .then((response) => {
        
            console.log(response)
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}

export const EditName = async (profile_name) => {
    let message = ""
    await axios
        .post(makeURL(references.url_change_name), {
            profile_name:profile_name,
        })
        .then((response) => {
        
            console.log(response)
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}
export const JoinCommunity = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    const un = getUser();
    await axios 
        .post(makeURL(address), {
            username: un
        })
        .then((response) => {
            console.log(response)
            return true;
        })
        .catch((error) => {
            console.log(error)
            return false;
        })
    
}

export const CheckCommunityJoined = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    let message = false;
    await axios
        .patch(makeURL(address))
        .then((response) => {
            console.log(response)
            message = true;
        })
        .catch((error) => {
            console.log(error)
            message = false;
        })
    return message
}

export const CheckCommunitySubscribed = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    let message = false;
    await axios
        .patch(makeURL(address), {})
        .then((response) => {
            console.log(response)
            message = response.data.res == true
        })
        .catch((error) => {
            console.log(error)
            message = false
        })
    return message
}

export const EnableNotification = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    let message = false;
    await axios
        .put(makeURL(address), {

        })
        .then((response) => {
            console.log(response)
            message = true;
        })
        .catch((error) => {
            console.log(error)
            message = false;
        })
    return message
}
export const LeaveCommunity = async (communityName) => {
    const address = "/community/" + communityName + "/leave";
    let message = false;
    await axios
        .delete(makeURL(address))
        .then((response) => {
            console.log(response)
            message = true;
        })
        .catch((error) => {
            console.log(error)
            message = false
        })
    return message
    
}
export const GetCommunityInfo = async (communityName) => {
    const address = "/community/" + communityName;
    let res;
    await axios
        .get(makeURL(address))
        .then((response) => {
            console.log("This is ", response)
            res = response;
        })
        .catch((error) => {
            console.log("error is ", error)
            res = error;
        })
    return res;   
}
export const BestCommunityParagraphs = async (communityName) => {
    const address = "/community/" + communityName;
    let res;
    await axios
        .patch(makeURL(address), {})
        .then((response) => {
            console.log("Best Community Paragraph", response);
            res = response;
        })
        .catch((error) => {
            console.log("Best Community Paragraph err", error.response);
            res = error;
        })
    return res;
}
export const GetCommunityParagraphs = async (communityName, start, end) => {
    const address = "/community/" + communityName;
    let res;
    await axios
        .put(makeURL(address), {
            start_off: start, 
            end_off: end
        })
        .then((response) => {
            console.log("Community Paragraph", response);
            res = response;
        })
        .catch((error) => {
            console.log("Community Paragraph err", error);
            res = error;
        })
    return res;

}