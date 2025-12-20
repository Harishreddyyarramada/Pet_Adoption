git clone https://github.com/Harishreddyyarramada/Pet_Adoption.git
cd Pet_Adoption/server

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt
cd adoption
python manage.py runserver
