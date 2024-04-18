from django.shortcuts import render

# Create your views here.
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Music
from django.contrib.auth.models import User
from .serializers import MusicSerializer, UserSerializer
from chatbot.chat import get_response
from Music_recommender import recommendation
from django.http import JsonResponse
import logging
import os

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate

logger = logging.getLogger(__name__)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)


        token['name'] = user.username
        # ...

        return token
    def validate(self, attrs):
        credentials = {
            'username': attrs.get('username'),
            'password': attrs.get('password')
        }

        if not self.user_exists(credentials['username']):
            raise AuthenticationFailed('Username does not exist')

        user = authenticate(**credentials)
        if user:
            return super().validate(attrs)
        else:
            raise AuthenticationFailed('Incorrect Password')

    def user_exists(self, username):
        if User.objects.filter(username=username).exists():
            return True
        return False

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# @api_view(['POST'])
# def create_user(request):
#     if request.method == 'POST':
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        # Check if the username already exists
        if User.objects.filter(username=request.data.get('username')).exists():
            return Response({'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the email already exists
        if User.objects.filter(email=request.data.get('email')).exists():
            return Response({'message': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_user(request, user_id):
        user = User.objects.get(id=user_id)
        # music_file_path = music.music_file.path
        user.delete()
        return Response("User Deleted")

# @api_view(['GET'])
# def get_video(request, video_name):
#     video = get_object_or_404(Video, title=video_name)
#     video_path = video.video_file.path
#     return FileResponse(open(video_path, 'rb'), content_type='video/mp4')


@api_view(['GET'])
def get_music(request, music_name):
    print(music_name)
    music = get_object_or_404(Music, title=music_name)
    music_path = music.music_file.path
    return FileResponse(open(music_path, 'rb'), content_type='audio/mp3')

# @api_view(['GET'])
# def allmusic(request):
#     music_folder_path = os.path.join(os.path.dirname(__file__), '..','media/music/all')  # Path to your music folder
#     music_files = [file for file in os.listdir(music_folder_path) if file.endswith('.mp3')]  # Filter only .mp3 files

#     music_titles = [os.path.splitext(file)[0] for file in music_files]
#     return Response({'allmusic': music_titles})

@api_view(['GET'])
def category(request, category):
    music = Music.objects.filter(category=category)
    titles = [item.title for item in music]  # Extracting titles from queryset
    return Response(titles)
    # categories = category_name
    # music_folder_path = os.path.join(os.path.dirname(__file__), '..','media/music/%s'%(categories))  # Path to your music folder
    # music_files = [file for file in os.listdir(music_folder_path) if file.endswith('.mp3')]  # Filter only .mp3 files
    # return Response({'category': music_files})

@api_view(['GET'])
def allmusic(request):      #this is only for admin API
    music = Music.objects.all()

    # Construct a list of dictionaries, each containing the id and title of a music record
    music_data = [{'id': item.id, 'title': item.title} for item in music]

    # Return the list as a JsonResponse
    return Response(music_data)


@api_view(['GET'])
def allusers(request):      #this is only for admin API
    music = User.objects.all()

    # Construct a list of dictionaries, each containing the id and title of a music record
    user_data = [{'id': item.id, 'username': item.username, 'email':item.email} for item in music]

    # Return the list as a JsonResponse
    return Response(user_data)

@api_view(['GET'])
def all_categories(request):
    categories = Music.objects.values_list('category', flat=True).distinct()
    return Response(categories)

@api_view(['POST'])
def chat(request):
    if request.method == 'POST':
        # You can access the data sent in the request using request.data
        # Example: data = request.data.get('key_name', None)
            # Call your method or perform your logic here
            #print(request)
            logger.debug("This is a test debug message")
            logger.debug(f"Request payload: {request.data}")
            message = request.data.get('Content', '')
            result = get_response(message)

            # Return a response with a success message
            return Response({'message': 'Success', 'result': result}, status=status.HTTP_200_OK)
    # If the request method is not POST, return a method not allowed response
    return Response({'message': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def musicRecommend(request):
    if request.method == 'POST':
        # You can access the data sent in the request using request.data
        # Example: data = request.data.get('key_name', None)
            # Call your method or perform your logic here
            #print(request)
            logger.debug("This is a test debug message")
            logger.debug(f"Request payload: {request.data}")
            message = request.data.get('Content', '')
            result = recommendation(message)

            # Return a response with a success message
            return Response({'message': 'Success', 'result': result}, status=status.HTTP_200_OK)
    # If the request method is not POST, return a method not allowed response
    return Response({'message': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def upload_music(request):
    serializer = MusicSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def delete_music(request, music_id):
    try:
        music = Music.objects.get(id=music_id)
        music_file_path = music.music_file.path
        music.delete()  # Delete the music object from the database
        if os.path.exists(music_file_path):
            os.remove(music_file_path)  # Delete the music file from the file system
        return Response({'message': 'Music deleted successfully'}, status=status.HTTP_200_OK)
    except Music.DoesNotExist:
        return Response({'error': 'Music not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def update_music(request, pk):
    try:
        music = Music.objects.get(id=pk)
        music_file_path = music.music_file.path
    except Music.DoesNotExist:
        return Response({"error": "Music file not found"}, status=404)
    if os.path.exists(music_file_path):
        os.remove(music_file_path)  # Delete the music file from the file system
    serializer = MusicSerializer(music, data=request.data)
    if serializer.is_valid():
        if os.path.exists(music.music_file.path):
            return Response("Same Music Already Exists")
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)