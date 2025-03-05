import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import HomePage from "./homepage";  // Importing correctly (Ensure the filename is 'homepage.jsx')

function App() {
  const [features, setFeatures] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    const featureArray = features.split(",").map(Number);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        features: featureArray,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div> 
      <HomePage />  {/* Correct way to call a component */}
    </div>
  );
}

export default App;
