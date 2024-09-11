import { useDispatch, useSelector } from "react-redux";
import Blog from "./Blog.jsx";
import { useEffect } from "react";
import { getArticles } from "../../features/articleSlice.js";

export default function Blogs() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.article);
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <div className="blog-home">
      <div className="center-text">
        <h2>Trasee recente/ peisaje din România</h2>
      </div>

      <div className="row">
        {articles
          .slice(0, 9)
          .reverse()
          .map((b, i) => (
            <Blog b={b} key={i} isBlog={"article"} />
          ))}
      </div>
      {/* </div> */}
    </div>
  );
}
