import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Star = ({ isColored }) => (
  <span className={`star ${isColored ? "colored" : ""}`}>
    <FaRegStar />
  </span>
);
export default function FeedbackStars() {
  const [value, setValue] = useState(0);
  const rows = 5;
  const starsPerRow = 5;
  return (
    <div className="feedback-stars">
      <h4>Please leave a rating</h4>
      <p>If you find this information helpful</p>
      <ul>
        <li className="element" onClick={() => setValue("5")}>
          <FaRegStar />
        </li>
        <li className="element" onClick={() => setValue("4")}>
          <FaRegStar />
        </li>
        <li className="element" onClick={() => setValue("3")}>
          <FaRegStar />
        </li>
        <li className="element" onClick={() => setValue("2")}>
          <FaRegStar />
        </li>
        <li className="element" onClick={() => setValue("1")}>
          <FaRegStar />
        </li>
      </ul>
      <div className="review">
        <h2>Reviews</h2>
        <div className="reviews-stars">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="star-container" key={rowIndex}>
              {[...Array(starsPerRow)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  isColored={starIndex <= starsPerRow - rowIndex - 1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
