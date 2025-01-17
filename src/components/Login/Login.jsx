// src/Login.jsx

import React, { useState } from 'react';

import './Login.css'; // Import the CSS file for styling

const Login = () => {
    const [username, setUsername] = useState(''); // Este es el controlnumber
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Para manejar errores

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar errores previos

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Enviar controlnumber y password
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login exitoso:', data);
                // Aquí puedes guardar el token en el localStorage o en el estado global
                localStorage.setItem('token', data.token); // Guardar el token
                // Redirigir o realizar otra acción después del inicio de sesión exitoso
            } else {
                setError(data.message); // Mostrar el mensaje de error
                console.error('Error de login:', data.message);
            }
        } catch (error) {
            setError('Error en la solicitud. Inténtalo de nuevo.'); // Manejo de errores
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Control Number</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
            </form>
            <p className="register-link">
                Don't have an account? <a href="/register">Register here</a>
            </p>
        </div>
    );
};

export default Login;