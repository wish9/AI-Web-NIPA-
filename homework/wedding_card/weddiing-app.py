from flask import Flask, request, jsonify, render_template_string, render_template
import pymysql
import os

app = Flask(__name__)

def get_db_connection():
    pw = os.getenv('DB_PASSWORD')
    conn = pymysql.connect(host='localhost', user='root', password=pw, db='comments', charset='utf8')
    return conn

@app.route('/comments', methods=['GET'])
def get_comments():
    conn = get_db_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT name, comment FROM comment')
    comments = cursor.fetchall()
    conn.close()
    return jsonify(comments)

@app.route('/comments', methods=['POST'])
def save_comment():
    name = request.form['name']
    comment = request.form['comment']
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO comment (name, comment) VALUES (%s, %s)', (name, comment))
    conn.commit()
    conn.close()
    return jsonify({'msg': 'Comment added successfully!'})

@app.route('/')
def index():
    google_maps_key = os.getenv('GOOGLE_MAPS_KEY')  # 환경 변수에서 키 값 가져오기
    return render_template('index.html', google_maps_key=google_maps_key)

if __name__ == '__main__':
    app.run(debug=True)
