from flask import Flask, request, jsonify
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users])

@app.route('/users/<int:nim>', methods=['GET'])
def get_user(nim):
    user = User.query.get_or_404(nim)
    return jsonify(user.to_dict())

@app.route('/users/<int:nim>', methods=['PUT'])
def update_user(nim):
    user = User.query.get_or_404(nim)
    data = request.get_json()
    for key, value in data.items():
        setattr(user, key, value)
    db.session.commit()
    return jsonify(user.to_dict())

@app.route('/users/<int:nim>', methods=['DELETE'])
def delete_user(nim):
    user = User.query.get_or_404(nim)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted"})

if __name__ == '__main__':
    print("API is running at: http://127.0.0.1:5000/users")
    app.run(debug=True)
