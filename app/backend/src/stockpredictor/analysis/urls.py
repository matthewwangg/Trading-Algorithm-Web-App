from django.urls import path
from .views import stock_analysis  

urlpatterns = [
    path('api/stockpredict', stock_analysis, name='api_stockpredict'),
    path('api/stockpredictalternative', stockpredictalternative, name='api_stockpredict_alternative')
]
