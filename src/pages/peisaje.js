import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";
import {
  peisaj1,
  peisaj2,
  peisaj3,
  peisaj4,
  peisaj5,
  peisaj6,
  peisaj7,
  peisaj8,
  peisaj9,
  peisaj10,
  peisaj11,
  peisaj12,
} from "../images/";
export default function Peisaj() {
  const p1 =
    "Pe acest blog vei descoperi frumusețea și diversitatea florilor sălbatice și cultivate care împodobesc peisajle acestei țări minunate. Fie că ești un pasionat de botanică, un fotograf de natură sau pur și simplu un iubitor al frumuseții naturale, aici vei găsi o colecție de povești, imagini și recomandări despre cele mai impresionante flori din România.";
  const p2 =
    "acă ești în căutare de inspirație pentru grădina ta sau pur și simplu vrei să cunoști mai multe despre florile care îți înconjoară casa, vei găsi aici recomandări despre cele mai potrivite plante pentru diverse zone climatice din România.";
  const p3 =
    "Dacă vrei să afli mai multe despre florile prezentate pe blog, despre locurile unde le poți vedea sau despre cum să îți îngrijești propriile plante, scrie-ne!";
  const title = "Pe drumuri straine: O Lume a Culorilor și a Frumuseții";
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
          src={peisaj1}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj1)}
          alt="#"
        />
        <img
          src={peisaj2}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj2)}
          alt="#"
        />
        <img
          src={peisaj3}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj3)}
          alt="#"
        />
        <img
          src={peisaj4}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj4)}
          alt="#"
        />
        <img
          src={peisaj5}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj5)}
          alt="#"
        />
        <img
          src={peisaj6}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj6)}
          alt="#"
        />
        <img
          src={peisaj7}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj7)}
          alt="#"
        />
        <img
          src={peisaj8}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj8)}
          alt="#"
        />
        <img
          src={peisaj9}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj9)}
          alt="#"
        />
        <img
          src={peisaj10}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj10)}
          alt="#"
        />
        <img
          src={peisaj11}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj11)}
          alt="#"
        />
        <img
          src={peisaj12}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj12)}
          alt="#"
        />
        <img
          src={peisaj1}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj1)}
          alt="#"
        />
        <img
          src={peisaj2}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj2)}
          alt="#"
        />
        <img
          src={peisaj3}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj3)}
          alt="#"
        />
        <img
          src={peisaj4}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj4)}
          alt="#"
        />
        <img
          src={peisaj5}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj5)}
          alt="#"
        />
        <img
          src={peisaj6}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj6)}
          alt="#"
        />
        <img
          src={peisaj7}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj7)}
          alt="#"
        />
        <img
          src={peisaj8}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj8)}
          alt="#"
        />
        <img
          src={peisaj9}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj9)}
          alt="#"
        />
        <img
          src={peisaj10}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj10)}
          alt="#"
        />
        <img
          src={peisaj11}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj11)}
          alt="#"
        />
        <img
          src={peisaj12}
          style={{ width: "170px" }}
          onClick={() => openLightbox(peisaj12)}
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
