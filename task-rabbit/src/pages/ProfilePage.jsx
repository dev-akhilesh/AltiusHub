import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fecthUser = async () => {
            try {
                const response = await axios.get('/api/users/profile')
                setUser(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fecthUser();
    }, [])

    const handleClick = () => {
        navigate('/taskpage');
    };
    return (
        <div>
            <h1>Profile</h1>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <button onClick={handleClick}>See All Tasks</button>
        </div>
    )
}

export default ProfilePage