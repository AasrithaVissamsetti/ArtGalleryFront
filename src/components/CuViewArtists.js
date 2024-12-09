import React from "react";
import "./CuViewArtists.css";
import CuratorSideNavbar from "./CuratorSide";

const ViewArtists = () => {
  const artists = [
    { id: 1, name: "Leonardo da Vinci", bio: "Renaissance artist known for the Mona Lisa and The Last Supper." },
    { id: 2, name: "Vincent van Gogh", bio: "Post-Impressionist painter famous for Starry Night and Sunflowers." },
    { id: 3, name: "Frida Kahlo", bio: "Mexican artist celebrated for her self-portraits and surrealism." },
    { id: 4, name: "Pablo Picasso", bio: "Co-founder of Cubism, known for Les Demoiselles d'Avignon." },
    { id: 5, name: "Claude Monet", bio: "Founder of French Impressionism, known for Water Lilies and Impression, Sunrise." },
{ id: 6, name: "Salvador Dalí", bio: "Surrealist artist famous for The Persistence of Memory and his eccentric personality." },

  ];

  return (
    <div className="view-artists">
        <CuratorSideNavbar/>
      <h1 className="artists-title">View Artists</h1>
      <div className="artists-list">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <h2 className="artist-name">{artist.name}</h2>
            <p className="artist-bio">{artist.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewArtists;
