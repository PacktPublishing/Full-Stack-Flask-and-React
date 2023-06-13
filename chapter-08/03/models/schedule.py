class Schedule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(120))
    time = db.Column(db.String(120))
    presentation_id = db.Column(db.Integer, db.ForeignKey('presentation.id'))
    presentation = db.relationship(
        'Presentation', backref=db.backref('schedules', lazy=True))
