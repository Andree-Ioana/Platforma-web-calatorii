import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../home/Footer.jsx";
import "./style/article.scss";
import { getReviews } from "../../features/reviewSlice.js";
import FeedbackStars from "./FeedbackStars.jsx";
import { getArticle } from "../../features/articleSlice.js";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Facebook from "../home/Facebook.jsx";
import Instagram from "./Instagram.jsx";
import Recomandari from "./Recomandari.jsx";

const libraries = ["places"];

export default function ArticoleItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const { articleId } = params;
  const { article } = useSelector((state) => state.article);
  const { reviews } = useSelector((state) => state.review);

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyALQWuohFpxC6fPVUjxOmqIHzxmh5FCKpc", // Replace with your API key
    libraries,
  });

  useEffect(() => {
    dispatch(getArticle(articleId));
    dispatch(getReviews(articleId));
  }, [articleId, dispatch]);

  useEffect(() => {
    if (article?.lat && article?.lng) {
      const newCenter = {
        lat: parseFloat(article.lat),
        lng: parseFloat(article.lng),
      };
      setCenter(newCenter);
      setMarkerPosition(newCenter);
    }
  }, [article]);
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

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="containers">
        <div className="blog-item">
          <div className="left">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
          <div className="right">
            <GoogleMap
              center={center}
              zoom={12}
              mapContainerStyle={{
                minWidth: "300px",
                minHeight: "400px",
                maxHeight: "800px",
                maxWidth: "600px",
              }}
            >
              <Marker position={markerPosition} />
            </GoogleMap>
          </div>
        </div>
        <div className="photo-gallery">
          {article?.files?.map((f, i) => (
            <img
              key={i}
              style={{ width: "200px" }}
              src={f.file.secure_url}
              alt="#"
              onClick={() => openLightbox(f.file.secure_url)}
            />
          ))}
        </div>

        {isLightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <img
              className="lightbox-image"
              src={currentImage}
              alt="Full view"
            />
          </div>
        )}
        <div className="rowd">
          <div className="cold">
            <FeedbackStars reviews={reviews} />
          </div>
          <div className="cold1">
            <div className="c1">
              <Facebook />
              <Instagram />
            </div>
            <div className="c2"></div>
          </div>
        </div>
        <Recomandari />
      </div>
      <Footer />
    </div>
  );
}
