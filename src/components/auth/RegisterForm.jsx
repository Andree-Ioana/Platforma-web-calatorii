import { useState } from "react";
import AuthInput from "./AuthInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeStatus, registerUser } from "../../features/userSlice";
import Button from "./Button";
import Picture from "./Picture";
import axios from "axios";
const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const cloud_secret = process.env.REACT_APP_CLOUD_SECRET;
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const uploadImage = async () => {
    let formData = new FormData();
    formData.append("upload_preset", cloud_secret);
    formData.append("file", picture);
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    );
    return data;
  };
  const onSubmit = async (data) => {
    dispatch(changeStatus("loading"));
    if (picture) {
      //upload to cloudinary and then register user
      await uploadImage().then(async (response) => {
        let res = await dispatch(
          registerUser({ ...data, picture: response.secure_url })
        );
        if (res?.payload?.user) {
          navigate("/");
        }
      });
    } else {
      let res = await dispatch(registerUser({ ...data, picture: "" }));
      if (res?.payload?.user) {
        navigate("/");
      }
    }
  };

  return (
    <div className="login-form">
      <div className="login-container">
        <div className="header-form">
          <h2>Welcome Back!</h2>
        </div>
        {/* <button className="btn-login btn-google" type="submit">
          <FaGoogle /> Login with Google
        </button> */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            name="name"
            type="text"
            placeholder="Full Name"
            label="Full Name"
            register={register}
            error={errors?.name?.message}
          />
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

          <Picture
            readablePicture={readablePicture}
            setReadablePicture={setReadablePicture}
            setPicture={setPicture}
          />
          {error ? (
            <div>
              <p className="text-red-400">{error} </p>
            </div>
          ) : null}
          <Button />
          <p className="account">
            <span>
              Have an account ?{" "}
              <span className="text-primary">
                <Link to="/login" className="link">
                  Sign in
                </Link>
              </span>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
