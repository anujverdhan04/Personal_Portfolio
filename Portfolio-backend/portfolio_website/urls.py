from django.urls import path
from .views import ProjectListView, InternshipListView, SkillListView,ExampleView

urlpatterns = [
    path('api/projects/', ProjectListView.as_view(), name='project-list'),
    path('api/internships/', InternshipListView.as_view(), name='internship-list'),
    path('api/skills/', SkillListView.as_view(), name='skill-list'),
    path('api/example/', ExampleView.as_view(), name='example_view'),
]
