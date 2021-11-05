import React, { Component, useContext, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
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
  document.getElementById("box").style.display = "none";
  document.getElementById("logout").style.display = "block";
  window.alert("با موفقیت وارد شدید");
}
//backend respone
function backendResponse() {
  document.getElementById("Errors").innerHTML = "لطفا دوباره تلاش کنید";
}
export function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const { switchToRegister } = useContext(AccountContext);
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:5000/login", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        console.log("888", "login Ok\n", response.data);
        successfulLogin();
        if (response.data.token !== undefined) {
          const cookies = new Cookies();
          cookies.set("x-access-token", response.data.token, { path: "/" });
          console.log(cookies.get("x-access-token"));
        }

        //props.history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
        if (error.response.status === 401) {
          setError(error.response.data.message);
          backendResponse();
        } else {
          setError("Something went wrong. Please try again later.");
          backendResponse();
        }
      });
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          className="fa"
          type="username"
          placeholder="&#xf0e0; نام کاربری"
          {...username}
        />
        <Input
          className="fa"
          type="password"
          placeholder="&#xf084; گذرواژه"
          {...password}
        />
        <span className="small" style={{ color: "red" }} id="Errors"></span>
        <SubmitButton type="button" onClick={handleLogin} disabled={loading}>
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
