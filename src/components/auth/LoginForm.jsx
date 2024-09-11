import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import AuthInput from "./AuthInput";
import { signInSchema } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/userSlice";
import Button from "./Button";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (values) => {
    console.log(values);
    let res = await dispatch(loginUser({ ...values }));
    if (res?.payload?.user) {
      navigate("/");
    }
  };
  return (
    <div className="login-form">
      <div className="login-container">
        <div className="header-form">
          <h2>Welcome Back!</h2>
          <p>Continue with Google or enter your details.</p>
        </div>
        <button className="btn-login btn-google" type="submit">
          <FaGoogle /> Login with Google
        </button>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            name="email"
            type="text"
            placeholder="example@gmail.com"
            label="Email"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="*******"
            label="Password"
            register={register}
            error={errors?.password?.message}
          />
          <div className="forget-password">
            <Link to="/forget-password" className="link">
              Forget password?
            </Link>
          </div>
          {error ? (
            <div>
              <p className="text-red-400">{error} </p>
            </div>
          ) : null}
          <Button />
          <p className="account">
            <span>
              Doesn't have an account?{" "}
              <span className="text-primary">
                <Link to="/register" className="link">
                  Sign up for free
                </Link>
              </span>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
