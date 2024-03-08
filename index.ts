import * as gcp from "@pulumi/gcp";

new gcp.storage.Bucket("pulumi-ig-group-storage", {
  name: "pulumi-ig-group-storage",
  location: "EU",
  forceDestroy: true,
  uniformBucketLevelAccess: true,
});
