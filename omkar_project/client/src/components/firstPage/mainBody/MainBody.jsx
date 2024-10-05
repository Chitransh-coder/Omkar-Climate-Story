import React from "react";
import style from "./mainBody.module.css";
import Navbar from "../navbar/Navbar";
import VideoPlayer from "./VideoPlayer";
import GasCard from "../gasCard/GasCard";
// import Globe from "../globe/Globe";
const MainBody = () => {
  return (
    <div>
      <Navbar />
      {/* <Globe /> */}
      {/* <div className={style.main}> */}
        <VideoPlayer />
      {/* </div> */}
      <GasCard />
    </div>
  );
};

export default MainBody;
