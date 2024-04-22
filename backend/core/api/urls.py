
from rest_framework.routers import DefaultRouter
from gaming.api.urls import gaming_router, devices_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(gaming_router.registry)

router.registry.extend(devices_router.registry)

urlpatterns = [
    path('', include(router.urls))
]