import firebase_admin

import scheduler
import notification

# https://firebase.google.com/docs/admin/setup#python
firebase_admin.initialize_app(
    firebase_admin.credentials.Certificate("firebase_sdk_credentials.json")
)


# Action that will be dispatched in the scheduler job (change the function body to fit your use case)
def action():
    notification.send(title="Change", body="Lorem ipsum...")
    scheduler.shutdown()


# Set scheduler job that dispatches an action based on a trigger condition
scheduler.dispatch(action, seconds=5)
