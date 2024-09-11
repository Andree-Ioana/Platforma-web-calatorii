import { useState } from "react";
import "./style/login.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthInput({
  name,
  type,
  placeholder,
  label,
  register,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-input" style={{ position: "relative" }}>
      <label htmlform={name} className="text-input">
        {label}
      </label>
      <input
        className="form-input"
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        {...register(name)}
      />
      {label === "Password" && (
        <div
          className="show-password"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {!showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
      {error && (
        <p style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
