from django.db import models
from datetime import datetime

# Create your models here.

class gaming(models.Model):
    Name = models.CharField(max_length=50)
    redID = models.IntegerField()
    device = models.CharField(max_length=20)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Gaming: {self.Name}"

