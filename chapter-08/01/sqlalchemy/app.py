from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, template_folder='templates')

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///bizza.db"
db = SQLAlchemy(app)


@app.route('/users')
def get_users():
    users = User.query.all()
    return render_template('users.html', users=users)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(55), unique=True)
    name = db.Column(db.String(55), unique=False)
    email = db.Column(db.String(100), unique=True)

    def __repr__(self):
        return '<User {}>'.format(self.name)
