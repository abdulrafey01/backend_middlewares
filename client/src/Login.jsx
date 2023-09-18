import React from "react";
import axios from "axios";
export default function Login() {
  const getData =  () => {
    axios
      .get("http://localhost:4000/api")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
      onClick={getData}
        style={{
          margin: "10px",
          padding: "10px",
          width: "300px",
          borderRadius: "10px",
          backgroundColor: "lightgreen",
        }}
      >
        Sign In
      </button>
    </div>
  );
}
