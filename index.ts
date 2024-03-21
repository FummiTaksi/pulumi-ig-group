import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();
const bucketName = `pulumi-ig-group-storage-${stack}`;

new gcp.storage.Bucket(bucketName, {
  name: bucketName,
  location: "EU",
  forceDestroy: true,
  uniformBucketLevelAccess: true,
});
