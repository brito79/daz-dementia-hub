import React from 'react';
//import './Footer.css'; // Assuming you have a CSS file for styling

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 bottom-0 min-h-[30vh sm:min-[20vh] rounded-lg py-2">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
                </div>
                
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold mb-2">Legal</h3>
                    <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
                </div>
                
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <a href="/contact-us" className="hover:text-gray-400">Contact Us</a>
                    <a href="/faq" className="hover:text-gray-400">FAQ</a>
                    <a href="/resources" className="hover:text-gray-400">Resources</a>
                </div>
            </div>
            <div className="text-center text-sm mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Dementia Awareness Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};