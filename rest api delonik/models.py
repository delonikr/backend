from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    nim = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    skill = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "nim": self.nim,
            "name": self.name,
            "email": self.email,
            "age": self.age,
            "skill": self.skill
        }
