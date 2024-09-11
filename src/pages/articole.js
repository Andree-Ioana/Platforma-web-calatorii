import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style/blog.scss";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/home/Footer.jsx";
import ArticoleCard from "../components/articole/ArticoleCard.jsx";
import { getArticles } from "../features/articleSlice.js";
import CreateArticleButton from "../components/articole/CreateArticleButton.jsx";
import CreateArticole from "../components/articole/CreateArticole.jsx";
import { Link } from "react-router-dom";
import { getBlogs } from "../features/blogSlice.js";

export default function Article() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const { articles } = useSelector((state) => state.article);
  const { blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [showArticleButton, setShowArticleButton] = useState(false);
  useEffect(() => {
    dispatch(getArticles());
    dispatch(getBlogs());
  }, []);
  let newArr = [...articles, ...blogs];
  const locations = newArr.map((l) => l.location);
  const locationCount = locations.reduce((acc, loc) => {
    acc[loc] = (acc[loc] || 0) + 1;
    return acc;
  }, {});
  const sortedLocations = Object.entries(locationCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
  if (!articles) {
    return <h1>Loading ....</h1>;
  }
  return (
    <>
      <Navbar />
      <div className="blog">
        <div className="containers">
          <div className="left" style={{ position: "relative" }}>
            <div>
              <h1>Articole</h1>
            </div>
            {token ? (
              <CreateArticleButton
                setShowArticleButton={setShowArticleButton}
              />
            ) : null}
            {showArticleButton && (
              <CreateArticole setShowArticleButton={setShowArticleButton} />
            )}
            {articles.map((post, i) =>
              !post.reported && !post.reviewed ? (
                <ArticoleCard post={post} key={i} />
              ) : null
            )}
          </div>
          <div className="right">
            <div className="destinatii1">
              <h3>Destinatii</h3>
              <ul>
                {sortedLocations.map(({ name, count }) => (
                  <li key={name}>
                    <a>
                      {name} {count > 1 && `(${count})`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="destinatii2 ">
              <h3>Blogs</h3>
              <ul>
                {blogs?.map((blog) => (
                  <li key={blog._id}>
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
