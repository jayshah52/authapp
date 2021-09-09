# authapp
This app uses djoser library for authentication on top of Django Rest Framework.
For setup:
cd backend
pip install requirements.txt
To start the server:
python manage.py runserver

Make sure your Vue App is also running
The Django App is only used for utilising APIs
The app takes care of the following:
Registration with activation email 
Login/logout with access token
Forgot password and change password
APIs called are:
api/v1/token/login for logging in which returns an access token
api/v1/users/ for registration
/api/v1/users/activation/ for activation 
/api/v1/users/reset_password/ for forgot password
/api/v1/users/set_password/ for change password



