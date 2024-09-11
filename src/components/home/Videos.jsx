import React from "react";

export default function Videos() {
  return (
    <>
      <div className="center-text" style={{ marginBottom: "20px" }}>
        <h2>Video-uri drone</h2>
      </div>
      <div className="row" style={{ marginBottom: "50px" }}>
        <div className="cols-2">
          <iframe
            src="https://www.youtube.com/embed/cEHP_LeBeyQ?si=SOCw2APCI6udpJVH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Video shot cu drona deasupra peisajelor din natura</p>
        </div>
        <div className="cols-2">
          <iframe
            src="https://www.youtube.com/embed/gYO1uk7vIcc?si=dE8T1EnDHHCvmC7X"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Video cu drona deasupra orasului Hong Kong</p>
        </div>
      </div>
    </>
  );
}
