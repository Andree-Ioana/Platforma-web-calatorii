import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  BlogPage,
  NotFoundPage,
  Settings,
  Articole,
  EditPage,
} from "./pages";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BlogItem from "./components/blog/BlogItem";
import ArticoleItem from "./components/articole/ArticoleItem";
import Flori from "./pages/flori";
import Peisaje from "./pages/peisaje";
import Evenimente from "./pages/evenimente";
import Video from "./pages/video";

function App() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            exact
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/settings"
            element={!token ? <Login /> : <Settings />}
          />
          <Route
            exact
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/edit-page/:id"
            element={token && user.isAdmin ? <EditPage /> : <Navigate to="/" />}
          />
          <Route exact path="/blog/:blogId" element={<BlogItem />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/article/:articleId" element={<ArticoleItem />} />
          <Route exact path="/article" element={<Articole />} />
          <Route exact path="/evenimente" element={<Evenimente />} />
          <Route exact path="/peisaje" element={<Peisaje />} />
          <Route exact path="/flori" element={<Flori />} />
          <Route exact path="/videos" element={<Video />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
