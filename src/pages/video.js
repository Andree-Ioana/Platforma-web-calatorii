import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Content, Footer } from "../components/home";
import { video } from "./videoInfo";
export default function Video() {
  const p1 =
    "Ne place sa ne mandrim cu ceea ce facem, de aceea gasim video-urile un excelent mod de a arata acest fapt";
  const p2 =
    "Fă cunoștință cu cultura locală prin videoclipuri care surprind tradițiile, festivalurile și viața cotidiană din diferite colțuri ale lumii. Vei descoperi locuri de mâncat autentice, artizanat local și obiceiuri interesante.";
  const p3 =
    "acă ești în căutarea unor idei pentru următoarea ta vacanță, videoclipurile noastre sunt aici pentru a te inspira.";
  const p4 = "Vizioneaza video-uri facute cu drona sau cu camera";
  const title = "Pe drumuri straine: Videoclip-uri din diferite locatii";
  return (
    <div>
      <Navbar />
      <Content title={title} p1={p1} p2={p2} p3={p3} p4={p4} />
      <div className="row">
        {video.map((v) => (
          <div className="cols-2">
            <iframe
              src={v.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>{v.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
