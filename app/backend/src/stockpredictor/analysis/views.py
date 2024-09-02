from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
from django.http import JsonResponse
from .serializers import StockRequestSerializer
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import xgboost as xgb
import json

@api_view(['POST'])
def stock_analysis(request):
    serializer = StockRequestSerializer(data=request.data)
    if serializer.is_valid():
        ticker = serializer.validated_data['ticker']
        file_path = f'/Users/hari/ASU Dropbox/Hari Varshan Dharmendra Mohan Prabu/Mac/Desktop/Personal Project/Trading-Engine-Web-App/app/backend/src/Dataset/{ticker}_data.csv'
        
        try:
            # Read the CSV file
            data = pd.read_csv(file_path, index_col='Date', parse_dates=True)
            data = data.asfreq('B')
            data['Close'] = data['Close'].ffill()

            # Check if data frame is not empty and respond accordingly
            if not data.empty:
                data['MA50'] = data['Close'].rolling(window=50, min_periods=1).mean()
                data['MA200'] = data['Close'].rolling(window=200, min_periods=1).mean()

                # Assuming you might want to return some basic data analytics
                basic_analytics = {
                    'mean_close': data['Close'].mean(),
                    'max_close': data['Close'].max(),
                    'min_close': data['Close'].min()
                }
                return Response(basic_analytics, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No data available for the ticker provided.'}, status=status.HTTP_404_NOT_FOUND)

        except FileNotFoundError:
            return Response({'error': 'File not found. Please check the ticker name or file path.'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def stock_analysis_alternative(request):

    ticker = request.data['ticker']

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
    return JsonResponse(data)