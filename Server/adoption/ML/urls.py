# pets/urls.py
from django.urls import path
from .views import find_pet_view

urlpatterns = [
    path("find-pet/", find_pet_view, name="find_pet_api"),
]
