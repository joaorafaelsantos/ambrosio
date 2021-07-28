from firebase_admin import messaging
import datetime


# https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages
def send(title: str, body: str):
    message = messaging.Message(
        android=messaging.AndroidConfig(
            ttl=datetime.timedelta(seconds=3600),
            priority="normal",
            notification=messaging.AndroidNotification(
                title=title,
                body=body,
            ),
        ),
        condition="'users' in topics",
    )
    messaging.send(message)
