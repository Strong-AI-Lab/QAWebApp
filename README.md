# Text-based QA Web Application

Text-based QA web application is a simple template (built with HTML + JavaScript + Bootstrap 5 + Python) that allows quick set-up for presenting text-based question answering to the audiences.

![Text-based QA Web App Demo](./demo.png)

The web application handles two types of predictions, 'Examples' and 'My Input'. 'Examples' mode is used to present locally stored examples to the audiences when the prediction server/model is inaccessible or for simple showcases. 'My Input' mode requires a prediction server/model to perform real-time reasoning based on supplied context and question.

The application consists of two parts front-end and back-end. The front-end is the template itself, where the examples are stored and customised input are passed to the back-end. The back-end is the prediction server/model that performs the reasoning on the context over the given question and returns the result to the front-end web page. 

## Installation

The front-end of the web application is almost self-contained and ready for off-line running. All of the required files of the libraries are stored locally in minimised form. The only internet connection requirement is from Google font, but it will not affect the front-end from running.

The back-end requires `Flask` and `nltk`, where `Flask` is a lightweight web framework written in python and `nltk` is a toolkit for natural language processing tasks. 

- Flask: a lightweight web framework, version 2.0.1 is used in the project.  
`pip install flask==2.0.1`
- nltk: stands for Natural Language Toolkit. We use it to parse a whole chunk of string into arrays of sentences. This package is OPTIONAL if data pre-processing is not required by the prediction model. Version 3.6.2 is used in the project.   
`pip install nltk==3.6.2`  
NOTICE: nltk requires additional data for the sentence parsing task, please run the Python interpreter and type the following commands OR act according to the instruction of the error message:  
`>>> import nltk`  
`>>> nltk.download('punkt')` 

## Front-end

The front-end is built with HTML + JavaScript(jQuery v3.6.0) + Bootstrap 5 and all libraries' files have been downloaded and stored in the `/demo/static/` folder. The examples are stored in an array at the beginning of `/demo/static/index.js` in the following format:

```json
[
  {
    question: string,
    context: string,
    answer: string,
    supports: [string]
  },
  .
  .
  .
]
```

Clicking the 'My Input' button allows the user to put their own context and question. The context and question will be passed to the back-end server as a stringified JSON object in the following format once the 'Predict' button is clicked:

```json
{
  "id": string,
  "question": string,
  "context": string
}
``` 

The server sends a JSON object back to the front-end once the prediction process completes, the returned JSON object is in the following format:

```json
{
  "answer": string,
  "supports": [string]
}
```

Subsequently, the front-end renders the answer and the supporting facts (if any) at the right side of the web page.

## Back-end

Python is the programming language for the back-end. And it is built using Flask (v2.0.1), which is a lightweight web framework written in Python. For demonstration purpose, DFGN (Xiao et al., 2019), a multi-hop reasoning model, is used as the prediction model on the server. For more information regarding DFGN, please checkout [their GIT repository](https://github.com/woshiyyya/DFGN-pytorch).

`/demo/app.py` is the server's entry point and acts as the bridge between the web framework (i.e. Flask) and the prediction model (i.e. DFGN model).

The `submit()` function handles the information passed in from the front-end using the POST method. The data of the query is parsed into the following format according to the requirement of the DFGN model:

```json
[
  {
    "_id": string,
    "question": string,
    "context": [[string]]  
  },
  .
  .
  .
]
```

Then, the server parses the original input of `context` into an array of paragraphs where each paragraph consisting an array of sentences like below:

```json
[
  {
    "_id": "Question Id",
    "question": "Question of the query",
    "context": [
      ["Paragraph 1 - Sentence 1 ", "Paragraph 1 - Sentence 2", ..., "Paragraph 1 - Sentence N"],
      ["Paragraph 2 - Sentence 1 ", "Paragraph 2 - Sentence 2", ..., "Paragraph 2 - Sentence N"],
      .
      .
      .
      ["Paragraph M - Sentence 1 ", "Paragraph M - Sentence 2", ..., "Paragraph M - Sentence N"]
    ]  
  },
  .
  .
  .
]
```

If the prediction model needs a different data structure, please consider modifying the `construct_model_data()` function.

After that, the prediction model takes the parsed data and computes the result. The expected format of the result is following:

```json
{
  "answer": {
      _id: answer(string)
  }, 
  "sp": {
    _id: [
      [paragraph_id(string), sentence_index(int)],
      .
      .
      .
    ]
  }
}
``` 

The `_id` field is the original input of the question id, followed by either the answer of the question in string format under `"answer"` or an array of supporting facts in paragraph id and sentence index pair. The `extract_answer_from_model_output()` function will extract the supporting sentences from corresponding paragraphs and form an object to pass back to the front-end in the following format, which also mentioned in the front-end section:

```json
{
  "answer": string,
  "supports": [string]
}
```

The output format of the prediction model can be divergent from different models, please consider modifying the `extract_answer_from_model_output()` function for the model-specific extraction process. 