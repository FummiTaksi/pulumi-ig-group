# pulumi-ig-group

## Setting up repo

This repo was set up by running

``````
mkdir pulumi-ig-group
cd pulumi-ig-group
pulumi new typescript -y
``````


## Running IAC changes

### Setting up project


``````
gcloud auth application-default login
``````

``````
pulumi config set gcp:project PROJECT_ID
``````

### Running changes


Replace the project_id value in  `Pulumi.dev.yaml` with correct gcp project_id.

Preview your changes

``````
pulumi preview
``````

If everything looks OK, then run

``````
pulumi up
``````

### Deleting resources

Delete resources with

``````
pulumi destroy
``````


### Install dependencies

Prerequisities: yarn


Install all dependencies with

`````
yarn install --frozen-lockfile
`````
