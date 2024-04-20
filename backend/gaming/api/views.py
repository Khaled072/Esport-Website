from rest_framework.viewsets import ModelViewSet
from ..models import gaming
from .serializers import gamingSerializer


class gamingViewSet(ModelViewSet):
    queryset = gaming.objects.all()
    serializer_class = gamingSerializer
