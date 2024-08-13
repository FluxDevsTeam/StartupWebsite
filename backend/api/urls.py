from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('projects', views.ApiProjects, basename='projects')

urlpatterns = [
    path("", include(router.urls)),
]