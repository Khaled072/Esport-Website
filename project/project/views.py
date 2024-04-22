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


# Assuming you have a model called Device to store counts
from .models import Device


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


''''
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
   '''


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






@api_view(['POST'])
@require_http_methods(['POST'])
def decrement_count(request, device_name):
    try:
        device = Device.objects.get(name=device_name)

        # Ensure the count doesn't go below zero
        if device.count > 0:
            device.count -= 1
            device.save()
            return JsonResponse({'count': device.count}, status=200)
        else:
            return JsonResponse({'error': 'Count is already at zero'}, status=400)

    except Device.DoesNotExist:
        # Handle when device doesn't exist
        return JsonResponse({'error': 'Device not found'}, status=404)
    
    except Exception as e:
        # Generic error handling
        return JsonResponse({'error': str(e)}, status=500)


@api_view(['GET'])
@require_http_methods(['GET'])
def get_all_device_counts(request):
   try:
       # Query the database to get the count for each device
       devices = ['PS5', 'PC', 'Switch', 'Racing']

       # Construct the response JSON with device counts
       device_counts = {}
       for device in devices:
           count = Device.objects.get_or_create(name=device)[0].count
           device_counts[device] = count

       return JsonResponse(device_counts)
   except Exception as e:
       return JsonResponse({'error': str(e)}, status=500)
