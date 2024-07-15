from rest_framework import serializers

class StockRequestSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=10)
