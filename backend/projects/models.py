from django.db import models
from django.utils.text import slugify
import random
import time
# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=2000)
    details = models.TextField(blank=True, null=True)
    link = models.CharField(max_length=1000,blank=True, null=True)
    image = models.ImageField(upload_to='image')
    date = models.DateField()

    def __str__(self):
        return self.name
