git clone https://github.com/Harishreddyyarramada/Pet_Adoption.git

# 1. To run the Client Side (Frontend)
# terminal - 1
cd Pet_Adoption/client
npm install
npm run dev


# 2. To run the Backend Server
# new terminal - 2
cd Pet_Adoption/server

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt
cd adoption
python manage.py runserver
