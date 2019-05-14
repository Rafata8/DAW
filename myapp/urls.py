from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    # path('login/', views.login, name='login'),
    path('pelis/', views.pelis, name='pelis'),
    path('administrar_pelis/', views.administrar_pelis, name='administrar_pelis'),
    path('administrar_usuarios/', views.administrar_usuarios, name='administrar_usuarios'),
    path('crear_pelicula/', views.crear_pelicula, name='crear_pelicula'),
    path('crear_usuario/', views.crear_usuario, name='crear_usuario'),
    path('my_login/', views.my_login, name='my_login'),
    path('my_logout/', views.my_logout, name='my_logout')
    ]