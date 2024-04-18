from django.urls import path
from .views import get_music,chat,musicRecommend,category,all_categories,upload_music, update_music, delete_music,create_user,delete_user,allmusic,allusers, MyTokenObtainPairView


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    # path('videos/<str:video_name>/', get_video, name='get_video'),
    path('music/<str:music_name>/', get_music, name='get_music'),
    path('allmusic/', allmusic, name='allmusic'),  #only for Admin
    path('allusers/', allusers, name='allusers'),
    path('category/<str:category>/', category, name='category'),
    path('allcategories', all_categories, name='allcategories'),
    path('chat/', chat, name='chat'),
    path('musicrecommend/', musicRecommend, name='musicrecommend'),
    path('upload-music/', upload_music, name='upload-music'),
    path('update-music/<int:pk>/', update_music, name='update-music'),
    path('delete-music/<int:music_id>/', delete_music, name='delete-music'),
    path('register/', create_user, name='create-user'),
    path('delete-user/<int:user_id>/', delete_user, name='delete-user'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]