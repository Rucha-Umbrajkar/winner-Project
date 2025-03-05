import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from "react";
import axios from "axios";

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Machine Learning Prediction</h1>
      <input
        type="text"
        placeholder="Enter comma-separated values"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
      <button onClick={handlePredict}>Predict</button>
      {prediction !== null && <h2>Prediction: {prediction}</h2>}
    </div>
  );
}

export default App;
