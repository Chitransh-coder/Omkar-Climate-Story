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
      <div className="video-slogan-wrapper">
        <div className="video-container">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={srce}
                onClick={togglePlay}
                onError={handleVideoError}
                playsInline
              />
              <button className="play-pause-btn" onClick={togglePlay}>
                {isPlaying ? "❚❚" : "▶"}
              </button>
            </>
          )}
        </div>
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
};

export default VideoPlayer;
// import React, { useState, useRef, useEffect } from 'react';
// import videoRef from "../../../assets/video.mp4";

// const VideoPlayer = ({ src }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [error, setError] = useState(null);
//   const [debugInfo, setDebugInfo] = useState('');
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.pause();

//       // Add event listeners for debugging
//       videoRef.current.addEventListener('loadedmetadata', () => addDebugInfo('Metadata loaded'));
//       videoRef.current.addEventListener('canplay', () => addDebugInfo('Can play'));
//       videoRef.current.addEventListener('playing', () => addDebugInfo('Playing'));
//       videoRef.current.addEventListener('pause', () => addDebugInfo('Paused'));
//       videoRef.current.addEventListener('error', (e) => addDebugInfo(`Error: ${e.target.error.message}`));
//     }

//     return () => {
//       // Clean up event listeners
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('loadedmetadata', () => {});
//         videoRef.current.removeEventListener('canplay', () => {});
//         videoRef.current.removeEventListener('playing', () => {});
//         videoRef.current.removeEventListener('pause', () => {});
//         videoRef.current.removeEventListener('error', () => {});
//       }
//     };
//   }, []);

//   const addDebugInfo = (info) => {
//     setDebugInfo(prev => `${prev}\n${new Date().toISOString()}: ${info}`);
//   };

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play().then(() => {
//           setIsPlaying(true);
//           addDebugInfo('Play requested');
//         }).catch(e => {
//           setError(`Error playing video: ${e.message}`);
//           addDebugInfo(`Play error: ${e.message}`);
//         });
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//         addDebugInfo('Pause requested');
//       }
//     }
//   };

//   const handleVideoError = (e) => {
//     setError(`Error loading video: ${e.target.error.message}`);
//     addDebugInfo(`Load error: ${e.target.error.message}`);
//   };

//   return (
//     <div className="container">
//       <div className="video-slogan-wrapper">
//         <div className="video-container">
//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <>
//               <video
//                 ref={videoRef}
//                 onClick={togglePlay}
//                 onError={handleVideoError}
//                 playsInline
//                 preload="auto"
//               >
//                 <source src={src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button className="play-pause-btn" onClick={togglePlay}>
//                 {isPlaying ? '❚❚' : '▶'}
//               </button>
//             </>
//           )}
//         </div>
//         <div className="slogan-container">
//           <h2>From Arctic ice to tropical reefs, our climate stories unfold.</h2>
//         </div>
//       </div>
//       <div className="debug-info">
//         <h3>Debug Info:</h3>
//         <pre>{debugInfo}</pre>
//       </div>
//       <style jsx>{`
//         .container {
//         //   width: 100%;

//           max-width: 1200px;
//           margin: 60px auto;
//           padding: 20px;
//           box-sizing: border-box;
//         }
//         .video-slogan-wrapper {
//           display: flex;
//           align-items: center;
//           gap: 40px;
//         }
//         .video-container {
//           position: relative;
//           flex: 1;
//           border: 10px solid #333;
//           border-radius: 15px;
//           overflow: hidden;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
//           aspect-ratio: 16 / 9;
//           background-color: #000;
//         }
//         video {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .play-pause-btn {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           background-color: rgba(0, 0, 0, 0.6);
//           color: white;
//           border: none;
//           border-radius: 50%;
//           width: 60px;
//           height: 60px;
//           font-size: 24px;
//           cursor: pointer;
//           transition: opacity 0.3s;
//           opacity: 0;
//         }
//         .video-container:hover .play-pause-btn {
//           opacity: 1;
//         }
//         .slogan-container {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .slogan-container h2 {
//           font-size: 2rem;
//           color: #fff;
//           text-align: center;
//           line-height: 1.4;
//         }
//         .error-message {
//           color: #ff4444;
//           text-align: center;
//           padding: 20px;
//         }
//         .debug-info {
//           margin-top: 20px;
//           padding: 10px;
//           background-color: #f0f0f0;
//           border-radius: 5px;
//         }
//         .debug-info pre {
//           white-space: pre-wrap;
//           word-wrap: break-word;
//         }
//         @media (max-width: 1024px) {
//           .video-slogan-wrapper {
//             flex-direction: column;
//           }
//           .video-container, .slogan-container {
//             width: 100%;
//           }
//           .slogan-container h2 {
//             font-size: 1.75rem;
//           }
//         }
//         @media (max-width: 768px) {
//           .container {
//             padding: 10px;
//           }
//           .video-container {
//             border-width: 5px;
//             border-radius: 10px;
//           }
//           .play-pause-btn {
//             width: 40px;
//             height: 40px;
//             font-size: 18px;
//           }
//           .slogan-container h2 {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default VideoPlayer;
