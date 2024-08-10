from django.urls import path
from .views import stock_analysis
from .views import stock_analysis_alternative

urlpatterns = [
    path('api/stockpredict', stock_analysis, name='api_stockpredict'),
    path('api/stockpredictalternative', stock_analysis_alternative, name='api_stockpredict_alternative')
]
