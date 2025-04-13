import React, { useState } from 'react';

const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
            <div className="relative w-full max-w-md p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter your email"
                    required
                />
                </div>
                <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter your password"
                    required
                />
                </div>
                <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                Login
                </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-500 hover:underline">
                Sign up
                </a>
            </p>
            </div>
        </div>
    );
};

export default LoginPage;