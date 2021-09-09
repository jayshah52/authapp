from django.contrib.sites import requests
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import User
# Create your views here.
from .serializer import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        return self.queryset

    @action(detail=False, methods=['get'])
    def userinfo(self, request, *args, **kwargs):
        user = self.queryset.get(username = request.user)
        serializer = UserSerializer(user, context={'request':request})
        return Response(serializer.data)