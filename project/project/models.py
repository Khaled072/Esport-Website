from django.db import models

class Device(models.Model):
    name = models.CharField(max_length=100)
    count = models.IntegerField(default=4)

    def str(self):
        return self.name
