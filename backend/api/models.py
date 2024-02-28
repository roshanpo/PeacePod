from django.db import models

# Create your models here.

class Video(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    video_file = models.FileField(upload_to='videos/')

    def __str__(self):
        return self.title
    
class Music(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=300)
    category = models.CharField(max_length=100)
    music_file = models.FileField(upload_to='music/All')

    def __str__(self):
        return self.title