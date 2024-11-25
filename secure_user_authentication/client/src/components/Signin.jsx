// SignIn.js
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaSignInAlt, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignIn = ({ onToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="max-w-md w-full p-8 bg-white shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-4xl font-semibold mb-6">Login</h1>
        <div className="space-y-4">
          <div className="flex items-center border border-purple-500 rounded-lg">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 outline-none"
            />
          </div>
          <div className="flex items-center border border-purple-500 rounded-lg">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 outline-none"
            />
            <button
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="text-purple-500 px-3"
            >
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <motion.button
            onClick={loginUser}
            className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            <FaSignInAlt className="inline-block mr-2" />
            Login
          </motion.button>
        </div>
        <div className="mt-6 text-center">
          <button onClick={onToggle} className="text-purple-500">
            Need an account? Register
          </button>
        </div>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </motion.div>
    </div>
  );
};

export default SignIn;
