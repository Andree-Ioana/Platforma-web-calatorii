import { useDispatch, useSelector } from "react-redux";
import PhotoAtt from "./actions/PhotoAtt";
import Preview from "./actions/Preview";
import "./style/blog.scss";
import { useRef, useState } from "react";
import Viewer from "./actions/Viewer";
import { uploadFiles } from "../../utils/upload";
import { clearFiles, createBlog, getBlogs } from "../../features/blogSlice";
import { createPostSchema } from "../../utils/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLoadScript, Autocomplete } from "@react-google-maps/api";
const libraries = ["places"];

export default function CreateBlog({ setShowCreateBlog }) {
  const { files } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({ lat: 44.4268, lng: 26.1025 }); // State to store lat and lng
  const autocompleteRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [place, setPlace] = useState(null);
  const dispatch = useDispatch();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyALQWuohFpxC6fPVUjxOmqIHzxmh5FCKpc",
    libraries,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createPostSchema),
  });

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setLocation({ lat, lng }); // Save lat and lng in the location state
      setPlace(place);
    }
  };

  const onSubmit = async (values) => {
    setLoading(true);
    const uploaded_files = await uploadFiles(files);
    let filesRes = uploaded_files.length > 0 ? uploaded_files : [];
    await dispatch(
      createBlog({
        ...values,
        files: filesRes,
        token,
        lat: location.lat,
        lng: location.lng,
        location: place.name,
      })
    );

    // Fetch updated blog list after creating a new blog
    await dispatch(getBlogs());

    setLoading(false);
    setShowCreateBlog(false);
  };

  const existHandler = () => {
    setShowCreateBlog(false);
    dispatch(clearFiles());
  };

  if (loading) return <h1>Loading....</h1>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={() => existHandler()}>
            x
          </i>
          <p>Create a blog post</p>
        </div>
        <form className="register_form" onSubmit={handleSubmit(onSubmit)}>
          <div
            className="form-group"
            style={{ display: "flex", width: "100%" }}
          >
            <div style={{ width: "50%" }}>
              <label htmlFor="title">Titlu articol</label>
              <input
                name="title"
                type="text"
                placeholder="Titlu"
                {...register("title")}
              />
              {errors?.title?.message && (
                <p
                  style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}
                >
                  {errors?.title?.message}
                </p>
              )}
            </div>
            <div style={{ width: "50%" }}>
              <label htmlFor="date">Data vacantei</label>
              <input
                name="date"
                type="date"
                placeholder="ex: 02/02/2019"
                {...register("date")}
              />
              {errors?.date?.message && (
                <p
                  style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}
                >
                  {errors?.date?.message}
                </p>
              )}
            </div>
          </div>
          <div className="form-group" style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <label htmlFor="season">Anotimp </label>
              <select name="season" {...register("season")}>
                <option value="">Selecteaza anotimp</option>
                <option value="Primavara">Primavara</option>
                <option value="Vara">Vara</option>
                <option value="Toamna">Toamna</option>
                <option value="Iarna">Iarna</option>
              </select>
              {errors?.season?.message && (
                <p
                  style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}
                >
                  {errors?.season?.message}
                </p>
              )}
            </div>
            <div style={{ width: "50%" }}>
              <label htmlFor="locatie">Locatie</label>
              <Autocomplete
                onLoad={(autocomplete) =>
                  (autocompleteRef.current = autocomplete)
                }
                onPlaceChanged={onPlaceChanged}
              >
                <input
                  type="text"
                  placeholder="Introdu o locatie"
                  style={{ width: "300px", height: "40px", padding: "10px" }}
                />
              </Autocomplete>
            </div>
          </div>
          <label htmlFor="activity">Activitate </label>
          <select name="activity" {...register("activity")}>
            <option value="">Selecteaza o activitate</option>
            <option value="relaxare">relaxare</option>
            <option value="drumetie">drumetie</option>
            <option value="cultural">cultural</option>
            <option value="sport">sport</option>
            <option value="educational">educational</option>
          </select>
          {errors?.activity?.message && (
            <p style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}>
              {errors?.activity?.message}
            </p>
          )}
          <label htmlFor="country">Tara</label>
          <select name="country" {...register("country")}>
            <option value="">Selecteaza o tara</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Egypt">Egypt</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Philippines">Philippines</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Singapore">Singapore</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States of America">
              United States of America
            </option>
            <option value="Vietnam">Vietnam</option>
          </select>
          {errors?.country?.message && (
            <p style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}>
              {errors?.country?.message}
            </p>
          )}
          <div
            className="form-group"
            style={{ position: "relative", marginTop: "10px" }}
          >
            <label htmlFor="content">
              Descrie vacanta si ce activitati ai facut{" "}
            </label>
            <textarea
              name="content"
              className="form-control"
              placeholder="Descrie vacanta..."
              {...register("content")}
            ></textarea>
            <div
              style={{
                position: "absolute",
                top: "100px",
                right: "10px",
                fontSize: "12px",
              }}
            ></div>
            {errors?.content?.message && (
              <p style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}>
                {errors?.content?.message}
              </p>
            )}
          </div>
          <p>
            Pretul vacantei a fost?
            <input
              type="number"
              {...register("price")}
              name="price"
              placeholder="In lei"
            />
          </p>
          <p>
            Cat a durat vacanta?
            <input
              type="number"
              {...register("term")}
              name="term"
              placeholder="In zile"
            />
          </p>
          <p>
            Care a fost metoda de transport?
            <select name="transport" {...register("transport")}>
              <option value="">Selecteaza un mediu de transport</option>
              <option value="Masina">Masina</option>
              <option value="Avion">Avion</option>
              <option value="Autobuz">Autobuz</option>
              <option value="Tren">Tren</option>
            </select>
          </p>
          <label htmlFor="poze">Poze</label>
          {!files.length > 0 ? (
            <PhotoAtt />
          ) : (
            <Preview
              files={files}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )}
          {files && <Viewer activeIndex={activeIndex} />}
          <button className="btn-register" type="submit">
            Creaza Blog
          </button>
        </form>
      </div>
    </div>
  );
}
