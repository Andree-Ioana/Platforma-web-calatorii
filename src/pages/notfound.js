import React from "react";
import { Link } from "react-router-dom";
import "./style/notfound.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Sorry, the page you’re looking for does not exist.
        </p>
        <Link to="/" className="not-found-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
