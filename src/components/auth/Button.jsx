import React, { useState } from "react";

export default function Button() {
  const [status, setStatus] = useState("false");
  return (
    <button className="btn-login" type="submit">
      {status === "loading"
        ? // <PulseLoader color="#fff" size={16} />
          "Loading..."
        : "Sign In"}
    </button>
  );
}
