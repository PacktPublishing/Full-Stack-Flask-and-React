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
      

class EventRegistration(db.Model):
    __tablename__ = 'attendees'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), unique=True, nullable=False)
    last_name = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(100), unique=True, nullable=False)
    job_title = db.Column(db.String(100), unique=True, nullable=False)
    company_name = db.Column(db.String(100), unique=True, nullable=False)
    company_size = db.Column(db.String(50), unique=True, nullable=False)
    subject = db.Column(db.String(250), nullable=False)

    def format(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'job_title':self.job_title,
            'company_name': self.company_name,
            'company_size': self.company_size,
            'subject': self.subject
        }
@app.route("/api/v1/events-registration", methods=['POST'])
def add_attendees():
    if request.method == 'POST':
        first_name = request.get_json().get('first_name')
        last_name = request.get_json().get('last_name')
        email = request.get_json().get('email')
        phone = request.get_json().get('phone')
        job_title = request.get_json().get('job_title')
        company_name = request.get_json().get('company_name')
        company_size = request.get_json().get('company_size')
        subject = request.get_json().get('subject')

        if first_name and last_name and email and phone and subject:
            all_attendees = EventRegistration.query.filter_by(
                email=email).first()
            if all_attendees:
                return jsonify(message="Email address already exists!"), 409
            else:
                new_attendee = EventRegistration(
                    first_name = first_name,
                    last_name = last_name,
                    email = email,
                    phone = phone,
                    job_title = job_title,
                    company_name = company_name,
                    company_size = company_size,
                    subject = subject
                )
                db.session.add(new_attendee)
                db.session.commit()
                return jsonify({
                    'success': True,
                    'new_attendee': new_attendee.format()
                }), 201
        else:
            return jsonify({'error': 'Invalid input'}), 400


