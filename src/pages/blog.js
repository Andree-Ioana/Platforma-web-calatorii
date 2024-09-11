import { useDispatch, useSelector } from "react-redux";
import { Blogs, Content, Footer } from "../components/home";

import Navbar from "../components/navbar/Navbar";
import "./style/articole.scss";
import Blog from "../components/home/Blog";
import CreateBlogButton from "../components/blog/CreateBlogButton.jsx";
import { useEffect, useState } from "react";
import CreateBlog from "../components/blog/CreateBlog.jsx";
import { getBlogs } from "../features/blogSlice.js";

export default function Articole() {
  const { user } = useSelector((state) => state.user);
  const { blogs } = useSelector((state) => state.blog);
  const { token } = user;
  const dispatch = useDispatch();
  const [showCreateBlog, setShowCreateBlog] = useState(false);

  useEffect(() => {
    if (!blogs.length) {
      dispatch(getBlogs()); // Trigger the action to fetch blogs
    }
  }, []);

  const isBlog = "blog";
  const title =
    "Cele mai frumoase călătorii prin România, trasee pe munte, peisaje si locuri de vizitat.";
  const p1 = `Sunt fotograf profesionist la evenimente de mulți ani, dar in timpul liber mă relaxez prin călătorii in natură si trasee pe munte in România, hiking, trekking, cătărare ușoară.`;
  const p2 = `Vă prezint trasee montane și călătorii cu multe fotografii superbe, peisaje din topul celor mai frumoase locuri de vizitat din Romania.`;
  const p3 = `Mai nou am adăugat și filmari aeriene cu drona, zbor peste vârfuri din munții României, zbor peste trasee turistice senzationale si multe altele. Am adăugat in articole si harțile zonei sau track-uri GPS disponibile pentru cine vrea sa le descarce.`;
  const p = "";
  if (!blogs) {
    return <div>Loading...</div>;
  }
  return (
    <div className="articole ">
      <Navbar />
      <div className="containers blog-home">
        <Content title={title} p1={p1} p2={p2} p3={p3} p4={p} />
        <hr
          style={{
            background: "#ccc",
            height: ".5px",
            border: "none",
            width: "100%",
            margin: "40px 0px",
          }}
        />
        {token ? (
          <CreateBlogButton setShowCreateBlog={setShowCreateBlog} />
        ) : null}
        {showCreateBlog && <CreateBlog setShowCreateBlog={setShowCreateBlog} />}
        <div className="text">
          <h2>Trasee si calatorii prin romania</h2>
        </div>
        <div className="row">
          {[...blogs].reverse().map((b, i) => (
            <Blog b={b} isBlog={isBlog} key={b._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
