from django.db import models

# Create your models here.

class gaming(models.Model):
    Name = models.CharField(max_length=50)
    redID = models.IntegerField(max_length=10)
    device = models.CharField(max_length=20)
    time = models.DateField()

    def __str__(self):
        return f"Gaming: {self.Name}"

