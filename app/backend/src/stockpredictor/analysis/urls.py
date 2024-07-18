from django.urls import path
from .views import stock_analysis  

urlpatterns = [
    path('api/stockpredict', stock_analysis, name='api_stockpredict'),  
]
