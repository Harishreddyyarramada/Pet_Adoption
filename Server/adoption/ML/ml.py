import numpy as np
import os
import cv2
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input
from sklearn.metrics.pairwise import cosine_similarity
import tensorflow as tf

IMG_SIZE = (224, 224)
model = MobileNetV2(weights="imagenet", include_top=False, pooling="avg")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  
DATASET_PATH = os.path.join(BASE_DIR, "PetImages")   

embeddings = []
image_paths = []


def get_embedding(img_path=None, img_array=None):
    if img_path is not None:
        img = image.load_img(img_path, target_size=IMG_SIZE)
        img_array = image.img_to_array(img)
    elif img_array is not None:
        img_array = cv2.resize(img_array, IMG_SIZE)  # (H, W, 3) RGB
    else:
        raise ValueError("Provide either img_path or img_array")

    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    emb = model.predict(img_array)
    return emb.flatten()


# Pre-compute embeddings once on first import.
for root, dirs, files in os.walk(DATASET_PATH):
    for file in files:
        if file.lower().endswith((".jpg", ".png", ".jpeg")):
            full_path = os.path.join(root, file)
            try:
                emb = get_embedding(img_path=full_path)
                embeddings.append(emb)
                image_paths.append(full_path)
            except Exception as e:
                print("Error loading:", full_path, e)

embeddings = np.array(embeddings)
print("Database Loaded:", len(embeddings), "images")


def find_pet(np_image, threshold=0.80):

    # Extract embedding from numpy image
    query_emb = get_embedding(img_array=np_image).reshape(1, -1)

    # Compare with database
    sims = cosine_similarity(query_emb, embeddings)[0]
    best_index = np.argmax(sims)
    best_score = sims[best_index]

    # Load best matched image
    matched_img = cv2.imread(image_paths[best_index])
    matched_img = cv2.cvtColor(matched_img, cv2.COLOR_BGR2RGB)

    if best_score >= threshold:
        result = f"✅ PET FOUND!\nSimilarity Score: {best_score:.2f}"
        return result, matched_img, image_paths[best_index]
    else:
        result = f"❌ PET NOT FOUND.\nBest Similarity Score: {best_score:.2f}"
        return result, matched_img, image_paths[best_index]
