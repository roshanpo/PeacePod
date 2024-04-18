from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Create your models here.
    
class Music(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=300)
    category = models.CharField(max_length=100)
    music_file = models.FileField(upload_to='music/All')
    keywords = models.CharField(max_length=500, null=False)


class CustomUser(AbstractBaseUser):
    # first_name = models.CharField(max_length=30)
    # last_name = models.CharField(max_length=30)
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    username = models.CharField(max_length=30, unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Query(models.Model):
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

#     objects = CustomUserManager()

#     def __str__(self):
#         return self.email

# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, username, password=None):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, username=username)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user


# class Video(models.Model):
#     id = models.AutoField(primary_key=True)
#     title = models.CharField(max_length=100)
#     category = models.CharField(max_length=100)
#     video_file = models.FileField(upload_to='videos/')

#     def __str__(self):
#         return self.title