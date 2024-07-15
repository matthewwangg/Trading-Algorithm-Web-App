from django.urls import path
from . import api_views

urlpatterns = [
    path('stock-analysis/', api_views.stock_analysis, name='stock_analysis'),
]
