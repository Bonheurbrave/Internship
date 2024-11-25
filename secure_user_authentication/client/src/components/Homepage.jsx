// HomePage.js
import React from "react";
import { motion } from "framer-motion";
import { FaSignInAlt, FaUserPlus, FaLock, FaCheckCircle } from "react-icons/fa";

const HomePage = ({ onNavigateToLogin, onNavigateToRegister }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">

            <div>
                <h1 className=" vertically fixed right-0 top-1/3 font-bold">Homepage </h1>
            </div>
            <motion.div
                className="text-center max-w-3xl px-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold mb-6">
                    Welcome to <span className="text-yellow-400">Bobo _ Vault</span>
                </h1>
                <p className="text-lg mb-8">
                    Your ultimate platform for secure and seamless user management. Sign up to protect your data, or log in to access your personalized dashboard.
                </p>

            </motion.div>


            <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
                    <FaLock className="text-4xl text-purple-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Secure Login</h3>
                    <p>
                        Access your account with industry-standard encryption and token-based authentication for maximum security.
                    </p>
                </div>
                <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
                    <FaUserPlus className="text-4xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Easy Registration</h3>
                    <p>
                        Get started with a simple and fast sign-up process. Join the community today!
                    </p>
                </div>
                <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
                    <FaCheckCircle className="text-4xl text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Role-Based Access</h3>
                    <p>
                        Enjoy customized features and restricted access based on user roles for seamless management.
                    </p>
                </div>
            </motion.div>


            <motion.div
                className="mt-12 text-center max-w-2xl px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-4">Why Choose SecureVault?</h2>
                <p className="mb-8">
                    Join thousands of users who trust our platform for secure authentication, role management, and access to protected resources.
                </p>
                <button
                    onClick={onNavigateToRegister}
                    className="px-8 py-4 bg-purple-500 text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
                >
                    Get Started Now
                </button>
            </motion.div>


            <footer className="mt-16 text-gray-300 text-center">
                <p>&copy; {new Date().getFullYear()} SecureVault. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
