from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
import joblib

# Load sample dataset (Iris dataset)
X, y = load_iris(return_X_y=True)

# Train a simple Logistic Regression model
model = LogisticRegression(max_iter=1000)

model.fit(X, y)

# Save the trained model as 'model.pkl'
joblib.dump(model, "model.pkl")

print("✅ Model trained and saved as model.pkl successfully!")
