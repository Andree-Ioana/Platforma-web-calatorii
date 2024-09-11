import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import "./search.scss";
import { getBlogs } from "../../features/blogSlice.js";
import { getArticles } from "../../features/articleSlice.js";
import BlogSearchItem from "./BlogSearchItem.jsx";

export default function SearchButton() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.article);
  const { blogs } = useSelector((state) => state.blog);

  const articlesWithSource = articles.map((article) => ({
    ...article,
    source: "article",
  }));
  const blogsWithSource = blogs.map((blog) => ({ ...blog, source: "blog" }));

  const combinedArray = [...articlesWithSource, ...blogsWithSource];

  const filteredBlogs = combinedArray.filter((item) =>
    item.title.toLowerCase().startsWith(text.toLowerCase())
  );
  const blogNotFound = {
    image: "",
    title: "Ne pare rau, nu sunt posturi potrivit criteriilor",
    body: "Vă rugăm să încercați un alt termen de căutare",
  };

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className="searchd">
      <div className="search-button">
        <div className="div">
          <input
            type="text"
            value={text}
            placeholder="Cautare"
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <IoMdSearch />
          </button>
        </div>
        {text !== "" && (
          <div className="search-result">
            <h2>Articole</h2>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blogItem, i) => (
                <BlogSearchItem key={i} blog={blogItem} />
              ))
            ) : (
              <BlogSearchItem key="not-found" blog={blogNotFound} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
