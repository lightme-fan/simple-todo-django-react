from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    phonenumber = models.CharField(max_length=120)
    profile = models.CharField(max_length=120)

    def _str_(self):
        return self.name