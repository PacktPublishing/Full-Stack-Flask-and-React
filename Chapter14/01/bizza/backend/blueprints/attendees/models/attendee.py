from bizza.backend.blueprints import db

class Attendee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    registration_date = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f'<Attendee {self.name}>'
