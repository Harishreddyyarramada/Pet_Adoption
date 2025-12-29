from django.urls import path
from .views import all_pets, register_pet, update_pet_status ,view_users

urlpatterns = [
    path('register/', register_pet),
    path('admin/users/', view_users),
    path('admin/pets/', all_pets),
    path('admin/pets/<int:pet_id>/', update_pet_status),
]
