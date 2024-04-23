from django.db import models

from datetime import datetime

# Create your models here.

class gaming(models.Model):
    Name = models.CharField(max_length=50)
    
    device = models.CharField(max_length=20)
    status = models.CharField(max_length=20)
    time = models.DateTimeField(auto_now_add=True)
    position = models.IntegerField(default = 0)

    def __str__(self):
        return f"Gaming: {self.Name}"

class devices(models.Model):
    deviceName = models.CharField(max_length=50)
    numDevice = models.IntegerField()

    def __str__(self):
        return f"Devices: {self.deviceName}"


class Users(models.Model):
    email = models.EmailField(max_length=50, default = 'johndoe@gmail.com')
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return f"Users: {self.username}"
