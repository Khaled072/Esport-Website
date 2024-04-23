from rest_framework.serializers import ModelSerializer
from ..models import gaming, devices, Users
from django.contrib.auth.models import User

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



        