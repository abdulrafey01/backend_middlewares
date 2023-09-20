import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [ip, setIp] = useState("");

  const getData = () => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((res) => {
        setIp(res.data.ip);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      // axios
      // .get("http://192.168.18.41:4000/getbrowser")
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div style={{ margin: "10px", height: "100px" }}> 
        {/* <label htmlFor="username">Name</label>
        <input style={{ margin: "10px" }} type="text" onChange={onInputChange} /> */}
        <div style={{textAlign: "center" }}>
        <button
          onClick={getData}
          style={{
            margin: "10px",
            padding: "10px",
            width: "150px",
            borderRadius: "10px",
            backgroundColor: "lightgreen",
          }}
        >
          Get Browser Info
        </button>
        </div>
        <div style={{ margin: "10px" }}> 
          {
            ip && (
              <p>Your Public IP address 🚀 is : {ip}</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
