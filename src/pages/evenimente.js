import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";
import {
  ev1,
  ev2,
  ev3,
  ev4,
  ev5,
  ev6,
  ev7,
  ev8,
  ev9,
  ev10,
  ev11,
  ev12,
} from "../images/";
export default function Evenimente() {
  const p1 =
    "Dacă nu ai participat încă la aceste evenimente, te invităm să arunci o privire! Poate vei descoperi experiențe care să te inspire să ieși din cotidian și să te bucuri de România într-un mod diferit. Evenimentele noastre sunt gândite să aducă oamenii împreună, să creeze amintiri și să ofere clipe de neuitat.";
  const p2 =
    "Dacă și tu ești un pasionat de evenimente și călătorii, te invităm să te alături nouă. Fii parte din comunitatea noastră și descoperă alături de alți entuziaști cele mai bune evenimente din România. Împreună putem face schimb de idei, recomandări și experiențe unice.";
  const p3 = "Fii la curent cu toate noutățile!";
  const p = " ";
  const title = "Evenimente în România: Descoperă Experiențe Memorabile ";
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const openLightbox = (src) => {
    setCurrentImage(src);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage("");
  };
  return (
    <div>
      <Navbar />
      <Content title={title} p1={p1} p2={p2} p3={p3} p4={p} />
      <div className="photo-gallery" style={{ marginBottom: "40px" }}>
        <img
          src={ev1}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev1)}
          alt="#"
        />
        <img
          src={ev2}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev2)}
          alt="#"
        />
        <img
          src={ev3}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev3)}
          alt="#"
        />
        <img
          src={ev4}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev4)}
          alt="#"
        />
        <img
          src={ev5}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev5)}
          alt="#"
        />
        <img
          src={ev6}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev6)}
          alt="#"
        />
        <img
          src={ev7}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev7)}
          alt="#"
        />
        <img
          src={ev8}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev8)}
          alt="#"
        />
        <img
          src={ev9}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev9)}
          alt="#"
        />
        <img
          src={ev10}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev10)}
          alt="#"
        />
        <img
          src={ev11}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev11)}
          alt="#"
        />
        <img
          src={ev12}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev12)}
          alt="#"
        />
        <img
          src={ev1}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev1)}
          alt="#"
        />
        <img
          src={ev2}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev2)}
          alt="#"
        />
        <img
          src={ev3}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev3)}
          alt="#"
        />
        <img
          src={ev4}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev4)}
          alt="#"
        />
        <img
          src={ev5}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev5)}
          alt="#"
        />
        <img
          src={ev6}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev6)}
          alt="#"
        />
        <img
          src={ev7}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev7)}
          alt="#"
        />
        <img
          src={ev8}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev8)}
          alt="#"
        />
        <img
          src={ev9}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev9)}
          alt="#"
        />
        <img
          src={ev10}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev10)}
          alt="#"
        />
        <img
          src={ev11}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev11)}
          alt="#"
        />
        <img
          src={ev12}
          style={{ width: "190px" }}
          onClick={() => openLightbox(ev12)}
          alt="#"
        />
        {isLightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <img
              className="lightbox-image"
              src={currentImage}
              alt="Full view"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
