from django.shortcuts import render

# Create your views here.
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Video, Music
from .serializers import VideoSerializer
from chatbot.chat import get_response
import logging
import os

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

logger = logging.getLogger(__name__)

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

@api_view(['GET'])
def allmusic(request):
    music_folder_path = os.path.join(os.path.dirname(__file__), '..','media/music/all')  # Path to your music folder
    music_files = [file for file in os.listdir(music_folder_path) if file.endswith('.mp3')]  # Filter only .mp3 files
    return Response({'allmusic': music_files})

@api_view(['GET'])
def category(request, category_name):
    categories = category_name
    music_folder_path = os.path.join(os.path.dirname(__file__), '..','media/music/%s'%(categories))  # Path to your music folder
    music_files = [file for file in os.listdir(music_folder_path) if file.endswith('.mp3')]  # Filter only .mp3 files
    return Response({'category': music_files})


@api_view(['POST'])
def chat(request):
    if request.method == 'POST':
        # You can access the data sent in the request using request.data
        # Example: data = request.data.get('key_name', None)
            # Call your method or perform your logic here
            #print(request)
            logger.debug("This is a test debug message")
            logger.debug(f"Request payload: {request.data}")
            message = request.data.get('content', '')
            result = get_response(message)

            # Return a response with a success message
            return Response({'message': 'Success', 'result': result}, status=status.HTTP_200_OK)
    # If the request method is not POST, return a method not allowed response
    return Response({'message': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
