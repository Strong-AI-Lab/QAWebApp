# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
#
#   Organisation: Broad AI Lab, University of Auckland
#   Author: Ziqi Wang
#   Date: 2021-05-11
#
# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import json
import os
import sys
import time
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + '/../')

from flask import Flask, render_template, request, jsonify
from nltk import tokenize
from dfgn import predict

app = Flask(__name__)

def paras_to_sentences(context):
    paras = [p for p in context.split('\n') if len(p.strip()) > 0]
    sentences = []
    para_index = 0
    for p in paras:
        sentences.append(['para_' + str(para_index), tokenize.sent_tokenize(p)])
        para_index += 1

    return sentences

def construct_model_data(question_id, question, context):
    model_data = {}
    model_data['_id'] = question_id
    model_data['question'] = question
    model_data['context'] = paras_to_sentences(context)

    return [model_data]

def extract_answer_from_model_output(model_data_json, raw_output, question_id):
    answer = raw_output['answer'][question_id]
    supports_raw = raw_output['sp'][question_id]
    supports = []
    result = {}

    # TODO: can be optimised
    for support_para in supports_raw:
        for para in model_data_json[0]['context']:
            if support_para[0] == para[0]:
                supports.append(para[1][support_para[1]])
                break

    result['answer'] = answer
    result['supports'] = supports
    return result

def int_with_default(input, default=0):
    try:
        i = int(input)
    except ValueError:
        i = default
    return i

def is_port_occupied(port):
    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        result = s.connect_ex(('localhost', port))
        if result == 0:
            print('WARNING MESSAGE: port ' + str(port) + ' is in use.')
        return result == 0


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    question_id = request.json['id']
    question = request.json['question']
    context = request.json['context']

    model_data_json = construct_model_data(question_id, question, context)

    raw_output = predict(model_data_json)

    answer = extract_answer_from_model_output(model_data_json, raw_output, question_id)

    return jsonify(answer)

if __name__ == "__main__":
    port_num = -1
    while port_num < 0 or port_num > 65535 or is_port_occupied(port_num):
        port_num = int_with_default(input('Please specify a port number (0 - 65535): '), -1)

    app.run(host="0.0.0.0", port=port_num, threaded=True)