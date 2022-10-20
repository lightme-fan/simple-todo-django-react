from email.policy import default
from time import timezone
from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Todo(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    created_date = models.TextField(default='19/10/2022')
    finished_date = models.TextField(default='')
    isDone = models.BooleanField(default=False)

    def _str_(self):
        return self.name