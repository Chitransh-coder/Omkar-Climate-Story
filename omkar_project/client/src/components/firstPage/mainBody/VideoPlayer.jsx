import React, { useState, useRef, useEffect } from "react";
import srce from "../../../assets/video.mp4";
// import Globe from "../globe/Globe";
const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .catch((e) => setError("Error playing video: " + e.message));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoError = (e) => {
    setError("Error loading video: " + e.target.error.message);
  };

  return (
    <div className="container">
      <div className="video-slogan-wrapper home-heading">

        {/* <Globe /> */}
        <div className="slogan-container">
          <h1>
            " From Arctic ice to tropical reefs, our climate stories unfold "
          </h1>
          <h2> Explore the climatic condition with us</h2>
        </div>
      </div>
      {/* <Globe /> */}
      <style jsx>{`

        .container {
          //   width: 100%;
          max-width: 1200px;
          margin: 60px auto;
          padding: 20px;
          box-sizing: border-box;
        }
        .video-slogan-wrapper {
          display: flex;
          align-items: center;
          gap: 100px;
          //   background-image: url("../../../assets/th1.png");
          //   background-size: cover;
          //   background-position: center;
          //   background-repeat: no-repeat;
        }
        .video-container {
          position: relative;
          flex: 1;
          border: 10px solid #333;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 0, 0, 3);
          aspect-ratio: 16 / 9;
          background-color: #000;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .play-pause-btn {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          font-size: 24px;
          cursor: pointer;
          transition: opacity 0.3s;
          opacity: 0;
        }
        .video-container:hover .play-pause-btn {
          opacity: 1;
        }
        .slogan-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          color: white;
        }
        .slogan-container h2 {
          font-size: 2rem;
          //   color: #fff;
          //   text-align: center;
          line-height: 1.4;
          margin-top: 0%;
          
        }
.home-heading {
  margin-top: 50px;
  margin-left: 10vh;
  margin-right: 5vh;
  font-weight: 700; /* Corrected from 'weight' to 'font-weight' */
  font-size: 2rem;
 
}
        .error-message {
          color: #ff4444;
          text-align: center;
          padding: 20px;
        }
        @media (max-width: 1024px) {
          .video-slogan-wrapper {
            flex-direction: column;
          }
          .video-container,
          .slogan-container {
            width: 100%;
          }
          .slogan-container h2 {
            font-size: 1.75rem;
          }
        }
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .video-container {
            border-width: 5px;
            border-radius: 10px;
          }
          .play-pause-btn {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .slogan-container h2 {
            font-size: 1.5rem;
          }
          .video-slogan-wrapper {
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default VideoPlayer;