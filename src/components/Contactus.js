import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uf5281v",
        "template_6536jks",
        form.current,
        "-OPYUt-MSoQZmMk7F"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <StyledContactForm style={{marginRight:'550px',marginTop:'150px'}}>
        <h1 style={{fontFamily:'BYekan',textAlign:'center',marginBottom:'50px'}}>تماس با تیم پاراگرافر</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label style={{fontFamily:'BYekan'}}>نام و نام خانوادگی:</label>
        <input style={{fontFamily:'BYekan'}} type="text" name="user_name" />
        <label style={{fontFamily:'BYekan'}}>ایمیل:</label>
        <input style={{fontFamily:'BYekan'}} type="email" name="user_email" />
        <label style={{fontFamily:'BYekan'}}>متن پیغام</label>
        <textarea style={{fontFamily:'BYekan'}} name="message" />
        <input style={{fontFamily:'BYekan',backgroundColor:'#DDA15E'}} type="submit" value="ارسال" />
      </form>
      {isSent && <p style={{fontFamily:'BYekan',color:'red',fontWeight:'bold'}} className="success-message">بیغام شما با موفقیت ارسال شد</p>}
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    .success-message {
        margin-top: 1rem;
        color: green;
        font-weight: bold;
      }


    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;




