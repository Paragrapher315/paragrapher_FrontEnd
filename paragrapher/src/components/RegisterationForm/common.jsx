import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 150ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(177,55,92);
  }
`;


export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(177,55,92);
  background: linear-gradient(90deg, rgba(177,55,92,1) 0%, rgba(171,53,89,1) 100%);

  &:hover {
    filter: brightness(1.1);
  }
  
`;
export const Line = styled.line`
  border-left: 3px solid rgba(36, 9, 9, 0.4);
  height: 350px;
  position: absolute;
  left: 58%;
  margin-left: 0px;
  top: 100;


`;