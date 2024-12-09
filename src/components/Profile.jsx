import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const UserProfile = ({ userEmail }) => {
    // State for user data and loading state
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    // Fetch user details when the component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Make a GET request to the backend to fetch user data
                const response = await axios.get(`http://localhost:8080/api/users/profile/${userEmail}`);
                if (response.data) {
                    setUser(response.data);  // Set user data in state
                    setName(response.data.name);  // Set name for editable input field
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setMessage('Error fetching profile. Please try again.');
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [userEmail]);  // Fetch user data when the email prop changes

    // Handle the form submission to update the user profile
    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        try {
            // Make a PUT request to update the user's name
            const response = await axios.put(`http://localhost:8080/api/users/profile/${userEmail}`, {
                name: name,
            });
            setMessage(response.data);  // Display success message
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('Error updating profile. Please try again.');
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found!</div>;
    }

    return (
        <div className="user-profile-container">
            <h2 className="profile-title">User Profile</h2>

            <div className="profile-details">
                <div className="profile-field">
                    <label>Email:</label>
                    <p>{user.email}</p>
                </div>
                <div className="profile-field">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter new name"
                    />
                </div>
            </div>

            <button className="update-btn" onClick={handleProfileUpdate}>
                Update Profile
            </button>

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default UserProfile;
