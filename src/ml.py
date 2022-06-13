from flask import Flask, jsonify, request
import flask_cors
from demo import get_response


#origins = "http://localhost:19006"
app = Flask(__name__)
flask_cors.CORS(app)
@app.route("/main", methods=['POST'] , strict_slashes=False)
@flask_cors.cross_origin(origins = "http://localhost:19006")
def main():
    reply = get_response(request.json['query'])
    response = jsonify({'reply': reply})

    return response
if __name__ == "__main__":
    app.run( host="127.0.0.1",port="5000",debug=True)
