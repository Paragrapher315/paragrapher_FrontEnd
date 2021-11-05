import React, { Component, useContext } from "react";
import { useState } from "react";
import { Register } from "../../Utils/Connection";
import references from "../../assets/References.json";
import {
  BoxContainer,
  FormContainer,
  SubmitButton,
  Input,
  BoldLink,
} from "../common";
import axios from "axios";
import { AccountContext } from "./accountContext";
import { setUserSession } from "../../Utils/Common";
import "../../../node_modules/font-awesome/css/font-awesome.css";
import { useTransform } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import { Password } from "@mui/icons-material";
export function RegisterForm(props) {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [userError, setUserError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordConfError, setPasswordConfError] = useState(null);
  const email = useFormInput("");
  const username = useFormInput("");
  const password = useFormInput("");
  const passwordConfirm = useFormInput("");
  const [error, setError] = useState(null);
  const { switchToLogin } = useContext(AccountContext);
  //email validation
  function isEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return "Invalid Email";
    }
  }
  //check first validation before send data
  const handleBeforSend = () => {
    setError(null);
    setLoading(true);
    let send = 0;
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("UsernameError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
    document.getElementById("email").style.border = "2px solid #b1375c";
    document.getElementById("username").style.border = "2px solid #b1375c";
    document.getElementById("password").style.border = "2px solid #b1375c";
    if (email.value == "") {
      // document.getElementById("EmailError").innerHTML =
      //   "ایمیل نمیتواند خالی باشد";
      // document.getElementById("email").style.border = "2px solid red";
      setEmailError(references.err_email_empty);
      send++;
    } else {
      const checkEmail = isEmail(email.value);
      if (checkEmail == "Invalid Email") {
        // document.getElementById("EmailError").innerHTML =
        //   "ایملیل وارد شده معتبر نیست";
        // document.getElementById("email").style.border = "2px solid red";
        setEmailError(references.err_email_invalid);
        send++;
      }
    }
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
    } else if (passwordConfirm.value != password.value) {
      setPasswordConfError(references.err_passwordAndConfirmation_notEqual);
      send++;
    }
    if (passwordConfirm.value == "") {
      setPasswordConfError(references.err_passwordConfirmation_empty);
      send++;
    }
    if (send == 0) {
      console.log("sent");
      handleRegister();
    } else {
      setLoading(false);
    }
  };

  //checking backend responses

  function checkResponse(responseData) {
    setLoading(false);
    console.log("****** Response Data: ", responseData);
    switch (responseData) {
      case "successful register":
        afterSuccessfulRegister();
        break;

      case "user_username_exists":
        // document.getElementById("UsernameError").innerHTML =
        //   "کاربری با این نام کاربری وجود دارد";
        //document.getElementById("username").style.border='2px solid red';
        setUserError(references.err_usename_exists);
        break;

      case "user_email_exists":
        // document.getElementById("EmailError").innerHTML =
        //   "کاربری با این ایمیل وجود دارد";
        //document.getElementById("email").style.border='2px solid red';
        setEmailError(references.err_email_exists);
        break;

      case "A user with that email or username already exists.":
        // document.getElementById("PasswordError").innerHTML =
        //   "کاربری با این نام کاربری یا ایمیل وجود دارد";
        setUserError(references.err_usenameOrEmail_exists);
        break;

      default:
        setUserError(references.err_unknown);
        document.getElementById("EmailError").innerHTML = responseData;
        break;
    }
  }

  //after successful register
  function afterSuccessfulRegister() {
    window.alert(references.alert_register_success);
    switchToLogin();
  }

  const handleRegister = () => {
    // axios
    //   .post("http://localhost:5000/register", {
    //     email: email.value,
    //     username: username.value,
    //     password: password.value,
    //   })
    //   .then((response) => {
    //     setLoading(false);
    //     setUserSession(response.data.token, response.data.user);
    //     checkResponse("successful register");
    //     // props.history.push('/dashboard');
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error, error.response);
    //     if (error.response.status === 401) {
    //       setError(error.response.data.message);
    //       checkResponse(error.response.data.message);
    //     } else {
    //       setError("Something went wrong. Please try again later.");
    //       checkResponse(error.response.data);
    //     }
    //   });
    Register(email.value, username.value, password.value).then((message) => {
      checkResponse(message);
    });
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          id="email"
          className="fa"
          type="Email"
          placeholder="&#xf0e0; ایمیل"
          {...email}
        />
        <div
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="EmailError"
        >
          {emailError}
        </div>
        <Input
          id="username"
          className="fa"
          type="text"
          placeholder="&#xf007; نام کاربری"
          {...username}
        />
        <span
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="UsernameError"
        >
          {userError}
        </span>
        <Input
          id="password"
          className="fa"
          type="password"
          placeholder="&#xf084; رمز عبور"
          {...password}
        />
        <span
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="PasswordError"
        >
          {passwordError}
        </span>
        <Input
          id="password-confirmation"
          className="fa"
          type="password"
          placeholder="&#xf084; تکرار رمز عبور"
          {...passwordConfirm}
        />
        <span
          className="small"
          style={{ color: "red", textAlign: "right", marginRight: "0.5rem" }}
          id="PasswordConfError"
        >
          {passwordConfError}
        </span>
        <SubmitButton
          onClick={handleBeforSend}
          type="button"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress color="inherit" size="1rem" />
          ) : (
            "ثبت نام"
          )}
        </SubmitButton>
        <BoldLink onClick={switchToLogin}>
          اگر حساب کاربری دارید از اینجا وارد شوید!
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

export default RegisterForm;
