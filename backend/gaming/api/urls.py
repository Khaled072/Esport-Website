from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import gamingViewSet, devicesViewSet
gaming_router = DefaultRouter()
devices_router = DefaultRouter()

gaming_router.register(r'gaming', gamingViewSet)

devices_router.register(r'devices', devicesViewSet)