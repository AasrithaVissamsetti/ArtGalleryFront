import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminUserManagement.css";
import AdminSideNavbar from "./AdminSideNavbar";

const AdminUserManagement = () => {
  // States for users, form input, and error messages
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch users from the backend
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users function
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:2000/api/admins/all"); // Ensure correct endpoint
      console.log("Fetched Users:", response.data); // Debugging line to check the fetched data
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
      console.error("Error fetching users:", err); // Log the error
    }
  };

  // Handle form field change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle user add or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      setError("Both username and email are required");
      return;
    }

    try {
      if (formData.id) {
        // Update user
        const response = await axios.put(
          `http://localhost:2000/api/admins/update/${formData.id}`,
          formData
        );
        setMessage("User updated successfully!");
      } else {
        // Add new user
        const response = await axios.post(
          "http://localhost:2000/api/admins/create",
          formData
        );
        setMessage("User added successfully!");
      }
      fetchUsers(); // Re-fetch the users list
      clearForm();
    } catch (err) {
      setError("Error occurred while submitting the form");
      console.error("Error submitting form:", err); // Log the error
    }
  };

  // Handle delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/api/admins/delete/${id}`);
      setMessage("User deleted successfully!");
      fetchUsers(); // Re-fetch users after deletion
    } catch (err) {
      setError("Failed to delete user");
      console.error("Error deleting user:", err); // Log the error
    }
  };

  // Clear form inputs
  const clearForm = () => {
    setFormData({
      id: "",
      username: "",
      email: "",
    });
  };

  return (
    <div>
      <h1>Admin User Management</h1>
      <AdminSideNavbar />
      {/* Display message and error */}
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      {/* User Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <button type="submit">
            {formData.id ? "Update User" : "Add User"}
          </button>
          {formData.id && (
            <button type="button" onClick={clearForm}>
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Users List */}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id || user.username}> {/* Use unique value as key */}
                <td>{user.username}</td> {/* Ensure the username is properly displayed */}
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setFormData({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManagement;
