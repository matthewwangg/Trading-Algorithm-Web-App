from django.db import models

class StockData(models.Model):
    """
    Model to store historical stock data.
    """
    stock_name = models.CharField(max_length=100)
    date = models.DateField()
    open_price = models.DecimalField(max_digits=10, decimal_places=2)
    high = models.DecimalField(max_digits=10, decimal_places=2)
    low = models.DecimalField(max_digits=10, decimal_places=2)
    close = models.DecimalField(max_digits=10, decimal_places=2)
    volume = models.BigIntegerField()

    def __str__(self):
        return f"{self.stock_name} on {self.date}"

class StockPrediction(models.Model):
    """
    Model to store stock predictions made by the ML model.
    """
    stock_name = models.CharField(max_length=100)
    prediction_date = models.DateField(auto_now_add=True)
    predicted_close = models.DecimalField(max_digits=10, decimal_places=2)
    model_used = models.CharField(max_length=50, choices=[('XGBoost', 'XGBoost'), ('RandomForest', 'RandomForest')])

    def __str__(self):
        return f"Prediction for {self.stock_name} on {self.prediction_date}"

class PredictionRequestLog(models.Model):
    """
    Model to log requests made to the prediction API.
    """
    request_time = models.DateTimeField(auto_now_add=True)
    stock_name = models.CharField(max_length=100)
    high = models.DecimalField(max_digits=10, decimal_places=2)
    low = models.DecimalField(max_digits=10, decimal_places=2)
    predicted_close = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Request for {self.stock_name} at {self.request_time}"
