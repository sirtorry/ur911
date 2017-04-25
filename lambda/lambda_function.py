
import boto3
import json
import requests
from twilio.rest import Client

def lambda_handler(event, context):
    # Your Account SID from twilio.com/console
    account_sid = "acc_sid"
    # Your Auth Token from twilio.com/console
    auth_token = "auth_token"

    client = Client(account_sid, auth_token)

    incoming = client.messages.list()[0]
    message = str(incoming.body)
    number = str(incoming.from_)

    send(message, number[2:])

    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>'\
           '<Response><Message> Message sent.</Message></Response>'

def send(original, number):
    message = original + ' - message received from ' + number

    callCentLocs = {'Albemarle':'1111111111', 'Arlington':'2222222222'}
    callList = []
    textList = []

    r = requests.get('https://ur911-25aa5.firebaseio.com/' + number +'.json')
    if r.text == 'null':
        callCentNum = callCentLocs['Albemarle']
        callList.append(callCentNum)
    else:
        data = json.loads(r.text)
        if data['call'] == 'Yes':
            location = data['location']
            callCentNum = callCentLocs[location]
            callList.append(callCentNum)

        for item in data['contacts']:
            if data['contacts'][item]['call_or_text'] == 'Text':
                textList.append(item)
            else:
                callList.append(item)

    client = Client(account_sid, auth_token)
    for item in textList:
        client.messages.create(
            to=item,
            from_="2025591352",
            body=message
        )
    for item in callList:
        client.calls.create(
            to=item,
            from_="2025591352",
            url="http://jeki9c8nv2.execute-api.us-west-2.amazonaws.com/Call"
        )
