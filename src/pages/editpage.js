import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createPostSchema } from "../utils/validation";
import PhotoAtt from "../components/articole/actions/PhotoAtt";
import Preview from "../components/articole/actions/Preview";
import Viewer from "../components/articole/actions/Viewer";
import { useEffect, useState, useMemo } from "react";
import { getBlogs } from "../features/blogSlice";
import { getArticles } from "../features/articleSlice";
export default function EditPage() {
  const params = useParams();
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.blog);
  const { articles, files } = useSelector((state) => state.article);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getArticles());
  }, [dispatch]);

  // Determine if the current item is a blog or an article
  const blogOrArticle = useMemo(() => {
    return blogs.some((arr) => arr._id === params.id) ? "blog" : "article";
  }, [blogs, params.id]);

  // Find the correct item (blog or article) by comparing the _id field
  const currentItem = useMemo(() => {
    if (blogOrArticle === "article") {
      return articles.find((article) => article._id === params.id);
    } else {
      return blogs.find((blog) => blog._id === params.id);
    }
  }, [articles, blogs, blogOrArticle, params.id]);

  console.log(currentItem);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createPostSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="blur">
      <div className="">
        <div className="register">
          <h2>Edit Page</h2>
          <form className="register_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="title">Titlu articol</label>
              <input
                name="title"
                type="text"
                placeholder={currentItem?.title || "Enter title"}
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

            <label htmlFor="locatii">Locatie</label>
            <select
              name="locatii"
              {...register("locatii")}
              defaultValue={currentItem.locatii}
            >
              <option value="">Select a location</option>
              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              {/* Add other options here */}
              <option value="Romania">Romania</option>
            </select>
            {errors?.locatii?.message && (
              <p style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}>
                {errors?.locatii?.message}
              </p>
            )}

            <div
              className="form-group"
              style={{ position: "relative", marginTop: "10px" }}
            >
              <label htmlFor="content">Describe the trip</label>
              <textarea
                name="content"
                className="form-control"
                placeholder="Describe the trip"
                {...register("content")}
              ></textarea>
              {errors?.content?.message && (
                <p
                  style={{ color: "red", fontSize: "14px", paddingLeft: "4px" }}
                >
                  {errors?.content?.message}
                </p>
              )}
            </div>

            <label htmlFor="poze">Poze</label>
            {!files.length ? (
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
              Creaza Articol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
