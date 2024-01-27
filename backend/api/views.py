from django.shortcuts import render

# Create your views here.
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Video, Music
from .serializers import VideoSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def get_video(request, video_name):
    video = get_object_or_404(Video, title=video_name)
    video_path = video.video_file.path
    return FileResponse(open(video_path, 'rb'), content_type='video/mp4')


@api_view(['GET'])
def get_music(request, music_name):
    music = get_object_or_404(Music, title=music_name)
    music_path = music.music_file.path
    return FileResponse(open(music_path, 'rb'), content_type='audio/mp3')