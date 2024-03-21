# pulumi-ig-group

## Setting up repo

This repo was set up by running

``````
mkdir pulumi-ig-group
cd pulumi-ig-group
pulumi new typescript -y
``````

## pulumi version

``````
pulumi version
v3.99.0
``````


## Running IAC changes

### Setting up project


``````
gcloud auth application-default login
``````


## Selecting stacks

Project has two stacks, `staging` and `production`. They are inited with

`````
pulumi stack init staging
pulumi stack init production
`````

You can switch between the stacks with

`````
pulumi stack select staging
pulumi stack select production
`````

You might need to run following in both stacks.

``````
pulumi config set gcp:project ig-pulumi-2024
``````

### Running changes


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
