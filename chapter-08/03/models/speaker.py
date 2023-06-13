class Speaker(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    bio = db.Column(db.String(240))
    photo = db.Column(db.String(120))
    contact_info = db.Column(db.String(120))
    user_extras_id = db.Column(db.Integer, db.ForeignKey('user_extras.id'))
    user_extras = db.relationship('UserExtras', backref=db.backref('speakers', lazy=True))
