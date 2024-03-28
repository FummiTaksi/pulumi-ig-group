import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();
const bucketForMessages = `pulumi-ig-group-storage-${stack}`;

new gcp.storage.Bucket(bucketForMessages, {
  name: bucketForMessages,
  location: "EU",
  forceDestroy: true,
  uniformBucketLevelAccess: true,
});

const bucketForCloudFunctions = new gcp.storage.Bucket(
  `pulumi-ig-group-message-cloudfunction-storage-${stack}`,
  {
    name: `pulumi-ig-group-message-cloudfunction-storage-${stack}`,
    location: "EU",
    forceDestroy: true,
    uniformBucketLevelAccess: true,
  }
);

const createCloudFunction = true;

if (createCloudFunction) {
  const archive = new gcp.storage.BucketObject("archive", {
    name: "message.zip",
    bucket: bucketForCloudFunctions.name,
    source: new pulumi.asset.FileAsset("./message-cloud-function/message.zip"),
  });
  new gcp.cloudfunctionsv2.Function(`message-${stack}`, {
    name: `message-${stack}`,
    buildConfig: {
      entryPoint: "message",
      runtime: "nodejs18",
      source: {
        storageSource: {
          bucket: bucketForCloudFunctions.name,
          object: archive.name,
        },
      },
    },
    serviceConfig: {
      ingressSettings: "ALLOW_ALL",
    },
    location: "europe-west1",
  });
}
