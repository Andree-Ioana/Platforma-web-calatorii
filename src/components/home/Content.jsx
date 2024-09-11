import React from "react";

export default function Content({ title, p4, p1, p2, p3 }) {
  return (
    <div className="headers">
      <div className="row">
        <div className="col-1">
          <h2>{title}</h2>
          {p4 ? (
            <p>{p4}</p>
          ) : (
            <p>Blog de fotografie și călătorii Hoinărind prin România.</p>
          )}
        </div>

        <div className="col-2">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
      </div>
    </div>
  );
}
