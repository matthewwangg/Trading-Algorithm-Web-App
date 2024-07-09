import yfinance as yf
import pandas as pd

# Define the ticker for S&P 500
sp500_ticker = '^GSPC'

# Download historical data
data = yf.download(sp500_ticker, start='2004-01-01', end='2024-01-01')

# Save the data to a CSV file
data.to_csv('sp500_data.csv')

print("Data collection complete. Data saved to sp500_data.csv.")