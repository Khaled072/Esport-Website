from rest_framework.viewsets import ModelViewSet
from ..models import gaming, devices, Users
from .serializers import gamingSerializer, devicesSerializer, UsersSerializer
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
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import logout
from django.http import JsonResponse


from django.contrib.auth import authenticate, login


from django.http import JsonResponse


class gamingViewSet(ModelViewSet):
    queryset = gaming.objects.all()
    serializer_class = gamingSerializer

class devicesViewSet(ModelViewSet):
    queryset = devices.objects.all()
    serializer_class = devicesSerializer

class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
        return Response({'token': token.key, 'user': serializer.data})
    else:
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



@api_view(['POST'])
def logout(request):
    try:
        # Get the user token from the request headers
        token = request.headers.get('Authorization')

        # Check if the token exists
        if not token:
            raise ValueError('Authorization token not provided')

        # Extract the user associated with the token
        user = Token.objects.get(key=token.split(' ')[1]).user

        # Delete the token associated with the user
        Token.objects.filter(user=user).delete()

        # Return a success response
        return Response({'detail': 'Logout successful'}, status=status.HTTP_200_OK)

    except Exception as e:
        # Return an error response if any exception occurs
        return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)