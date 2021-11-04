import React, { Component, useContext } from "react";
import { useState } from "react";
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
  // const [state , setState] = useState({
  //     email : "",
  //     username : "",
  //     password : ""
  //  })
  // const handleChange = (e) => {
  //     const {id , value} = e.target
  //     setState(prevState => ({
  //         ...prevState,
  //         [id] : value
  //     }))
  // }
  // const handleSubmitClick = (e) => {
  //     e.preventDefault();
  //     //sendDataToServer()

  // }
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
      setEmailError("ایمیل نمی تواند خالی باشد");
      send++;
    } else {
      const checkEmail = isEmail(email.value);
      if (checkEmail == "Invalid Email") {
        // document.getElementById("EmailError").innerHTML =
        //   "ایملیل وارد شده معتبر نیست";
        // document.getElementById("email").style.border = "2px solid red";
        setEmailError("ایمیل وارد شده معتبر نیست");
        send++;
      }
    }
    if (username.value == "") {
      // document.getElementById("UsernameError").innerHTML =
      //   "نام کاربری نمیتواند خالی باشد";
      // document.getElementById("username").style.border = "2px solid red";
      setUserError("نام کاربری نمی تواند خالی باشد");
      send++;
    }
    if (password.value == "") {
      // document.getElementById("PasswordError").innerHTML =
      //   "رمز عبور نمیتواند خالی باشد";
      // document.getElementById("password").style.border = "2px solid red";
      setPasswordError("رمز عبور نمی تواند خالی باشد");
      send++;
    } else if (passwordConfirm.value != Password.value) {
      setPasswordConfError("رمز عبور و تکرار رمز عبور نمی تواند متفاوت باشد");
      send++;
    }
    if (passwordConfirm.value == "") {
      setPasswordConfError("تکرار رمز نمی تواند خالی باشد");
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
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("UsernameError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
    switch (responseData) {
      case "successful register":
        afterSuccessfulRegister();
        break;

      case "user_username_exists":
        // document.getElementById("UsernameError").innerHTML =
        //   "کاربری با این نام کاربری وجود دارد";
        //document.getElementById("username").style.border='2px solid red';
        setUserError("کاربری با این نام کاربری وجود دارد");
        break;

      case "user_email_exists":
        // document.getElementById("EmailError").innerHTML =
        //   "کاربری با این ایمیل وجود دارد";
        //document.getElementById("email").style.border='2px solid red';
        setEmailError("کاربری با این ایمیل وجود دارد");
        break;

      case "A user with that email or username already exists.":
        // document.getElementById("PasswordError").innerHTML =
        //   "کاربری با این نام کاربری یا ایمیل وجود دارد";
        setUserError("کاربری با این نام کاربری یا ایمیل وجود دارد");
        break;

      default:
        document.getElementById("EmailError").innerHTML = responseData;
        break;
    }
  }

  //after successful register
  function afterSuccessfulRegister() {
    window.alert("ثبت نام با موفقیت انجام شد.");
    switchToLogin();
  }

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/register", {
        email: email.value,
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        checkResponse("successful register");
        // props.history.push('/dashboard');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, error.response);
        if (error.response.status === 401) {
          setError(error.response.data.message);
          checkResponse(error.response.data.message);
        } else {
          setError("Something went wrong. Please try again later.");
          checkResponse(error.response.data);
        }
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
