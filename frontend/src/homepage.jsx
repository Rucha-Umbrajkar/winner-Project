import React from "react";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My React Homepage</h1>
      <p>This is a basic homepage without any extra dependencies.</p>
      <button 
        onClick={() => alert("Button Clicked!")} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HomePage;
