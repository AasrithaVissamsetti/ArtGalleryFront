import React, { useState, useEffect } from "react";
import "./ManageArtworks.css";
import CuratorSideNavbar from "./CuratorSide";

const ManageArtworks = () => {
  // Initialize artworks from localStorage or use default list
  const [artworks, setArtworks] = useState(() => {
    const savedArtworks = localStorage.getItem("artworks");
    return savedArtworks
      ? JSON.parse(savedArtworks)
      : [
          { id: 1, title: "Starry Night", artist: "Vincent van Gogh" },
          { id: 2, title: "The Persistence of Memory", artist: "Salvador Dalí" },
          { id: 3, title: "The Scream", artist: "Edvard Munch" },
        ];
  });

  const [newArtwork, setNewArtwork] = useState({ title: "", artist: "" });

  // Update localStorage whenever artworks change
  useEffect(() => {
    localStorage.setItem("artworks", JSON.stringify(artworks));
  }, [artworks]);

  const handleAddArtwork = () => {
    if (newArtwork.title && newArtwork.artist) {
      setArtworks([
        ...artworks,
        { id: Date.now(), ...newArtwork }, // Use Date.now() for unique IDs
      ]);
      setNewArtwork({ title: "", artist: "" });
    }
  };

  const handleDeleteArtwork = (id) => {
    setArtworks(artworks.filter((artwork) => artwork.id !== id));
  };

  return (
    <div className="manage-artworks">
      <CuratorSideNavbar />
      <h1 className="artworks-title">Manage Artworks</h1>
      <div className="add-artwork-form">
        <h2>Add Artwork</h2>
        <input
          type="text"
          placeholder="Artwork Title"
          value={newArtwork.title}
          onChange={(e) =>
            setNewArtwork({ ...newArtwork, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Artist Name"
          value={newArtwork.artist}
          onChange={(e) =>
            setNewArtwork({ ...newArtwork, artist: e.target.value })
          }
        />
        <button onClick={handleAddArtwork}>Add Artwork</button>
      </div>
      <div className="artwork-list">
        <h2>Artwork List</h2>
        {artworks.length > 0 ? (
          artworks.map((artwork) => (
            <div className="artwork-item" key={artwork.id}>
              <span>
                {artwork.title} by {artwork.artist}
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteArtwork(artwork.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No artworks available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default ManageArtworks;
