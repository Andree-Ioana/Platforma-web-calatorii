import "./style/article.scss";

export default function CreateArticleButton({ setShowArticleButton }) {
  return (
    <button
      className="article-btn"
      onClick={() => setShowArticleButton((prev) => !prev)}
    >
      Create Article Post
    </button>
  );
}
