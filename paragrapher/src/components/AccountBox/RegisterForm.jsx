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
  const email = useFormInput("");
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const { switchToLogin } = useContext(AccountContext);
  const handleRegister = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:5000/register", {
        email: email.value,
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        // props.history.push('/dashboard');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, error.response);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
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
        <Input
          id="username"
          className="fa"
          type="text"
          placeholder="&#xf007; نام کاربری"
          {...username}
        />
        <Input
          id="password"
          className="fa"
          type="password"
          placeholder="&#xf084; گذرواژه"
          {...password}
        />
        <SubmitButton onClick={handleRegister} type="button" disabled={loading}>
          {loading ? "در حال بارگزاری..." : "ثبت نام"}
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
