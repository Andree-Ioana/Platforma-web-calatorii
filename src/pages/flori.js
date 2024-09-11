import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";
import {
  floare1,
  floare2,
  floare3,
  floare4,
  floare5,
  floare6,
  floare7,
  floare8,
  floare9,
  floare10,
  floare11,
  floare12,
} from "../images/";
export default function Flori() {
  const p1 =
    " Îți prezentăm cele mai frumoase flori sălbatice din România și din lume, împreună cu locurile unde le poți vedea în toată splendoarea lor. ";
  const p2 =
    "Dacă florile sunt pasiunea ta, atunci Florio este locul perfect pentru tine! Indiferent dacă ești un grădinar experimentat, un designer floral sau pur și simplu un admirator al naturii, îți oferim inspirația și informațiile de care ai nevoie pentru a aduce frumusețea florilor în viața ta de zi cu zi.";
  const p3 =
    "Ești binevenit să te alături comunității noastre de iubitori de flori! Împărtășește cu noi experiențele tale, aranjamentele tale preferate sau grădina ta înflorită.";
  const title = "Evenimente în România: Magia Florilor ";
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
      <Content title={title} p1={p1} p2={p2} p3={p3} />
      <div className="photo-gallery" style={{ marginBottom: "40px" }}>
        <img
          src={floare1}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare1)}
          alt="#"
        />
        <img
          src={floare2}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare2)}
          alt="#"
        />
        <img
          src={floare3}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare3)}
          alt="#"
        />
        <img
          src={floare4}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare4)}
          alt="#"
        />
        <img
          src={floare5}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare5)}
          alt="#"
        />
        <img
          src={floare6}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare6)}
          alt="#"
        />
        <img
          src={floare7}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare7)}
          alt="#"
        />
        <img
          src={floare8}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare8)}
          alt="#"
        />
        <img
          src={floare9}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare9)}
          alt="#"
        />
        <img
          src={floare10}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare10)}
          alt="#"
        />
        <img
          src={floare11}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare11)}
          alt="#"
        />
        <img
          src={floare12}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare12)}
          alt="#"
        />
        <img
          src={floare1}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare1)}
          alt="#"
        />
        <img
          src={floare2}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare2)}
          alt="#"
        />
        <img
          src={floare3}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare3)}
          alt="#"
        />
        <img
          src={floare4}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare4)}
          alt="#"
        />
        <img
          src={floare5}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare5)}
          alt="#"
        />
        <img
          src={floare6}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare6)}
          alt="#"
        />
        <img
          src={floare7}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare7)}
          alt="#"
        />
        <img
          src={floare8}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare8)}
          alt="#"
        />
        <img
          src={floare9}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare9)}
          alt="#"
        />
        <img
          src={floare10}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare10)}
          alt="#"
        />
        <img
          src={floare11}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare11)}
          alt="#"
        />
        <img
          src={floare12}
          style={{ width: "190px" }}
          onClick={() => openLightbox(floare12)}
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
