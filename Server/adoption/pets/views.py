from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Pet
from .serializers import PetSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAdminUser


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def register_pet(request):
    print("Request Data:", request.data)
    serializer = PetSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Pet registered successfully. Waiting for admin approval."})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def view_users(request):
    users = User.objects.all().values('id', 'username', 'email')
    return Response(users)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def all_pets(request):
    pets = Pet.objects.all()
    serializer = PetSerializer(pets, many=True)
    return Response(serializer.data)

@api_view(['PATCH'])
@permission_classes([IsAdminUser])
def update_pet_status(request, pet_id):
    pet = Pet.objects.get(id=pet_id)
    pet.status = request.data.get("status")
    pet.save()
    return Response({"message": "Pet status updated"})
