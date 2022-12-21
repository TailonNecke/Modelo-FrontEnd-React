import React, { useState } from "react";
import { Page } from "./styles";
import BarraSuperior from "../../components/BarraSuperior";
import Footer from "../../components/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <title>Login WEG</title>

      <Page>
        <BarraSuperior></BarraSuperior>

        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Bem-vindo</span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login-form-btn">
                  <button className="login-form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </Page>
    </>
  );
};

export default Login;
