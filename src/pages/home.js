import React from "react";
import "./style/home.scss";
import Navbar from "../components/navbar/Navbar";
import { HeroBanner, Content, Blogs, Footer, Videos } from "../components/home";
import Facebook from "../components/home/Facebook";

export default function Home() {
  const title = `Pe drumuri Straine - Cele mai frumoase peisaje din Europa, trasee
            și călătorii în locuri sălbatice, filmări cu drona si poze spectaculoase`;
  const p1 = `Aici găsiți o colecție de articole captivante despre cele mai interesante destinații de vacanță din întreaga lume, recomandări de itinerarii, sfaturi utile pentru călătorii, și detalii din diverse locuri pe care le-am vizitat.`;
  const p2 = `Dacă încă nu ați avut ocazia să explorați aceste locuri minunate, poate veți fi inspirați să le adăugați pe lista voastră de călătorii viitoare. Fie că sunteți în căutare de idei pentru vacanțe exotice, city break-uri, sau aventuri inedite, aici veți găsi sugestii și inspirație. Dacă doriți să vă alăturați comunității noastre de iubitori de călătorii sau aveți nevoie de ajutor în planificarea unei vacanțe.`;
  const p3 = `Dorim ca articolele cat si povestile utilizatorilor site-ului sa va fie de folos.`;
  const p4 = `Bloguri si articole despre vacante, calatorii si sfaturi pentru calatorii`;
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Content title={title} p4={p4} p1={p1} p2={p2} p3={p3} />
      <Blogs />
      <Videos />
      <div className="containers" style={{ margin: "20px 0px" }}>
        <Facebook />
      </div>
      <Footer />
    </div>
  );
}
