import { useRef, useState } from "react";

export default function Picture({
  readablePicture,
  setReadablePicture,
  setPicture,
}) {
  const [error, setError] = useState("");
  const inputRef = useRef();
  const hanldePicture = (e) => {
    let pic = e.target.files[0];
    if (
      pic.type !== "image/jpeg" &&
      pic.type !== "image/png" &&
      pic.type !== "image/webp"
    ) {
      setError(`${pic.name} format is not supported.`);
      return;
    } else if (pic.size > 1024 * 1024 * 5) {
      setError(`${pic.name} is too large, maximum 5mb allowed.`);
      return;
    } else {
      setError("");
      setPicture(pic);
      //reading the picture
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload = (e) => {
        setReadablePicture(e.target.result);
      };
    }
  };
  const handleChangePic = () => {
    setPicture("");
    setReadablePicture("");
  };
  return (
    <div
      className="picture"
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px 0px",
        alignItems: "center",
      }}
    >
      <label
        htmlFor="picture"
        style={{
          fontSize: "0.875rem",
          fontWeight: "700",
          letterSpacing: "0.025rem",
        }}
      >
        Picture (Optional)
      </label>
      {readablePicture ? (
        <div>
          <img
            src={readablePicture}
            alt="picture"
            style={{
              width: "5rem",
              height: "5rem",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            // className="w-20 h-20 object-cover rounded-full"
          />

          <div
            style={{
              marginTop: "0.5rem",
              width: "5rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              backgroundColor: "#f5f5f5", // Replace with your dark mode color if necessary
              borderRadius: "0.375rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleChangePic()}
          >
            Remove
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "3rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "0.375rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => inputRef.current.click()}
        >
          Upload picture
        </div>
      )}
      <input
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/webp"
        onChange={hanldePicture}
      />
      {/*error*/}
      <div style={{ marginTop: "2rem" }}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
}
