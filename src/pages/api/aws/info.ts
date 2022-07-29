import aws from "aws-sdk";

const awsPoolId = process.env.AWS_POOL_ID;
const bucketName = process.env.AWS_BUCKET_NAME;
let s3: aws.S3;
let loaded = false;

if (awsPoolId === undefined || bucketName === undefined) {
  console.log("AWS_POOL_ID or AWS_BUCKET_NAME is not defined");
  console.log("AWS_POOL_ID: " + awsPoolId);
  console.log("AWS_BUCKET_NAME: " + bucketName);
} else {
  aws.config.credentials = new aws.CognitoIdentityCredentials({
    IdentityPoolId: awsPoolId,
  });
  s3 = new aws.S3({
    params: { Bucket: bucketName },
  });
  loaded = true;
}

export default async function awsS3Bucket(req: any, res: any) {
  if (loaded && bucketName !== undefined) {
    s3.listObjects(
      { Prefix: "SummerMaths", Bucket: bucketName },
      (err: any, data: any) => {
        if (err) {
          console.log(
            err,
            "\n\nErrored using poolId and BucketId of:",
            awsPoolId,
            bucketName
          );
          res.status(500).send(err);
        } else {
          const bucketUrl = `https://${bucketName}.s3.amazonaws.com/`;
          const files = parseFiles(data);
          res
            .status(200)
            .send(
              `<html><body>${files.map(
                (file: any) =>
                  "<img src=" + bucketUrl + file + " height=100px />"
              )}</body></html>`
            );
        }
      }
    );
  } else {
    res.status(500).json({
      error: "Something went wrong",
    });
  }
}

function parseFiles(obj: any) {
  return obj.Contents?.map((item: any) => item.Key);
}
