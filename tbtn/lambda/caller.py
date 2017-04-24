
import boto3
import json
import requests
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse

def call_police(event, context):
    # Your Account SID from twilio.com/console
    account_sid = "AC70b114ccd109696bfd5701a9abf3df16"
    # Your Auth Token from twilio.com/console
    auth_token = "77a81b27897d2b3a6018d29e2b3065c1"

    client = Client(account_sid, auth_token)

    incoming = client.messages.list()[1]
    message = str(incoming.body)

    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Response>\n\t<Say>' + message + '</Say>\n</Response>'

