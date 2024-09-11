import { useDispatch } from "react-redux";
import Add from "./Add";
import { removeFilefromFiles } from "../../../features/blogSlice";
import { FaTrash } from "react-icons/fa";

export default function Preview({ files, activeIndex, setActiveIndex }) {
  const dispatch = useDispatch();

  const handleRemoveFile = (index) => {
    dispatch(removeFilefromFiles(index));
  };
  return (
    <div className="preview">
      {files.map((file, i) => (
        <div
          key={i}
          style={{ position: "relative" }}
          onClick={() => setActiveIndex(i)}
        >
          {file.type === "IMAGE" && (
            <img
              style={{
                border: `${activeIndex === i ? "1px solid red" : ""}`,
              }}
              className="w-full h-full object-cover"
              src={file.fileData}
              alt="file"
            />
          )}
          <div
            className="removeFileIcon hidden"
            onClick={() => handleRemoveFile(i)}
          >
            <FaTrash
              style={{
                position: "absolute",
                right: "0",
                top: "5px",
                width: "20px",
                height: "15px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      ))}
      <Add setActiveIndex={setActiveIndex} />
    </div>
  );
}
