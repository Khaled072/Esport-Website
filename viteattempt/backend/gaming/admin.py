from django.contrib import admin
from .models import gaming, devices, Users
# Register your models here.

admin.site.register(gaming)

admin.site.register(devices)

admin.site.register(Users)