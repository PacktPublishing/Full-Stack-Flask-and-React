class Attendee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
	last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    phone = db.Column(db.String(20))
    job_title = db.Column(db.String(120))
    company_name = db.Column(db.String(120))
    company_size = db.Column(db.String(50))

