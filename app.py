from flask import Flask,render_template, redirect,request
import mysql.connector

app=Flask(__name__)
app.secret_key='matdan1234'

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login",methods=["POST"])
def login():
    return render_template("login.html")
    if request.method=="POST":

        name=request.form.get("name")
        voter_id=request.form.get("voter_id")
        adhar=request.form.get("adhar")
        password=request.form.get("password")
    