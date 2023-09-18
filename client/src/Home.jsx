import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setname] = useState("");

  const onInputChange = (e) => {
    setname(e.target.value);
  };
  const getData = () => {
    axios
      .post("http://192.168.69.224:4000/signin", {
        userName:name
      })
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <label htmlFor="username">Name</label>
        <input style={{ margin: "10px" }} type="text" onChange={onInputChange} />
        <button
          onClick={getData}
          style={{
            margin: "10px",
            padding: "10px",
            width: "100px",
            borderRadius: "10px",
            backgroundColor: "lightgreen",
          }}
        >
          Post Data
        </button>
      </div>
    </div>
  );
}
