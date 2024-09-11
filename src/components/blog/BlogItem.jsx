import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../home/Footer.jsx";
import "./style/blog.scss";
import { getBlog } from "../../features/blogSlice.js";
import { getComments } from "../../features/commentSlice.js";
import { getReviews } from "../../features/reviewSlice.js";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Facebook from "../home/Facebook.jsx";
import Instagram from "../articole/Instagram.jsx";
import Comentarii from "../articole/Comentarii.jsx";
import Recomandari from "../articole/Recomandari.jsx";
const libraries = ["places"];

export default function BlogItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const { blogId } = params;
  const { blog } = useSelector((state) => state.blog);

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyALQWuohFpxC6fPVUjxOmqIHzxmh5FCKpc", // Replace with your API key
    libraries,
  });

  useEffect(() => {
    dispatch(getBlog(blogId));
    dispatch(getComments(blogId));
    dispatch(getReviews(blogId));
    // dispatch(getNotes(ticketId));
  }, [blogId, dispatch]);
  useEffect(() => {
    if (blog?.lat && blog?.lng) {
      const newCenter = {
        lat: parseFloat(blog.lat),
        lng: parseFloat(blog.lng),
      };
      setCenter(newCenter);
      setMarkerPosition(newCenter);
    }
  }, [blog]);
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
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="containers">
        <div className="blog-item">
          <div className="left">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>
              Pretul vacantei este de: {blog.price} <br /> Durata vacantei:{" "}
              {blog.term} de zile <br /> Modul de transport a fost:{" "}
              {blog.tranpsort}
            </p>
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
          {blog?.files?.map((f, i) => (
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
            <Comentarii />
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
