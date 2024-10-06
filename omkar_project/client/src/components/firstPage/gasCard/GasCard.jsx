import React from "react";
// import Card from "./Card";
import one from "../../../assets/methane.jpg"
import two from "../../../assets/N2O.jpg"
import three from "../../../assets/ozone.jpg"
import four from "../../../assets/waterVapour.jpg"

import hh from "../../../assets/p1.png";
export default function GasCard() {
  
  function Card({name, imageUrl, description}) {
    const handleClick = () => {
      if (name == "Carbon Dioxide (CO₂)") {
        // alert("You clicked on Carbon Dioxide (CO₂)!");
        window.location.href = "/co2";
      } else if (name == "Methane (CH₄)") {
        // alert("You clicked on Methane (CH₄)!");
        window.location.href = "/methane";

      } else if (name == "Water Vapor") {
        // alert("You clicked on Water Vapor!");

        window.location.href = "/water-vapor";


      } else if (name == "Nitrous Oxide (N₂O)") {
      //   alert("You clicked on Nitrous Oxide (N₂O)!");
      window.location.href = "/nitrous-oxide";
      } else if (name == "Chlorofluorocarbons (CFCs)") {
      //   alert("You clicked on Chlorofluorocarbons (CFCs)!");
      window.location.href = "/chlorofluorocarbon";

      }
    };
    return (
      <div className="card" onClick={handleClick}>
        <img src={imageUrl} alt={name} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }

  const cardData = [
    {
      id: 1,
      name: "Carbon Dioxide (CO₂)",
      imageUrl: hh,
      description:
        "CO₂ is the most well-known greenhouse gas. It's released primarily from burning fossil fuels (like coal, oil, and natural gas) and deforestation. CO₂ traps heat in the atmosphere, contributing significantly to global warming.",
    },
    {
      id: 2,
      name: "Methane (CH₄)",
      imageUrl: one,
      description:
        "Methane is potent but less abundant than CO₂. It comes from livestock, rice paddies, landfills, and natural gas production. It absorbs infrared radiation, amplifying the greenhouse effect.",
    },
    {
      id: 3,
      name: "Water Vapor",
      imageUrl: four,
      description:
        "Although not directly emitted by human activity, water vapor is a crucial greenhouse gas. It reacts to temperature changes and acts as a “feedback,” enhancing the warming effect caused by other greenhouse gases.",
    },
    {
      id: 4,
      name: "Nitrous Oxide (N₂O)",
      imageUrl: two,
      description:
        "N₂O comes from agricultural practices, industrial processes, and fossil fuel combustion. It's about 300 times more effective at trapping heat than CO₂ over a century.",
    },
    {
      id: 5,
      name: "Chlorofluorocarbons (CFCs)",
      imageUrl: three,
      description:
        "CFCs were once used in refrigeration, aerosols, and solvents. Although their atmospheric concentration is low, they're incredibly efficient at trapping heat. Their global warming potential can be thousands of times higher than CO₂, even though they're much less abundant.",
    },
  ];

  return (
    <div className="cards-container">
      {/* {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))} */}
      <Card name={cardData[0].name} imageUrl={cardData[0].imageUrl } description={cardData[0].description}/>
      <Card name={cardData[1].name} imageUrl={cardData[1].imageUrl } description={cardData[1].description}/>
      <Card name={cardData[2].name} imageUrl={cardData[2].imageUrl } description={cardData[2].description}/>
      <Card name={cardData[3].name} imageUrl={cardData[3].imageUrl } description={cardData[3].description}/>
      <Card name={cardData[4].name} imageUrl={cardData[4].imageUrl } description={cardData[4].description}/>
      <style jsx>{`
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          background-image: url("../../../assets/th.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .card {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.2);
        }
        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-title {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .card-description {
          font-size: 1rem;
          color: #cccccc;
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            padding: 1rem;
          }
          .card-content {
            padding: 1rem;
          }
          .card-title {
            font-size: 1.25rem;
          }
          .card-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};
