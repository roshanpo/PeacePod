from django.urls import path
from .views import get_video, get_music, MyTokenObtainPairView


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('videos/<str:video_name>/', get_video, name='get_video'),
    path('music/<str:music_name>/', get_music, name='get_music'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]