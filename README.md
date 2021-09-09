# authapp
This app uses djoser library for authentication on top of Django Rest Framework. <br>
For setup: <br>
cd backend <br>
pip install requirements.txt <br>
To start the server: <br>
python manage.py runserver <br>

Make sure your Vue App is also running <br>
The Django App is only used for utilising APIs <br>
The app takes care of the following: <br>
Registration with activation email  <br>
Login/logout with access token <br>
Forgot password and change password <br>
APIs called are: <br>
api/v1/token/login for logging in which returns an access token <br>
api/v1/users/ for registration <br>
/api/v1/users/activation/ for activation  <br>
/api/v1/users/reset_password/ for forgot password <br>
/api/v1/users/set_password/ for change password <br>



