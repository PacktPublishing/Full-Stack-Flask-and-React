# Import flask
from flask import Flask, jsonify, request
from datetime import datetime
# Import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
# Import migrate class
from flask_migrate import Migrate
# Create a Flask instance
app = Flask(__name__)

# Add the PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:admin123@localhost:5432/bizza'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)
# Instance for migration
migrate = Migrate(app, db)

# defining endpoints


@app.route("/")
def index():

    return "Welcome to Bizza REST API Server"



@app.route("/api/v1/venues", methods=['POST'])
def add_venues():

    if request.method == 'POST':
        name = request.get_json().get('name')
        all_venues = Venue.query.filter_by(name=name).first()
        if all_venues:
            return jsonify(message="Venue name already exist!"), 409
        else:
            venue = Venue(name=name)
            db.session.add(venue)
            db.session.commit()
            return jsonify({
                'success': True,
                'venues': venue.format()
            }), 201
# retrieve all venues endpoint


@app.route("/api/v1/venues", methods=['GET'])
def retrieve_venues():
    if request.method == 'GET':
        all_venues = Venue.query.all()
        if all_venues:
            return jsonify({
                'success': True,
                'venues': [venue.format() for venue in all_venues]
            }), 200
        return jsonify(message="No venue record found"), 404


@app.route("/api/v1/venues/<int:id>", methods=['GET'])
def retrieve_venue(id):
    if request.method == 'GET':
        venue = Venue.query.filter(Venue.id == id).first()
        if venue:
            return jsonify({
                'success': True,
                'venue': venue.format()
            }), 200

        return jsonify(message="Record id not found"), 404


@app.route("/api/v1/venues/<int:id>", methods=['PUT'])
def update_venue(id):
    if request.method == 'PUT':
        name = request.get_json().get('name')
        venue = Venue.query.get(id)
        if not venue:
            return jsonify(message='Venue record not found'), 404
        venue.name = name
        db.session.commit()
    return jsonify({
        'success': True,
        'updated venue': venue.format()
    }), 200


@app.route('/venues/<int:id>', methods=['DELETE'])
def remove_venue(id):
    venue = Venue.query.filter_by(id=id).first()
    if venue:
        db.session.delete(venue)
        db.session.commit()
        return jsonify(
            {'succes': True,
             'message': 'You deleted a venue',
             'deleted': venue.format()
             }

        ), 202

    else:
        return jsonify(message="That venue does not exist"), 404


@app.route("/api/v1/speakers/")
def speakers():
    firstname = request.args.get("firstname")
    lastname = request.args.get("lastname")
    if firstname is not None and lastname is not None:
        return jsonify(message="The speaker's fullname :" + firstname+" "+lastname)
    else:
        return jsonify(message="No query parameters in the url")

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


class Venue(db.Model):
    __tablename__ = 'venues'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
	
  def format(self):
        return {
            'id': self.id,
            'name': self.name,

        }
