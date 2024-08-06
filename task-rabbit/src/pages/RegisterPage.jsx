import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/auth/register`, formData) // change if needed
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage