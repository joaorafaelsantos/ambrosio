<p align="center">
    <img src="./ambrosio.png" width="128">
</p>

#### Ambrosio is a tool to trigger notifications for your Android device.

<hr>

## Mobile App

```shell
cd app
yarn install
yarn start
yarn run android
```

## Notification Service

```shell
cd service
poetry install
poetry run python src/main.py
```

## Notes
- It's required to create a Firebase project (Cloud Messaging).
- ``SENDER_ID`` (env file) is available in Project Settings > Cloud Messaging (Firebase).
- ``google-services.json`` is available to download in Project Settings > General (Firebase). The file should be located at ``ambrosio/app/android/app``.
- ``firebase_sdk_credentials.json`` is available to download in Project Settings > Service Accounts (Firebase). The file should be located at ``ambrosio/service``.
- Always run the app on a real device. 
## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, João Santos