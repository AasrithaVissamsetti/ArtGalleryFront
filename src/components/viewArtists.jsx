import React from "react";
import CustSide from "./CustSide"; // Sidebar component
import "./ViewArtists.css";
import artist1 from "../assets/artist1.png";
import artist2 from "../assets/artist2.png";
import artist3 from "../assets/artist3.png";
import artist4 from "../assets/artist4.png";
import artist5 from "../assets/artist5.png";
import artist6 from "../assets/artist6.png";
import artist7 from "../assets/artist7.png";
import artist8 from "../assets/artist8.png";
import artist9 from "../assets/artist9.png";
import artist10 from "../assets/artist10.png";

const artists = [
  {
    name: "Artist 1",
    image: artist1, // Replace with the path to your image
    description: "Anish Kapoor, born on March 12, 1954, is a British-Indian sculptor known for his groundbreaking installation and conceptual art.Renowned for public works like Cloud Gate 'The Bean' in Chicago, Sky Mirror. "
  },
  {
    name: "Artist 2",
    image: artist2, // Replace with the path to your image
    description: "Aditya Pande (born 1976) is an Indian contemporary artist. His technique often involves a layering of surfaces along with mixed, diverse media ranging from vector drawing, digital photography, ink, acrylic paint to tinsel. "
  },
  {
    name: "Artist 3",
    image: artist3, // Replace with the path to your image
    description: "Liz Larner (born 1960) is an American installation artist and sculptor known for her innovative use of materials, including ceramics, and her exploration of space, transformation, and perception. "
  },
  {
    name: "Artist 4",
    image: artist4, // Replace with the path to your image
    description: "Julian Schnabel (born 1951) is an American painter and filmmaker known for his 'plate paintings' and acclaimed arthouse films. He directed Before Night Falls and The Diving Bell and the Butterfly, winning the Cannes and Golden Globe Awards for Best Director."
  },
  {
    name: "Artist 5",
    image: artist5, // Replace with the path to your image
    description: "Rudolf Stingel (born 1956) is an Italian-born artist based in New York, known for his conceptual installations and textured paintings that challenge traditional notions of art. His work often involves audience interaction."
  },
  {
    name: "Artist 6",
    image: artist6, // Replace with the path to your image
    description: "Thomas Struth (born 1954) is a German photographer renowned for his 'Museum Photographs' series and large-scale urban, family, and industrial images that explore the relationship between people, architecture, and technology. "
  },
  {
    name: "Artist 7",
    image: artist7, // Replace with the path to your image
    description: "Beatriz Milhazes (born 1960) is a Brazilian artist. She is known for her work juxtaposing Brazilian cultural imagery and references to western Modernist painting. Milhazes is a Brazilian-born collage artist and painter known for her large-scale works and vibrant colors. "
  },
  {
    name: "Artist 8",
    image: artist8, // Replace with the path to your image
    description: "da Ekblad’s (b. 1980) artistic practice incorporates painting, sculpture, performance, filmmaking as well as poetry. Her works transmit a distinct vibrancy and spontaneity, created through the energetic movement of her compositions, the bold application of colour and the attentive use of found materials."
  },
  {
    name: "Artist 9",
    image: artist9, // Replace with the path to your image
    description: "Carroll Dunham (born November 5, 1949) is an American painter. Working since the late 1970s, Dunham's career reached critical renown in the 1980s when he first exhibited with Baskerville + Watson, a decade during which many artists returned to painting."
  },
  {
    name: "Artist 10",
    image:artist10, // Replace with the path to your image
    description: "Robert Holyhead (born 1974) is a British abstract artist known for his minimalist paintings featuring geometric shapes and expanses of white space. His work balances translucent color fields with vibrant, carefully placed forms, creating a dialogue between presence and absence."
  },
  // Add more artists as needed
];

const ViewArtists = () => {
  return (
    <div className="artists-container">
    <CustSide />
      <h1 className="page-title">Our Featured Artists</h1>
      <div className="artists-gallery">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <img
              src={artist.image}
              alt={artist.name}
              className="artist-image"
            />
            <div className="artist-info">
              <h2 className="artist-name">{artist.name}</h2>
              <p className="artist-description">{artist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewArtists;
