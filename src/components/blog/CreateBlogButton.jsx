import "./style/blog.scss";

export default function CreateBlogButton({ setShowCreateBlog }) {
  return (
    <button
      className="blog-btn"
      onClick={() => setShowCreateBlog((prev) => !prev)}
    >
      Create Blog Post
    </button>
  );
}
