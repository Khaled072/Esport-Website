from rest_framework.serializers import ModelSerializer
from ..models import gaming, devices

class gamingSerializer(ModelSerializer):
    class Meta:
        model = gaming
        fields = ('id', 'Name', 'email', 'redID', 'device', 'status', 'time', 'position')

class devicesSerializer(ModelSerializer):
    class Meta:
        model = devices
        fields = ('id', 'deviceName', 'numDevice')


        