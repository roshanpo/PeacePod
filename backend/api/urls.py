from django.urls import path
from .views import get_video, get_music,chat,allmusic,category, MyTokenObtainPairView


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('videos/<str:video_name>/', get_video, name='get_video'),
    path('music/<str:music_name>/', get_music, name='get_music'),
    path('allmusic/', allmusic, name='allmusic'),
    path('category/<str:category_name>/', category, name='category'),
    path('chat/', chat, name='chat'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]