import React from "react";
import LoginForm from "../components/auth/LoginForm";
import "./style/login.scss";

export default function Login() {
  return (
    <div className="login-page">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
}
