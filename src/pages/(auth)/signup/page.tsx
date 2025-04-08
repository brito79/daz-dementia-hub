import React, { useState } from 'react';
import background_first from '/assets/background_first.jpg'; 

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('assets/background_first.jpg')] bg-cover bg-center">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="flex items-center">
                <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                    Remember me
                </label>
                </div>
                <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                Sign Up
                </button>
                <p className="mt-4 text-xs text-center text-gray-600">
                By signing up, you agree to our{' '}
                <a
                    href="/privacy-policy"
                    className="text-blue-500 hover:underline"
                >
                    Privacy Policy
                </a>.
                </p>
            </form>
            </div>
        </div>
    );
};

export default SignupPage;