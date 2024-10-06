import React from "react";
// import styles from "./secondpage.module.css"
import hh from "../../assets/N2O.jpg";
import h from "../../assets/map.png";
const FifthPage = () => {
  const cardData = [
    {
      title: "What is N2O",
      content:
        "Nitrous oxide (N2O), commonly known as laughing gas, is a colorless, non-flammable gas with a slightly sweet odor. It consists of two nitrogen atoms and one oxygen atom.",
      color: "#FFA500", // Golden for warmth and the slight humor associated with laughing gas
    },
    {
      title: "Pros of N2O",
      content:
        "N2O is used in medical anesthesia, as a propellant in the food industry, and in automotive applications to increase engine performance.",
      color: "#00FF7F", // Light blue for its association with healthcare and clean technology
    },
    {
      title: "Causes of N2O Emissions",
      content:
        "N2O emissions arise from agricultural activities, particularly from fertilizers, as well as from fossil fuel combustion, industrial processes, and wastewater treatment.",
      color: "#32CD32", // Green to symbolize the connection with agriculture and environment
    },
    {
      title: "Consequences of increase in N2O",
      content:
        "Increased N2O levels contribute to global warming and depletion of the ozone layer, posing risks to climate stability and human health.",
      color: "#FF4500", // Orange-red for the danger associated with global warming and ozone depletion
    },
    {
      title: "Sustainability of N2O",
      content:
        "To mitigate N2O emissions, sustainable agricultural practices, waste management improvements, and emission control technologies need to be adopted globally.",
      color: "#8A2BE2", // Violet to represent innovation and sustainability efforts
    },
  ];


  const handleImage = () => {

  };

  return (
    <div className="container">
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: white;
          //   width: 100%;
        }
        .container {
          max-width: 95%;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          //   background-color;
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
          width: fit-content;
          // animation: glow 1s ease-in-out infinite alternate;
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
        // .description {
        //   font-size: 1.1rem;
        //   text-align: center;
        //   max-width: 800px;
        //   margin: 0 auto 2rem;
        // }
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
          color: violet;
          // text-decoration: bright;
          font-weight: 800;
          font-size: 20px;
          // background-color: #333;
          // width: 100%;
          // margin: 0;
          // align-item: center;
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
          align-items: centre;
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

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  gap: 2rem;
  // background-color: #001f3f; /* Dark blue background */
  color: #f0f8ff; /* Light text color for contrast */
}

.description {
  font-size: 1.2rem;
  text-align: left; /* Align left for readability */
  line-height: 1.8; /* Increased line-height for better text spacing */
  max-width: 900px; /* Slightly wider for better readability */
  margin: 0 auto 2.5rem;
  padding: 15px; /* Added padding for breathing room */
  background-color: #003366; /* Darker background for text container */
  color: #e0e0e0; /* Softer text color */
  border-radius: 10px; /* Rounded corners for a smooth UI */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow for better focus */
}

/* Optional additional style to center text on mobile screens */
@media (max-width: 768px) {
  .description {
    text-align: center;
  }
}
      `}</style>

      <div className="headd">
        <h1>Nitrous Oxide</h1>
      </div>

      <div className="main">
        <h2 className="description">
          Nitrous oxide (N<sub>2</sub>O), also known as laughing gas, is a colorless gas with a slightly sweet odor.
          It plays various roles in medicine, industry, and the environment. While widely used as an anesthetic
          in medical procedures and a propellant in the food industry, it is also a potent greenhouse gas.
          <br />
          <br />
          At room temperature, Nitrous oxide is a gas made up of two nitrogen atoms and one oxygen atom.
          It is naturally present in small amounts in Earth's atmosphere, but human activities such as
          agriculture and industrial processes have significantly increased its levels. In a solid state,
          nitrous oxide can form at very low temperatures.
        </h2>
        <div className="image-container">
          <img className="im" src={hh} alt="Carbon dioxide molecule" />
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
          alt=""
          onClick={handleImage}
        />
      </div>
    </div>
  );
};

export default FifthPage;
