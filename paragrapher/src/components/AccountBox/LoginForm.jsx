import React, { Component, useContext, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import references from "../../assets/References.json";
import { Login } from "../../Utils/Connection";
import {
  BoxContainer,
  FormContainer,
  SubmitButton,
  Input,
  BoldLink,
} from "../common";
import { AccountContext } from "./accountContext";
import { setUserSession } from "../../Utils/Common";
import "../../../node_modules/font-awesome/css/font-awesome.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { BrowserView, MobileView } from "react-device-detect";
axios.defaults.withCredentials = true;
//successful login
function successfulLogin() {

  // document.getElementById("box").style.display = "none";
  // document.getElementById("logout").style.display = "block";
  window.alert(references.alert_login_successful);
}
// //backend respone
// function backendResponse() {
//   document.getElementById("Errors").innerHTML = "لطفا دوباره تلاش کنید";
// }
export function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [userError, setUserError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState(null);
  const { switchToRegister } = useContext(AccountContext);
  const handleBeforSend = () => {
    setError(null);
    setLoading(true);
    let send = 0;
    document.getElementById("UsernameError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
    document.getElementById("username").style.border = "2px solid #b1375c";
    document.getElementById("password").style.border = "2px solid #b1375c";
    if (username.value == "") {
      // document.getElementById("UsernameError").innerHTML =
      //   "نام کاربری نمیتواند خالی باشد";
      // document.getElementById("username").style.border = "2px solid red";
      setUserError(references.err_username_empty);
      send++;
    }
    if (password.value == "") {
      // document.getElementById("PasswordError").innerHTML =
      //   "رمز عبور نمیتواند خالی باشد";
      // document.getElementById("password").style.border = "2px solid red";
      setPasswordError(references.err_password_empty);
      send++;
    }
    if (send == 0) {
      console.log("sent");
      handleLogin();
    } else {
      setLoading(false);
    }
  };
  function checkResponse(responseData) {
    console.log(responseData);
    setLoading(false);
    switch (responseData) {
      case "successful login":
        successfulLogin();
        break;
      case "already logged in":
        window.alert(references.err_already_loggedIn);
      default:
        setError();
        setLoginFailed(true);
        break;
    }
  }
  const handleLogin = () => {
    // axios
    //   .post("http://localhost:5000/login", {
    //     username: username.value,
    //     password: password.value,
    //   })
    //   .then((response) => {
    //     setLoading(false);
    //     setUserSession(response.data.token, response.data.user);
    //     console.log("888", "login Ok\n", response.data);
    //     successfulLogin();
    //     if (response.data.token !== undefined) {
    //       const cookies = new Cookies();
    //       cookies.set("x-access-token", response.data.token, { path: "/" });
    //       console.log(cookies.get("x-access-token"));
    //     }
    //     //props.history.push('/dashboard');
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //     setLoading(false);
    //     if (error.response.status === 401) {
    //       setError(error.response.data.message);
    //       // backendResponse();
    //       setLoginFailed(true);
    //     } else {
    //       setError("Something went wrong. Please try again later.");
    //       // backendResponse();
    //       setLoginFailed(true);
    //     }
    //   });
    Login(username.value, password.value).then((response) => {
      checkResponse(response);
    });
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          id="username"
          className="fa"
          type="username"
          placeholder="&#xf0e0; نام کاربری"
          {...username}
        />
        <div
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="UsernameError"
        >
          {userError}
        </div>
        <Input
          id="password"
          className="fa"
          type="password"
          placeholder="&#xf084; گذرواژه"
          {...password}
        />

        <div
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="PasswordError"
        >
          {passwordError}
        </div>
        {loginFailed && (
          <div
            className="small"
            style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
            id="UsernameError"
          >
            نام کاربری یا رمز عبور اشتباه است لطفا دوباره امتحان کنید
          </div>
        )}
        <div
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="Errors"
        ></div>
        <SubmitButton
          type="button"
          onClick={handleBeforSend}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" size="1rem" /> : "ورود"}
        </SubmitButton>
        <BoldLink onClick={switchToRegister}>
          همین حالا حساب کاربری خود را بسازید!
        </BoldLink>
      </FormContainer>
    </BoxContainer>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default LoginForm;
