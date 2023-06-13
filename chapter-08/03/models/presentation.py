class Presentation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    description = db.Column(db.String(240))
    date = db.Column(db.String(120))
    time = db.Column(db.String(120))
    duration = db.Column(db.String(120))
    location = db.Column(db.String(120))
    speaker_id = db.Column(db.Integer, db.ForeignKey('speaker.id'))
    speaker = db.relationship(
        'Speaker', backref=db.backref('presentations', lazy=True))
