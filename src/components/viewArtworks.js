import React from "react";
import "./ViewArtworks.css"; // Link to the CSS file
import CustSide from "./CustSide"; // Sidebar component
import artwork1 from "../assets/artwork1.png";
import artwork2 from "../assets/artwork2.png";
import artwork3 from "../assets/artwork3.png";
import artwork4 from "../assets/artwork4.png";
import artwork5 from "../assets/artwork5.png";
import artwork6 from "../assets/artwork6.png";


// Sample artwork data
const artworks = [
  { id: 1, title: "field panel 94 slant", image: artwork1, description: "A beautiful blend of colors and forms." },
  { id: 2, title: "L'Offrande I", image: artwork2, description: "A stunning view of nature in modern style." },
  { id: 3, title: "Restored My Will To Live Again", image: artwork3, description: "A vibrant city scene illuminated by neon lights." },
  { id: 4, title: "IMPRESSION SUNRISE ", image: artwork4, description: "An emotional portrait of a person." },
  { id: 5, title: "The Ninth Wave", image: artwork5, description: "A serene landscape depicting nature at its finest." },
  { id: 6, title: "Surrealism", image: artwork6, description: "A thought-provoking piece that challenges perception." },
];

const ViewArtworks = () => {
  return (
    <div className="artworks-page">
        <CustSide/>
      <h1 className="page-title">Our Featured Artworks</h1>
      <div className="artworks-gallery">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-card">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="artwork-image"
            />
            <div className="artwork-info">
              <h2 className="artwork-title">{artwork.title}</h2>
              <p className="artwork-description">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewArtworks;
