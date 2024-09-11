import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Recomandari() {
  const { blogs } = useSelector((state) => state.blog);
  const { articles } = useSelector((state) => state.article);
  const newArr = [...blogs, ...articles];
  let arr = shuffleArray(newArr);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="recomandari">
      <h3>Alte recomandari: </h3>
      <div className="card-container">
        {arr.slice(0, 4).map((c) => (
          <div className="card" key={c._id}>
            <img src={c?.files[0]?.file.url} alt="" />
            <Link to={`/article/${c._id}`}>{c.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
