// SignUp.js
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUserPlus, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Signup = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all">
      <motion.div
        className="max-w-md w-full p-8 bg-white shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-4xl font-semibold mb-6">Register</h1>

        <div className="space-y-4">
          <div className="flex items-center border border-purple-500 rounded-lg">
            <FaUserPlus className="text-purple-500 ml-3" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border-none outline-none"
            />
          </div>
          <div className="flex items-center border border-purple-500 rounded-lg">
            <FaRegEyeSlash className="text-purple-500 ml-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-none outline-none"
            />
          </div>
          <div className="flex items-center border border-purple-500 rounded-lg">
            <FaLock className="text-purple-500 ml-3" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-none outline-none"
            />
            <button
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="text-purple-500 mr-3"
            >
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <motion.button
            onClick={registerUser}
            className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg font-semibold transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaUserPlus className="inline-block mr-2" />
            Register
          </motion.button>
        </div>

        <div className="mt-6 text-center">
          <motion.button
            onClick={onToggle}
            className="text-purple-300 text-sm transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Already have an account? Login
          </motion.button>
        </div>

        {message && (
          <motion.div
            className="mt-4 text-center text-sm text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p>{message}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Signup;
