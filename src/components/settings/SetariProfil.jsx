import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SetariProfil() {
  const { user } = useSelector((state) => state.user);
  return <div className="setari-profil"></div>;
}
