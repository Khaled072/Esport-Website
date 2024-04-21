from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import gamingViewSet
gaming_router = DefaultRouter()

gaming_router.register(r'gaming', gamingViewSet)