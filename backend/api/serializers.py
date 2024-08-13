from rest_framework import serializers
from projects.models import *


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImages
        fields = ['images']


class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)
    upload_images = serializers.ListField(
        child=serializers.ImageField(max_length=1000000, allow_empty_file=False, use_url=False),
        write_only=True
    )

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'more_details', 'link', 'date', 'image', 'upload_images', 'images']

    def to_representation(self, instance):
        # Override the to_representation method to return size as a list of strings
        representation = super().to_representation(instance)
        representation['images'] = [name['images'] for name in representation['images']]
        return representation

    def create(self, validated_data):
        uploaded_images = validated_data.pop('uploaded_images')
        project = Project.objects.create(**validated_data)
        for image in uploaded_images:
            ProjectImages.objects.create(project=project, images=image)
        return Project
