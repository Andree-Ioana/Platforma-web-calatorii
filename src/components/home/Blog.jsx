import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { deleteArticle } from "../../features/articleSlice";
import { deleteBlog } from "../../features/blogSlice";

export default function Blog({ b, isBlog }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const navigate = useNavigate();
  const values = {
    token,
    [isBlog === "blog" ? "blogId" : "articleId"]: b._id,
  };

  const canEditOrDelete = user?.isAdmin || user?._id === b.user;

  if (!b) {
    return <div>Loading...</div>; // or return null if you don't want to render anything
  }

  const handleDelete = () => {
    if (isBlog === "blog") {
      dispatch(deleteBlog(values));
      navigate("/blog");
    } else {
      dispatch(deleteArticle(values));
      navigate("/");
    }
  };

  return (
    <div className="col-3">
      <Link
        to={isBlog === "blog" ? `/blog/${b._id}` : `/article/${b._id}`}
        className="imgs"
      >
        <img src={b.files[0]?.file.url} alt="dddd" />
      </Link>
      <Link to={isBlog === "blog" ? `/blog/${b._id}` : `/article/${b._id}`}>
        <h3>{b.title}</h3>
      </Link>
      <div>
        <Link to={isBlog === "blog" ? `/blog/${b._id}` : `/article/${b._id}`}>
          {b.locatii}
        </Link>
      </div>
      <p>{b.content.substring(0, 315)}...</p>
      <h5>{b.createdAt.substring(0, 10)} </h5>
      {canEditOrDelete && (
        <>
          <button
            onClick={() => navigate(`/edit-page/${b._id}`)}
            className="top-absolute"
          >
            <FaEdit />
          </button>
          <button onClick={handleDelete} className="top-absolute">
            <FaTrashAlt />
          </button>
        </>
      )}
    </div>
  );
}
