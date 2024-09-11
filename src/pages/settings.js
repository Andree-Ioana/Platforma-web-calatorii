import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/settings/SideBar";
import "./style/settings.scss";

export default function Settings() {
  const [index, setIndex] = useState();
  return (
    <div>
      <Navbar />
      <div className="settings">
        <SideBar setIndex={setIndex} />
        {index === "1" ? (
          <div>Setarile profilului</div>
        ) : index === "2" ? (
          <div>Pagina de reporturi</div>
        ) : index === "3" ? (
          <div>Pagina pentru a vizualiza blogurile inainte de a fi postate</div>
        ) : (
          <div>Default content</div>
        )}
      </div>
    </div>
  );
}
