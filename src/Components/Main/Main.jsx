import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is an Indonesian Island and one of the best Holiday destination in the Indonesian archipelago.Bali is known for its volcanic mountain,history,art and culture,food,temples and beautiful sandy beaches",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Sydney",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$400",
    description:
      "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Iceland",
    location: "Iceland",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "New York city",
    location: "US",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Jeju Island",
    location: "South Korea",
    grade: "CULTURAL RELAX",
    fees: "$100",
    description:
      "Jeju Island is South Korea's largest island, covering an area of 1,833.2 km², which is 1.83 percent of the total area of the country. Alongside outlying islands, it is part of Jeju Province.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Ko Phi Phi",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "The Phi Phi Islands are an island group in Thailand between the large island of Phuket and the Straits of Malacca coast of Thailand. The islands are administratively part of Krabi Province.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Canada",
    location: "Canada",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Northern Lights",
    location: "Norway",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "An aurora, also commonly known as the northern lights or southern lights, is a natural light display in Earth's sky, predominantly seen in high-latitude regions.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Cherry Blossoms",
    location: "Japan",
    grade: "CULTURAL RELAX",
    fees: "$300",
    description:
      "The cherry blossom, or sakura, is the flower of trees in Prunus subgenus Cerasus. Sakura usually refers to flowers of ornamental cherry trees, such as cultivars of Prunus serrulata, not trees grown for their fruit.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Viewed Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data?.map((item) => {
          return (
            <div key={item.id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>

                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{item.description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
