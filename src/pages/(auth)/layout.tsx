import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
                    <p className="text-sm text-gray-600">Please sign in to continue</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;