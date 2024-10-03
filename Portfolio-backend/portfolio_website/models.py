from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField(blank=True, null=True)
    skills = models.TextField(default="")  


    def __str__(self):
        return self.title

class Internship(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    duration = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.role} at {self.company}"    
    
class Skill(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name    