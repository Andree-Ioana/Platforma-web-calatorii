import { useSelector } from "react-redux";

export default function Viewer({ activeIndex }) {
  const { files } = useSelector((state) => state.article);
  return (
    <div className="viewer">
      {files[activeIndex]?.type === "IMAGE" ? (
        <img
          style={{ width: "200px", height: "200px" }}
          src={files[activeIndex].fileData}
          alt="file[activeIndex].fileData"
        />
      ) : null}
    </div>
  );
}
