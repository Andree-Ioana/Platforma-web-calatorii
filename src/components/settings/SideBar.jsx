import React from "react";
import { useSelector } from "react-redux";

export default function SideBar({ setIndex }) {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <button onClick={() => setIndex("1")}>Setari profil</button>
      {user?.isAdmin && (
        <>
          <button onClick={() => setIndex("2")}>Reporturi</button>
          <button onClick={() => setIndex("3")}>Review bloguri</button>
        </>
      )}
    </div>
  );
}
