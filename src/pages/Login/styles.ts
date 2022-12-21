import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
  
  .container-login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .wrap-login {
    width: 430px;
    height: 400px;
    border-radius: 5px;
    padding: 50px;
    background: #ffffff;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .login-form {
    width: 100%;
  }

  .login-form-title {
    display: block;
    font-size: 30px;
    color: #00579d;
    text-align: center;
  }

  .wrap-input {
    width: 100%;
    position: relative;
    margin-top: 30px;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
  }

  .input {
    font-size: 15px;
    color: black;
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: 45px;
    background-color: transparent;
    padding: 0 5px;
  }

  .focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    color: #adadad;
  }

  .focus-input::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #d5edfa;
    background: -webkit-linear-gradient(to left, #28b9da, #00579d);
    background: -o-linear-gradient(to left, #28b9da, #00579d);
    background: -moz-linear-gradient(to left, #28b9da, #00579d);
    background: linear-gradient(to left, #28b9da, #00579d);
  }

  .focus-input::after {
    font-size: 15px;
    color: #999999;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input:focus {
    outline: 0;
  }

  .input:focus + .focus-input::after {
    top: -15px;
  }

  .input:focus + .focus-input::before {
    width: 100%;
  }

  .has-val + .focus-input::after {
    top: -15px;
  }

  .has-val + .focus-input::before {
    width: 100%;
  }

  .container-login-form-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
  }

  .login-form-btn {
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #d5edfa;
    background: -webkit-linear-gradient(to left, #28b9da, #00579d);
    background: -o-linear-gradient(to left, #28b9da, #00579d);
    background: -moz-linear-gradient(to left, #28b9da, #00579d);
    background: linear-gradient(to left, #28b9da, #00579d);
  }

  .login-form-btn:hover {
    cursor: pointer;
  }
`;
