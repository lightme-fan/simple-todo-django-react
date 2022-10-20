from email.policy import default
from time import timezone
from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Todo(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    isDone = models.BooleanField(default=False)

    def _str_(self):
        return self.name    