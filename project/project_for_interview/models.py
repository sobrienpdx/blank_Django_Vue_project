from django.db import models
from datetime import datetime
from django.utils import timezone

# Create your models here.


class Note(models.Model):
    text = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return self.text
