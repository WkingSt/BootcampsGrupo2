from flask import Flask, request
import requests
import pandas as pd

app = Flask (__name__)

@app.route('/consulta_json', methods = ['GET'])
def consulta_json():
    end_point = "data.json"
    response = requests.get(end_point)
    return response.json()

