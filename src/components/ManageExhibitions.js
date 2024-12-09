import React, { useState, useEffect } from "react";
import "./ManageExhibitions.css";
import CuratorSideNavbar from "./CuratorSide";

const ManageExhibitions = () => {
  // Initialize exhibitions from localStorage or use default list
  const [exhibitions, setExhibitions] = useState(() => {
    const savedExhibitions = localStorage.getItem("exhibitions");
    return savedExhibitions
      ? JSON.parse(savedExhibitions)
      : [
        { id: 1, title: "Field Panel 94 Slant", image: image1, description: "A beautiful blend of colors and forms.The contrasting colors evoke a sense of energy, while the intricate patterns suggest movement. It challenges perceptions, creating a dynamic interplay between simplicity and complexity." },
        { id: 2, title: "L'Offrande I", image: image2, description: "A stunning view of nature in modern style. The piece captures the serenity of the natural world with bold, abstract elements. The use of light and shadow evokes a sense of tranquility, while the vibrant colors highlight the richness of nature." },
        { id: 3, title: "Restored My Will To Live Again", image: image3, description: "A vibrant city scene illuminated by neon lights. The hustle and bustle of urban life are captured with an energetic, colorful palette. The neon glow contrasts with the dark cityscape, symbolizing hope amidst chaos." },
        { id: 4, title: "Impression Sunrise", image: image4, description: "An emotional portrait of a person. The painting captures raw emotion through subtle brushstrokes, portraying vulnerability and strength. The soft use of color enhances the intimate atmosphere, evoking a deep connection with the subject." },
    { id: 5, title: "The Ninth Wave", image: image5, description: "A serene landscape depicting nature at its finest. The crashing waves create a dynamic contrast against the calm sky, capturing the raw power of the sea. This piece evokes a sense of peace and awe in the viewer, inviting contemplation of nature's beauty." },
    { id: 6, title: "Surrealism", image: image6, description: "A thought-provoking piece that challenges perception. The dreamlike quality of the artwork invites viewers to explore the boundaries of reality and imagination. It evokes a sense of mystery, encouraging deep introspection and reflection on the nature of existence." },
        ];
  });

  const [newExhibition, setNewExhibition] = useState({
    name: "",
    date: new Date().toISOString().slice(0, 10), // Default to today's date
    location: "",
  });

  // Update localStorage whenever exhibitions change
  useEffect(() => {
    localStorage.setItem("exhibitions", JSON.stringify(exhibitions));
  }, [exhibitions]);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExhibition((prevState) => ({
      ...prevState,
      [name]: value.trimStart(), // Avoid leading spaces
    }));
  };

  // Add a new exhibition to the list
  const handleAddExhibition = () => {
    const { name, date, location } = newExhibition;

    if (name.trim() && date && location.trim()) {
      setExhibitions((prevState) => [
        ...prevState,
        { ...newExhibition, id: Date.now() }, // Use Date.now() for unique IDs
      ]);
      setNewExhibition({ name: "", date: new Date().toISOString().slice(0, 10), location: "" }); // Clear the form
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete an exhibition by ID
  const handleDeleteExhibition = (id) => {
    setExhibitions((prevState) =>
      prevState.filter((exhibition) => exhibition.id !== id)
    );
  };

  // Render component
  return (
    <div className="manage-exhibitions">
      <CuratorSideNavbar />
      <h1 className="exhibition-title">Manage Exhibitions</h1>

      {/* Add New Exhibition Form */}
      <div className="add-exhibition-form">
        <h2>Add New Exhibition</h2>
        <input
          type="text"
          name="name"
          placeholder="Exhibition Name"
          value={newExhibition.name}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newExhibition.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newExhibition.location}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddExhibition}>
          Add Exhibition
        </button>
      </div>

      {/* Exhibition List */}
      <div className="exhibition-list">
        <h2>Exhibition List</h2>
        {exhibitions.length > 0 ? (
          <ul>
            {exhibitions.map((exhibition) => (
              <li key={exhibition.id} className="exhibition-item">
                <span>{exhibition.name}</span>
                <span>{exhibition.date}</span>
                <span>{exhibition.location}</span>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteExhibition(exhibition.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No exhibitions available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageExhibitions;
