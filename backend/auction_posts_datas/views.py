from django.shortcuts import render
from rest_framework.views import APIView
from .models import AuctionsInventory
from .serializers import AuctionsInventorySerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class ReactView_Register_Auction_Prodcuts(APIView):
    def get(self, request):
        data = AuctionsInventory.objects.all()
        serializer = AuctionsInventorySerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AuctionsInventorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)