from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Load ML Model (Ensure model.pkl is in backend/)
model = joblib.load("model.pkl")

@app.route("/")
def home():
    return jsonify({"message": "Flask server is running"})




@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)  # Debugging step
        if data is None:
            return {"error": "No data received"}, 400
        features = np.array(data["features"])

        # Debug: Print incoming features
        print("Received features:", features)

        # Check for NaN values
        if np.isnan(features).any():
            return jsonify({"error": "Input contains NaN values"}), 400

        # Make prediction
        prediction = model.predict(features.reshape(1, -1))

        return jsonify({"prediction": prediction.tolist()})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
