from decouple import config
from flask import (Flask, app, request)
host = config('host')
password = config('password')
username = config('username')
port = config('port')
database = config('database')
clientURL = config('client')
import connection 

app = Flask(__name__)

@app.route("/fetch_videos", methods=["POST"])
def fetch_videos():
    data = request.get_json()
    videos = connection.retrieve_videos(data) 
    return videos

@app.route("/fetch_creators", methods=["GET"])
def fetch_creators():
    creators = connection.retrieve_table(connection.Creators)
    return {"creators": creators}
    


