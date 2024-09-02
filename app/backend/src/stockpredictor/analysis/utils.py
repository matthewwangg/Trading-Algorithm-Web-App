import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import xgboost as xgb
import pandas as pd
import json

def xg_boost(ticker):

    df = pd.read_csv(ticker + ".csv")
    df['Previous_Close'] = df['Close'].shift(1)
    df['Moving_Average'] = df['Close'].rolling(window=5).mean()

    # Prepare the features and target
    X = df[['High', 'Low', 'Moving_Average', 'Previous_Close']]
    y = df['Close']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train an XGBoost model
    xgb_model = xgb.XGBRegressor(objective='reg:squarederror', n_estimators=100, learning_rate=0.1, max_depth=3)
    xgb_model.fit(X_train, y_train)

    # Predict with XGBoost
    xgb_predictions = xgb_model.predict(X_test)

    # Evaluate XGBoost model
    xgb_mse = mean_squared_error(y_test, xgb_predictions)
    xgb_r2 = r2_score(y_test, xgb_predictions)

    print(f'XGBoost MSE: {xgb_mse}')
    print(f'XGBoost R2: {xgb_r2}')

    data = {'Predictions': json.dumps(xgb_predictions.tolist()), 'MSE': f'{xgb_mse}', 'R2': f'{xgb_r2}'}
    return data