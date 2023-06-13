from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app import User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bizza.db'
db = SQLAlchemy(app)

# Function to load data into db


def load_data():
    data = [
        {'username': 'leanne', 'name': 'Leanne Graham', 'email': 'Sincere@april.biz'},
        {'username': 'ervin', 'name': 'Ervin Howell', 'email': 'Shanna@melissa.tv'},
        {'username': 'clementine ', 'name': 'Clementine Bauch',
            'email': 'Nathan@yesenia.net'},
        {'username': 'patricia', 'name': 'Patricia Lebsack', 'email': 'Julianne.OConner@kory.org'},]

    # Insert data into the database using your models
    with app.app_context():
        for item in data:
            user = User(username=item['username'],
                        name=item['name'], email=item['email'])
            db.session.add(user)
        db.session.commit()


# Call the function to load data
load_data()
