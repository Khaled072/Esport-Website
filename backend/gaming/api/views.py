from rest_framework.viewsets import ModelViewSet
from ..models import gaming, devices
from .serializers import gamingSerializer, devicesSerializer


class gamingViewSet(ModelViewSet):
    queryset = gaming.objects.all()
    serializer_class = gamingSerializer

class devicesViewSet(ModelViewSet):
    queryset = devices.objects.all()
    serializer_class = devicesSerializer