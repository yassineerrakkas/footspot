from flask import Flask, jsonify
import json

app = Flask(__name__)

def readjson(file):
    with open(file, 'r',encoding='utf-8') as f:
        data = json.load(f)
    return data

leagues = [
    'Json/en/',
    'Json/es/',
    'Json/de/',
    'Json/it/',
    'Json/fr/'
]

@app.route("/leagues")
def get_leagues():
    data = readjson('Json/topleagues.json')
    return jsonify(data)

@app.route("/standings/<int:id>/<int:year>")
def get_standings(id,year):
    id -=1
    if id >= 0 and id < len(leagues):
        data = readjson(leagues[id]+str(year)+'.json')
        return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
