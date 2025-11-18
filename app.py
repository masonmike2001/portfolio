from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")

@app.route('/portfolio')
def work():
    return render_template("portfolio.html")


@app.route('/bio')
def bio():
    return render_template("bio.html")





