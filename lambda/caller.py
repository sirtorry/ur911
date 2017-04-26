
import boto3
import json
import requests
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse

def call_police(event, context):
    # Your Account SID from twilio.com/console
    account_sid = ""
    # Your Auth Token from twilio.com/console
    auth_token = ""

    client = Client(account_sid, auth_token)

    x = 0
    while x!= -1:
        incoming = client.messages.list()[x]
        number = str(incoming.from_)
        x += 1
        if number != '+12025591352':
            x = -1

    number = str(incoming.from_)
    readNum = ''
    for item in number[2:]:
        readNum += ' ' + item
    
    message = str(incoming.body) + ' - message received from' + readNum

    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Response>\n\t<Say>' + message + '</Say>\n</Response>'

