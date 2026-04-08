from flask import Flask,render_template, redirect
import mysql.connector

app=Flask(__name__)
app.secret_key='matdan1234'

@app.route("/")
def index():
    return render_template("index.html")