"""
URL configuration for project project.


The `urlpatterns` list routes URLs to views. For more information please see:
   https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
   1. Add an import:  from my_app import views
   2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
   1. Add an import:  from other_app.views import Home
   2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
   1. Import the include() function: from django.urls import include, path
   2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, re_path
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from . import views  # Import your views module
from .views import decrement_count
from django.contrib import admin
from django.urls import path, include

from django.http import HttpResponse
from django.urls import path
from django.contrib import admin
from .views import register  # Assuming the view is in the current directory


urlpatterns = [
    path('login', views.login),  # Map the root URL to the 'home' view function
    path('registers/', register, name='register'),  # Map the URL endpoint to the register view
    path('test_token/',views.test_token),
    path('decrement/<str:device_name>/', views.decrement_count, name='decrement_count'),
    path('get_all_device_counts',views.get_all_device_counts),
    path('admin/', admin.site.urls),
    path('admin_login/', views.admin_login),
]
'''
from django.http import HttpResponse
from django.urls import path
from django.contrib import admin

def home_view(request):
    return HttpResponse("Welcome to the homepage!")  # Example response for the root URL

urlpatterns = [
    path('admin/', admin.site.urls),  # Keep existing patterns
    # Additional URL patterns...
]
'''

