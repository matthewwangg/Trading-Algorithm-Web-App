# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
from .serializers import StockRequestSerializer

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
def stock_analysis_alternative():
    print("Matt's prediction logic will go here")