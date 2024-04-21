from rest_framework.serializers import ModelSerializer
from ..models import gaming

class gamingSerializer(ModelSerializer):
    class Meta:
        model = gaming
        fields = ('id', 'Name', 'redID', 'device', 'time')