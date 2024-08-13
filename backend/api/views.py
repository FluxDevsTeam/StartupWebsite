from rest_framework import viewsets
from .permissions import IsAdminOrReadOnly
from projects.models import Project
from .serializers import ProjectSerializer


class ApiProjects(viewsets.ModelViewSet):
    permission_classes = [IsAdminOrReadOnly,]
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()