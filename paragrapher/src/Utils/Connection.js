import axios from "axios";
import references from '../assets/References.json';
import { setUserSession } from "../../Utils/Common";
import Cookies from "universal-cookie";
export const Register = (email, username, password) => {
    axios
        .post(references.url_register, {
            email: email, 
            username: username, 
            password: password,
        })
        .then((response) => {
            // register success
            setUserSession(response.data.token, response.data.user);
            return "successful register";
        })
        .catch((error) => {
            // register failed
            console.log(error, error.response);
            if(error.response.status == 401) {
                return error.response.data.message;
            } else {
                return error.response.data;
            }
        })
}
export const Login = (username, password) => {
    axio 
        .post(references.url_login, {
            username: username, 
            password: password
        })
        .then((response) => {
            // login success
            setUserSession(response.data.token, response.data.user);
            const cookies = new Cookies();
            cookies.set("x-access-token", response.data.token, { path: "/" });
            return "successful login";
        })
        .catch((error) => {
            // login faild
            if(error.response.status === 401) {
                return error.response.data.message;
            } else {
                return error.response.data;
            }
        })
}