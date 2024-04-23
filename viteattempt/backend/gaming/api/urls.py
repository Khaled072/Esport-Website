from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import gamingViewSet, devicesViewSet, UsersViewSet
gaming_router = DefaultRouter()
devices_router = DefaultRouter()
Users_router = DefaultRouter()

gaming_router.register(r'gaming', gamingViewSet)

devices_router.register(r'devices', devicesViewSet)

Users_router.register(r'Users', UsersViewSet)