import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "./Add";
import { removeFilefromFiles } from "../../../features/articleSlice";
import { FaPlus } from "react-icons/fa";

export default function Preview({ files, activeIndex, setActiveIndex }) {
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploaded_files = await uploaded_files(files);
    const values = {
      token,
      files: uploaded_files.length > 0 ? uploaded_files : [],
    };
    // let newMsg = await dispatch(sendMessage(values));
    setLoading(false);
  };

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
            <FaPlus
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                width: "1rem",
                height: "1rem",
              }}
            />
          </div>
        </div>
      ))}
      <Add setActiveIndex={setActiveIndex} />
    </div>
  );
}
