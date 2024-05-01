from rest_framework.serializers import ModelSerializer
from ..models import gaming, devices, Users
from django.contrib.auth.models import User
from rest_framework import serializers, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class gamingSerializer(ModelSerializer):
    class Meta:
        model = gaming
        fields = ('id', 'Name', 'device', 'status', 'time', 'position')

class devicesSerializer(ModelSerializer):
    class Meta:
        model = devices
        fields = ('id', 'deviceName', 'numDevice')

class UsersSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'email', 'username', 'password']




class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'password_confirmation']

    def validate(self, data):
        password = data.get('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError("Passwords do not match")

        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        # Ensure email is lowercase before creating user
        validated_data['email'] = validated_data.get('email', '').lower()
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user
        