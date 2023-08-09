from flask import Flask, render_template, request
from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt()

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        password = request.form.get("password")
        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        return render_template("index.html", password_hash=password_hash)
    else:
        return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    password = request.form.get("password")
    password_hash = request.form.get("password_hash")

    if bcrypt.check_password_hash(password_hash, password):
        return "Login successful!"
    else:
        return "Invalid password."

if __name__ == "__main__":
    app.run(debug=True)
