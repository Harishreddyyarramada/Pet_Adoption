# 🐾 Pet Adoption – Full Stack Project Setup Guide

This document explains how to clone the repository and run both the frontend (client) and backend (server) locally.

--------------------------------------------------
Prerequisites
--------------------------------------------------
- Git
- Node.js (LTS)
- Python 3.10+
- pip (comes with Python)

--------------------------------------------------
Clone the Repository
--------------------------------------------------
```bash
git clone https://github.com/Harishreddyyarramada/Pet_Adoption.git
cd Pet_Adoption
```
--------------------------------------------------
Frontend Setup (Client)
--------------------------------------------------
# Open Terminal 1
```bash
cd Client
npm install
npm run dev
```

# Frontend URL
http://localhost:5173

Note:
- node_modules is ignored using .gitignore
- Frontend dependencies are managed via package.json

--------------------------------------------------
Backend Setup (Server)
--------------------------------------------------
# Open Terminal 2
cd Server

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# Install backend dependencies
pip install -r requirements.txt

# Backend URL
http://127.0.0.1:8000/

--------------------------------------------------
Important Notes
--------------------------------------------------
- venv/, node_modules/, and .env are excluded from Git
- Each developer must create their own virtual environment
- Backend dependencies are listed in requirements.txt
- Frontend dependencies are listed in package.json

--------------------------------------------------
Environment Variables (.env)
--------------------------------------------------
Create a `.env` file at the following path:

Server/adoption/.env

Add the following environment variables:
```bash
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_NAME=pet_rescue_db
DATABASE_USER=root
DATABASE_PASSWORD=yourpassword
DATABASE_HOST=localhost
DATABASE_PORT=3306
```
Notes:
- Do NOT commit the `.env` file to GitHub
- The `.env` file is ignored using `.gitignore`
- Replace values with your local credentials

--------------------------------------------------
Database Migrations (Required)
--------------------------------------------------
After creating the `.env` file and configuring the database credentials,
run the following commands to apply migrations:
```bash
cd Server/adoption
python manage.py makemigrations
python manage.py migrate
```
Notes:
- Migrations must be run before starting the server for the first time
- This step initializes the database schema

# Run Django server
```bash
cd adoption
python manage.py runserver
```
--------------------------------------------------
Best Practice
--------------------------------------------------
This project follows industry standards by excluding virtual environments
and dependency folders from version control and using dependency files
to ensure reproducible setups.
