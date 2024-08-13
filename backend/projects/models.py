from django.db import models
from django.utils import timezone

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=2000)
    more_details = models.TextField(blank=True, null=True)
    link = models.CharField(max_length=1000,blank=True, null=True)
    date = models.DateField(default=timezone.now)
    image = models.ImageField(upload_to='image')

    def __str__(self):
        return self.name


class ProjectImages(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    images = models.ImageField(upload_to='images', default='', null=True, blank=True)

    def __str__(self):
        return f"Image for {self.project.name}"
