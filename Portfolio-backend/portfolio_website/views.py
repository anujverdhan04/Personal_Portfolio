from rest_framework import viewsets
from .models import Project, Internship, Skill
from .serializers import ProjectSerializer, InternshipSerializer, SkillSerializer
from rest_framework.views import APIView
from rest_framework.response import Response



class ProjectListView(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

class InternshipListView(APIView):
    def get(self, request):
        internships = Internship.objects.all()
        serializer = InternshipSerializer(internships, many=True)
        return Response(serializer.data)

class SkillListView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)
    

class ExampleView(APIView):
    def get(self, request):
        data = {"message":""}
        return Response(data)    
