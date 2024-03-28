# message-cloud-function

Cloud function for storing messages.

## Local development

``````
yarn install --frozen-lockfile
yarn dev
``````

Server is running in `localhost:8080` waiting for POST requests with messages.

### Packaging

``````
zip -r message.zip index.js index.ts package.json
``````

then upload the `message.zip` folder to GCP bucket `pulumi-ig-group-message-cloudfunction-storage-staging` or `pulumi-ig-group-message-cloudfunction-storage-production`
