---
title: Flask
date: "2022-07-14T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to use flask in python
---

First install:
```
pip install flask
```

```python
from flask import Flask, render_template, make_response, jsonify, request

app = Flask(__name__, template_folder='templates')

camera = cv2.VideoCapture(0)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/json_example')
def json_example():
  return { 'example' : 'test' }

@app.route('/users/<user_id>', methods = ['GET', 'POST', 'DELETE'])
def users(user_id):
  if request.method == 'GET':
    return { 'user' : { 'id' : user_id } }
  if request.method == 'POST':
    data = request.form 

  return make_response(jsonify({ 'error': 'Not Found'}), 404)

if __name__ == "__main__":
    app.run(debug=True)
```
