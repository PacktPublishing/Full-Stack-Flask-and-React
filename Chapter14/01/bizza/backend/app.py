from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

   
    app.config.from_object('config.Config')

  
    db.init_app(app)

)
    from .blueprints.attendee_blueprint import attendee_bp
    app.register_blueprint(attendee_bp)

    return app
