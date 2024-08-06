import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [formData, setFormData] = useState({
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
            const response = await axios.post(`/api/auth/login`, formData) // change if needed
            localStorage.setItem('token', response.data.token)
            // navigate("/user-profile");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage