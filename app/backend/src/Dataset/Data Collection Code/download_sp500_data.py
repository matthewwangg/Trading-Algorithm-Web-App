import yfinance as yf
import pandas as pd
import time

# List of S&P 500 tickers (first 100)
sp500_tickers = [
    "MMM", "ABT", "ABBV", "ACN", "ATVI", "ADM", "ADBE", "AMD", "AAPL", "AMAT",
    "APTV", "ANET", "AMGN", "ADI", "ANSS", "AON", "APA", "AAPL", "AMAT", "APTV",
    "ARE", "AMT", "AWK", "AMP", "ABC", "AME", "AMGN", "APH", "ADI", "ANSS", 
    "AON", "AOS", "APA", "AAPL", "AMAT", "APTV", "ADSK", "ADP", "AZO", "AVB", 
    "AVY", "BKR", "BALL", "BAC", "BBWI", "BAX", "BDX", "BRK.B", "BBY", "BIO", 
    "TECH", "BIIB", "BLK", "BK", "BA", "BKNG", "BWA", "BXP", "BSX", "BMY", 
    "AVGO", "BR", "BRO", "BF.B", "CHRW", "COG", "CDNS", "CZR", "CPB", "COF", 
    "CAH", "KMX", "CCL", "CARR", "CTLT", "CAT", "CBOE", "CBRE", "CDW", "CE", 
    "CNC", "CNP", "CERN", "CF", "CRL", "SCHW", "CHTR", "CVX", "CMG", "CB", 
    "CHD", "CI", "CINF", "CTAS", "CSCO", "C", "CFG", "CLX", "CME", "CMS", 
    "KO", "CTSH", "CL", "CMCSA", "CMA"
]

# Function to download data for a single ticker
def download_stock_data(ticker):
    try:
        data = yf.download(ticker, start='2004-01-01', end='2024-01-01')
        data.to_csv(f'{ticker}_data.csv')
        print(f"Data for {ticker} saved to {ticker}_data.csv")
    except Exception as e:
        print(f"Failed to download data for {ticker}: {e}")

# Download data for each ticker
for ticker in sp500_tickers:
    download_stock_data(ticker)
    time.sleep(1)  # Add a delay to avoid hitting API rate limits
