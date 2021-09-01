# Instruction of Running the QA Web App

## Step 1 (Go to python virtual environment folder): 
```
cd /data/zwan499
```


## Step 2 (Activate python virtual environment): 
```
source venv/dfgn/bin/activate
```


## Step 3 (Go to project folder): 
```
cd /data/zwan499/DFGN-WebApp/demo
```


## Step 4 (Run project):
Run the web application with following command:
```
python app.py
```
NOTICE 1: nltk requires additional data for the sentence parsing task, please run the Python interpreter and type the following commands OR act according to the instruction of the error message:  
```
>>> import nltk
>>> nltk.download('punkt')
```
Alternatively, run this command in the Terminal:
```
python -m nltk.downloader punkt
```
NOTICE 2: the server uses port 3000 by default. However, if the port is in use, the application will ask you to specifiy another port number in the range (0 - 65535).


## Step 5 (Run app on browser):
Open any browser, type in the link (with the default or specified port number) and hit "Enter"
`localhost:3000`
OR
`127.0.0.1:3000`

## Appendix
### Python Package List (packages from google can be ignored)
```
beautifulsoup4           4.9.3
bidict                   0.21.2
boto3                    1.17.53
botocore                 1.20.53
cachetools               4.2.2
certifi                  2020.12.5
chardet                  4.0.0
click                    8.0.1
Flask                    2.0.1
Flask-SocketIO           5.1.0
google                   3.0.0
google-api-core          1.28.0
google-api-python-client 2.5.0
google-auth              1.30.1
google-auth-httplib2     0.1.0
google-cloud             0.34.0
google-cloud-speech      2.4.0
googleapis-common-protos 1.53.0
grpcio                   1.38.0
httplib2                 0.19.1
idna                     2.10
itsdangerous             2.0.1
Jinja2                   3.0.1
jmespath                 0.10.0
joblib                   1.0.1
libcst                   0.3.19
MarkupSafe               2.0.1
mypy-extensions          0.4.3
nltk                     3.6.2
numpy                    1.20.2
packaging                20.9
pandas                   1.2.4
Pillow                   8.2.0
pip                      21.0.1
pkg-resources            0.0.0
proto-plus               1.18.1
protobuf                 3.17.1
pyasn1                   0.4.8
pyasn1-modules           0.2.8
pyparsing                2.4.7
python-dateutil          2.8.1
python-engineio          4.2.0
python-socketio          5.3.0
pytz                     2021.1
PyYAML                   5.4.1
regex                    2021.4.4
requests                 2.25.1
rsa                      4.7.2
s3transfer               0.3.7
setuptools               56.0.0
six                      1.15.0
soupsieve                2.2.1
torch                    1.4.0
torchvision              0.5.0
tqdm                     4.60.0
typing-extensions        3.10.0.0
typing-inspect           0.6.0
uritemplate              3.0.1
urllib3                  1.26.4
Werkzeug                 2.0.1
wheel                    0.36.2
```