from django.db import models
from django.contrib.auth.models import User

class Pet(models.Model):
    PET_TYPE_CHOICES = [
        ('ADOPTION', 'Adoption'),
        ('LOST', 'Lost'),
    ]

    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    age = models.IntegerField()
    description = models.TextField()
    location = models.CharField(max_length=150)
    pet_type = models.CharField(max_length=10, choices=PET_TYPE_CHOICES)
    image = models.ImageField(upload_to='Pet_Uploads/')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
