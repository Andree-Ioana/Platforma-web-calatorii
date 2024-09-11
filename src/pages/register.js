import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import "./style/login.scss";

export default function Register() {
  return (
    <div className="login-page">
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  );
}
