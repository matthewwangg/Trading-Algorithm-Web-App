import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.arima.model import ARIMA

# Load the data
file_path = f'/Users/hari/ASU Dropbox/Hari Varshan Dharmendra Mohan Prabu/Mac/Desktop/Personal Project/Trading-Engine-Web-App/app/backend/src/Dataset/APPL_data.csv' # change data source accordingly
data = pd.read_csv(file_path, index_col='Date', parse_dates=True)
data = data.asfreq('B') # Set the frequency of the date index

# Display the first few rows
print(data.head())

# Decompose the time series
result = seasonal_decompose(data['Close'], model='multiplicative', period=252)  # 252 business days in a year

# Plot the decomposed components
result.plot()
plt.show()

# Calculate moving averages
data['MA50'] = data['Close'].rolling(window=50).mean()
data['MA200'] = data['Close'].rolling(window=200).mean()

# Plot the moving averages
plt.figure(figsize=(12, 6))
plt.plot(data['Close'], label='Close Price')
plt.plot(data['MA50'], label='50-Day MA', color='orange')
plt.plot(data['MA200'], label='200-Day MA', color='red')
plt.legend()
plt.show()

# Fit ARIMA model
model = ARIMA(data['Close'], order=(5, 1, 0))
model_fit = model.fit()

# Forecast the next 30 days
forecast = model_fit.forecast(steps=30)
forecast_index = pd.date_range(start=data.index[-1] + pd.Timedelta(days=1), periods=30, freq='B')
forecast_df = pd.DataFrame(forecast, index=forecast_index, columns=['Forecast'])

# Plot the forecast
plt.figure(figsize=(12, 6))
plt.plot(data['Close'], label='Close Price')
plt.plot(forecast_df, label='Forecast', color='green')
plt.legend()
plt.show()
