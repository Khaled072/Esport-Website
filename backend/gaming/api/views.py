from rest_framework.viewsets import ModelViewSet
from ..models import gaming, devices
from .serializers import gamingSerializer, devicesSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from requests import Request, post
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from uuid import uuid4  # Add this import statement to resolve the error
from django.views.decorators.http import require_http_methods


class gamingViewSet(ModelViewSet):
    queryset = gaming.objects.all()
    serializer_class = gamingSerializer

class devicesViewSet(ModelViewSet):
    queryset = devices.objects.all()
    serializer_class = devicesSerializer

@api_view(['POST'])
def login(request):
   user = get_object_or_404(User, username=request.data['username'])
   if not user.check_password(request.data['password']):
       return Response({'detail': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
   token, created = Token.objects.get_or_create(user=user)
   serializer = UserSerializer(instance=user)
   return Response({'token': token.key, 'user': serializer.data})
from django.contrib.auth import authenticate


@api_view(['POST'])
def admin_login(request):
   username = request.data.get('username')
   password = request.data.get('password')
  
   print(f"Received login request for username: {username}, password: {password}")
  
   # Check if the user exists and is an admin
   user = authenticate(username=username, password=password)
   if user is not None and user.is_staff:
       token, created = Token.objects.get_or_create(user=user)
       serializer = UserSerializer(instance=user)
       print("User authenticated successfully as admin")
       return Response({'token': token.key, 'user': serializer.data})
   else:
       print("User authentication failed or is not an admin")
       return Response({'detail': 'Admin login required'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
   return Response({"Passed for {}".format(request.user.email)})