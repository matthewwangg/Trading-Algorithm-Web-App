from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
import matplotlib.pyplot as plt
from io import BytesIO
import base64
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.arima.model import ARIMA
import matplotlib
matplotlib.use('Agg')

from .serializers import StockRequestSerializer

@api_view(['POST'])
def stock_analysis(request):
    serializer = StockRequestSerializer(data=request.data)
    if serializer.is_valid():
        ticker = serializer.validated_data['ticker']
        file_path = f'/Users/hari/ASU Dropbox/Hari Varshan Dharmendra Mohan Prabu/Mac/Desktop/Personal Project/Trading-Engine-Web-App/app/backend/src/Dataset/{ticker}_data.csv'
        
        try:
            data = pd.read_csv(file_path, index_col='Date', parse_dates=True)
            data = data.asfreq('B')
            data['Close'] = data['Close'].ffill()

            if not data.empty:
                data['MA50'] = data['Close'].rolling(window=50, min_periods=1).mean()
                data['MA200'] = data['Close'].rolling(window=200, min_periods=1).mean()


            # Generate graphs
            image1_base64 = generate_plot(data, 'Close', 'MA50', 'MA200')
            image2_base64 = generate_decomposition(data['Close'])
            image3_base64 = generate_forecast(data['Close'])

            return Response({
                'image1_base64': image1_base64,
                'image2_base64': image2_base64,
                'image3_base64': image3_base64
            }, status=status.HTTP_200_OK)
        
        except FileNotFoundError:
            return Response({'error': 'File not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def generate_plot(data, column, ma50, ma200):
    plt.figure(figsize=(12, 6))
    plt.plot(data[column], label='Close Price')
    plt.plot(data[ma50], label='50-Day MA', color='orange')
    plt.plot(data[ma200], label='200-Day MA', color='red')
    plt.legend()
    buf = BytesIO()
    plt.savefig(buf, format='png')
    plt.close()
    return base64.b64encode(buf.getvalue()).decode('utf-8')

def generate_decomposition(data):
    result = seasonal_decompose(data, model='multiplicative', period=252)
    result.plot()
    buf = BytesIO()
    plt.savefig(buf, format='png')
    plt.close()
    return base64.b64encode(buf.getvalue()).decode('utf-8')

def generate_forecast(data):
    model = ARIMA(data, order=(5, 1, 0))
    model_fit = model.fit()
    forecast = model_fit.get_forecast(steps=30)
    forecast_index = pd.date_range(start=data.index[-1] + pd.Timedelta(days=1), periods=30, freq='B')
    forecast_df = pd.DataFrame(forecast.predicted_mean, index=forecast_index, columns=['Forecast'])
    confidence_intervals = forecast.conf_int()
    plt.figure(figsize=(12, 6))
    plt.plot(data, label='Close Price')
    plt.plot(forecast_df, label='Forecast', color='green')
    plt.fill_between(forecast_index, confidence_intervals.iloc[:, 0], confidence_intervals.iloc[:, 1], color='green', alpha=0.3)
    plt.legend()
    buf = BytesIO()
    plt.savefig(buf, format='png')
    plt.close()
    return base64.b64encode(buf.getvalue()).decode('utf-8')
