import React from "react";
import hh from "../../assets/waterVapour.jpg";
import h from "../../assets/map.png";

const FourthPage = () => {
  const cardData = [
    {
      title: "What is Water Vapor",
      content:
        "Water vapor is the gaseous phase of water. It is one of the most important greenhouse gases, contributing to the Earth's natural greenhouse effect.",
      color: "#3399cc", // Darker blue for better contrast
    },
    {
      title: "Role of Water Vapor in Climate",
      content:
        "Water vapor plays a significant role in Earth's energy balance. It absorbs and emits infrared radiation, contributing to atmospheric warming.",
      color: "#4db8ff", // Slightly darker blue for contrast
    },
    {
      title: "Sources of Water Vapor",
      content:
        "Water vapor is primarily generated through evaporation from bodies of water such as oceans, lakes, and rivers. Plants also release it during transpiration.",
      color: "#66ccff", 
    },
    {
      title: "Impact of Water Vapor",
      content:
        "Water vapor influences weather patterns, cloud formation, and precipitation. Increased water vapor can amplify global warming.",
      color: "#80dfff", 
    },
    {
      title: "Water Vapor Cycle",
      content:
        "The water vapor cycle is a key part of the water cycle, where water evaporates, condenses in clouds, and precipitates back to Earth as rain or snow.",
      color: "#3399cc", // Darker blue for better contrast
    },
  ];

  const handleImage = () => {
    // Placeholder function for image click
  };

  return (
    <div className="container">
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: white;
        }
        .container {
          max-width: 95%;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .headd {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
        h1 {
          text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00;
          font-size: 3.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }
        .image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          width: 100%;
        }
        .image-container img {
          width: 60%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .description {
          font-size: 1.1rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2rem;
        }
        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .timeline::after {
          content: "";
          position: absolute;
          width: 4px;
          background-color: #333;
          top: 0;
          bottom: 0;
          left: 49%;
          margin-left: -3px;
        }
        .card {
          padding: 1.5rem;
          position: relative;
          width: calc(50% - 30px);
          border-radius: 8px;
          color: white;
          margin-bottom: 2rem;
          background-color: var(--bg-color);
        }
        .card::after {
          content: "";
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: #333;
          border: 4px solid #ff9f55;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }
        h2 {
          align-content: center;
        }
        .left {
          left: 0;
        }
        .right {
          left: 50%;
        }
        .left::after {
          right: -17px;
        }
        .right::after {
          left: -16px;
        }
        .card-content {
          padding: 20px;
        }
        .main h2 {
          font-weight: 800;
          font-size: 20px;
        }
        .card-content h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .card-content p {
          font-size: 1rem;
          line-height: 1.5;
        }
        .main {
          width: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          gap: 1.5rem;
        }
        @media screen and (max-width: 600px) {
          .timeline::after {
            left: 31px;
          }
          .card {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .card::after {
            left: 15px;
          }
          .left::after,
          .right::after {
            left: 15px;
          }
          .right {
            left: 0%;
          }
        }
        .imgg:hover {
          cursor: pointer;
        }
      `}</style>

      <div className="headd">
        <h1>Water Vapor</h1>
      </div>

      <div className="main">
        <h2 className="description">
          Water vapor is the gaseous state of water and plays a critical role in
          regulating Earth's temperature. It influences weather, cloud formation,
          and the global climate.
          <br />
          <br />
          Water vapor is one of the most important greenhouse gases, significantly contributing to the greenhouse effect and amplifying global warming.
        </h2>
        <div className="image-container">
          <img className="im" src={hh} alt="Water vapor molecule" />
        </div>
      </div>

      <div className="timeline">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${index % 2 === 0 ? "left" : "right"}`}
            style={{ backgroundColor: card.color }}
          >
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: "100%", alignContent: "center" }}>
        <img
          className="imgg"
          style={{ width: "100%" }}
          src={h}
          alt="Water cycle map"
          onClick={handleImage}
        />
      </div>
    </div>
  );
};

export default FourthPage;
