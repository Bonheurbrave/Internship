// App.js
import { useState } from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import HomePage from "./components/Homepage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Tracks the current page

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <SignIn onToggle={() => setCurrentPage("register")} />;
      case "register":
        return <SignUp onToggle={() => setCurrentPage("login")} />;
      default:
        return (
          <HomePage
            onNavigateToLogin={() => setCurrentPage("login")}
            onNavigateToRegister={() => setCurrentPage("register")}
          />
        );
    }
  };

  return <>{renderPage()}</>;
};

export default App;
