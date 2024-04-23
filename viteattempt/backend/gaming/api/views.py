from rest_framework.viewsets import ModelViewSet
from ..models import gaming, devices, Users
from .serializers import gamingSerializer, devicesSerializer, UsersSerializer


class gamingViewSet(ModelViewSet):
    queryset = gaming.objects.all()
    serializer_class = gamingSerializer

class devicesViewSet(ModelViewSet):
    queryset = devices.objects.all()
    serializer_class = devicesSerializer

class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer