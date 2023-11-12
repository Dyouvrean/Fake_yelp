from flask import Flask

app = Flask(__name__)


@app.route("/members")
def members():
    return {"members":["member1","m2","m3"]}


if __name__ == "__main__":
    app.run(debug=True)