# Import flask
from flask import Flask
from datetime import datetime
# Import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
# Import migrate class
from flask_migrate import Migrate
# Create a Flask instance
app = Flask(__name__)

# Add the PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:admin123@localhost:5432/bizza'

# Initialize the database
db = SQLAlchemy(app)
# Instance for migration
migrate = Migrate(app, db)

# User model definition


class User(db.Model):

    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True, nullable=False)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    roles = db.Column(db.String(100))
    is_active = db.Column(db.Boolean, default=True)
    is_superuser = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow())

    def __repr__(self):

        return '<User %r>' % self.username


class Speaker(db.Model):

    __tablename__ = 'speakers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.Text, nullable=False)
    photo = db.Column(db.String(100))
    contact_info = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.user_id'), nullable=False)
    user = db.relationship(
        'User', backref=db.backref('speakers', uselist=False))

    def __repr__(self):

        return f"Speaker('{self.name}', '{self.bio}', '{self.photo}', '{self.contact_info}')"


class EventRegistration (db.Model):

    __tablename__ = ' attendees '

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    phone = db.Column(db.String(20))
    job_title = db.Column(db.String(120))
    company_name = db.Column(db.String(120))
    company_size = db.Column(db.String(120))
    subject = db.Column(db.String(120))


def format(self):

    return {
        'id': self.id,
        'first_name': self.first_name,
        'last_name': self.last_name,
        'email': self.email,
        'phone': self.phone,
        'job_title': self.job_title,
        'company_name': self.job_title,
        'company_size': self.company_size,
        'subject': self.subject

    }
