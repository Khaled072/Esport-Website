
from rest_framework.routers import DefaultRouter
from gaming.api.urls import gaming_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(gaming_router.registry)

urlpatterns = [
    path('', include(router.urls))
]