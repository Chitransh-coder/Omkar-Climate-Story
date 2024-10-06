import React from "react";
import hh from "../../assets/p1.png";

const SixthPage = () => {
  const cardData = [
    {
      title: "What are Chlorofluorocarbons (CFCs)",
      content:
        "CFCs are synthetic compounds containing carbon, chlorine, and fluorine. They were commonly used in refrigeration, air conditioning, and aerosol propellants, but have since been phased out due to their harmful effects on the ozone layer.",
      color: "#FF6B6B",
    },
    {
      title: "Pros of CFCs",
      content:
        "CFCs were widely used because they are non-flammable, non-toxic, and chemically stable. They played an important role in the development of refrigeration and air conditioning, improving food preservation and comfort.",
      color: "#4ECDC4",
    },
    {
      title: "Causes of CFC Emissions",
      content:
        "CFCs are released into the atmosphere from leaking refrigerators, air conditioners, and aerosol cans. Once emitted, they rise into the stratosphere where they break down ozone molecules, leading to ozone depletion.",
      color: "#45B7D1",
    },
    {
      title: "Consequences of CFCs",
      content:
        "The depletion of the ozone layer due to CFCs increases the amount of harmful ultraviolet (UV) radiation reaching Earth. This can lead to higher rates of skin cancer, cataracts, and damage to ecosystems, including marine life.",
      color: "#F7B267",
    },
    {
      title: "Sustainability & Alternatives to CFCs",
      content:
        "The Montreal Protocol was established to phase out the production and use of CFCs. Alternatives like Hydrofluorocarbons (HFCs) and Hydrochlorofluorocarbons (HCFCs) are now used, although they still pose environmental challenges.",
      color: "#6A0572",
    },
  ];

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
          width: fit-content;
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
      `}</style>

      <div className="headd">
        <h1>Chlorofluorocarbons</h1>
      </div>

      <div className="main">
        <h2 className="description">
          CFCs are synthetic compounds once widely used in refrigeration and aerosols. Their harmful impact on the ozone layer has led to global efforts to phase them out.
        </h2>
        <div className="image-container">
          <img className="im" src={hh} alt="CFC molecule" />
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
    </div>
  );
};

export default SixthPage;
