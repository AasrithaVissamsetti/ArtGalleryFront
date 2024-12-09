import React from "react";
import "./Exhibition.css";
import gallery1 from "../assets/gallery1.png"; // Ensure the correct file extension is provided.
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import CustSide from "./CustSide";


// Sample exhibition data
const exhibitions = [
    { id: 1, title: "Field Panel 94 Slant", image: gallery1, description: "A beautiful blend of colors and forms.The contrasting colors evoke a sense of energy, while the intricate patterns suggest movement. It challenges perceptions, creating a dynamic interplay between simplicity and complexity." },
    { id: 2, title: "L'Offrande I", image: image2, description: "A stunning view of nature in modern style. The piece captures the serenity of the natural world with bold, abstract elements. The use of light and shadow evokes a sense of tranquility, while the vibrant colors highlight the richness of nature." },
    { id: 3, title: "Restored My Will To Live Again", image: image3, description: "A vibrant city scene illuminated by neon lights. The hustle and bustle of urban life are captured with an energetic, colorful palette. The neon glow contrasts with the dark cityscape, symbolizing hope amidst chaos." },
    { id: 4, title: "Impression Sunrise", image: image4, description: "An emotional portrait of a person. The painting captures raw emotion through subtle brushstrokes, portraying vulnerability and strength. The soft use of color enhances the intimate atmosphere, evoking a deep connection with the subject." },
    { id: 5, title: "The Ninth Wave", image: image5, description: "A serene landscape depicting nature at its finest. The crashing waves create a dynamic contrast against the calm sky, capturing the raw power of the sea. This piece evokes a sense of peace and awe in the viewer, inviting contemplation of nature's beauty." },
    { id: 6, title: "Surrealism", image: image6, description: "A thought-provoking piece that challenges perception. The dreamlike quality of the artwork invites viewers to explore the boundaries of reality and imagination. It evokes a sense of mystery, encouraging deep introspection and reflection on the nature of existence." },

];

const Exhibition = () => {
  return (
    <div className="exhibition-page">
        <CustSide/>
      <h1 className="page-title">Exhibition Highlights</h1>
      <div className="exhibition-gallery">
        {exhibitions.map((exhibition) => (
          <div key={exhibition.id} className="exhibition-card">
            <img
              src={exhibition.image}
              alt={exhibition.title}
              className="exhibition-image"
            />
            <div className="exhibition-info">
              <h2 className="exhibition-title">{exhibition.title}</h2>
              <p className="exhibition-description">{exhibition.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibition;
