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
            data['Close'].fillna(method='ffill', inplace=True)

            # Calculate moving averages
            data['MA50'] = data['Close'].rolling(window=50).mean()
            data['MA200'] = data['Close'].rolling(window=200).mean()

            # Plot the moving averages
            plt.figure(figsize=(12, 6))
            plt.plot(data['Close'], label='Close Price')
            plt.plot(data['MA50'], label='50-Day MA', color='orange')
            plt.plot(data['MA200'], label='200-Day MA', color='red')
            plt.legend()
            buf1 = BytesIO()
            plt.savefig(buf1, format='png')
            plt.close()
            image1_base64 = base64.b64encode(buf1.getvalue()).decode('utf-8')
            buf1.close()

            # Plot the decomposed components
            result = seasonal_decompose(data['Close'], model='multiplicative', period=252)
            result.plot()
            buf2 = BytesIO()
            plt.savefig(buf2, format='png')
            plt.close()
            image2_base64 = base64.b64encode(buf2.getvalue()).decode('utf-8')
            buf2.close()

            # Fit ARIMA model and plot forecast
            model = ARIMA(data['Close'], order=(5, 1, 0))
            model_fit = model.fit()
            forecast = model_fit.get_forecast(steps=30)
            forecast_index = pd.date_range(start=data.index[-1] + pd.Timedelta(days=1), periods=30, freq='B')
            forecast_df = pd.DataFrame(forecast.predicted_mean, index=forecast_index, columns=['Forecast'])
            confidence_intervals = forecast.conf_int()
            plt.figure(figsize=(12, 6))
            plt.plot(data['Close'], label='Close Price')
            plt.plot(forecast_df, label='Forecast', color='green')
            plt.fill_between(forecast_index, confidence_intervals.iloc[:, 0], confidence_intervals.iloc[:, 1], color='green', alpha=0.3)
            plt.legend()
            buf3 = BytesIO()
            plt.savefig(buf3, format='png')
            plt.close()
            image3_base64 = base64.b64encode(buf3.getvalue()).decode('utf-8')
            buf3.close()

            return Response({
                'image1_base64': image1_base64,
                'image2_base64': image2_base64,
                'image3_base64': image3_base64
            }, status=status.HTTP_200_OK)
        
        except FileNotFoundError:
            return Response({'error': 'File not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
