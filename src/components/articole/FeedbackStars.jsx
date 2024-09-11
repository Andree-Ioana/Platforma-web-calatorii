import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { addReviews, getReviews } from "../../features/reviewSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Star = ({ isColored }) => (
  <span className={`star ${isColored ? "colored" : ""}`}>
    {isColored ? <FaStar /> : <FaRegStar />}
  </span>
);

export default function FeedbackStars() {
  const params = useParams();
  const dispatch = useDispatch();
  const { articleId } = params;
  const [value, setValue] = useState(1); // Default value set to 1
  const starsPerRow = 5;

  const { reviews } = useSelector((state) => state.review);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  const handleClick = (v) => {
    setValue(v);
    const values = {
      token,
      articleId,
      nota: v.toString(), // Convert value to string for consistency
    };
    dispatch(addReviews(values));
  };

  useEffect(() => {
    dispatch(getReviews(articleId));
  }, [articleId, dispatch]);

  // Calculate the count of each rating
  const ratingCounts = reviews.reduce((acc, review) => {
    const rating = parseInt(review.nota, 10); // Convert rating to number
    if (rating >= 1 && rating <= 5) {
      acc[rating - 1] += 1; // Increment the count for the given rating
    }
    return acc;
  }, new Array(5).fill(0));

  return (
    <div className="feedback-stars">
      <h4>Please leave a rating</h4>
      <p>If you find this information helpful</p>
      <ul>
        {[5, 4, 3, 2, 1].map((starValue) => (
          <li
            key={starValue}
            className="element"
            onClick={() => handleClick(starValue)}
          >
            {/* {reviews.map((r) => {
              let review = r.nota === starValue.toString();
              if (review) {
                return <Star key={review._id} isColored={true} />;
              } else {
                return <Star key={review._id} isColored={false} />;
              }
            })} */}
            <Star isColored={starValue <= value} />
          </li>
        ))}
      </ul>
      <div className="review">
        <h2>Reviews</h2>
        <div className="reviews-stars">
          {[...Array(starsPerRow)].map((_, index) => (
            <div key={index}>
              <div className="star-container">
                {[...Array(starsPerRow)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    isColored={starIndex < starsPerRow - index}
                  />
                ))}
              </div>
              <p>({ratingCounts[starsPerRow - index - 1]})</p>
              {/* Correctly aligned to the star value */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
