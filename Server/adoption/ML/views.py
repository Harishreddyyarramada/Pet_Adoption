import numpy as np
import cv2
import os

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .ml import find_pet  


@csrf_exempt 
def find_pet_view(request):
    if request.method != "POST":
        return JsonResponse({"error": "Only POST allowed"}, status=405)

    if "image" not in request.FILES:
        return JsonResponse({"error": "No image file provided"}, status=400)

    file = request.FILES["image"]

    # Read uploaded image into numpy array
    file_bytes = np.frombuffer(file.read(), np.uint8)
    bgr_img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    if bgr_img is None:
        return JsonResponse({"error": "Could not read image"}, status=400)

    rgb_img = cv2.cvtColor(bgr_img, cv2.COLOR_BGR2RGB)

    # Call ML function
    result_text, matched_img, matched_path = find_pet(rgb_img)

    # (Option 1) Just return path relative to project root
    # Convert matched_path to something frontend can use (e.g. static or media path)
    # For demo, assume your dataset is under STATIC or MEDIA.
    rel_path = os.path.relpath(matched_path, settings.BASE_DIR)

    return JsonResponse({
        "result": result_text,
        "matched_image_path": rel_path,
    })
