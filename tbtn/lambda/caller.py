
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

    incoming = client.messages.list()[1]
    message = str(incoming.body)

    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Response>\n\t<Say>' + message + '</Say>\n</Response>'

