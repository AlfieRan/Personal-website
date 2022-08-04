import aws from "aws-sdk";
import { dictType_Math } from "../../../utils/types/mathsTypes";

// Config Constants Declared here
let loaded = false;
const fileExtensions = ["png", "jpg", "jpeg", "gif"];
// End of Config Constants - Testing Data at end of file

// AWS variables loaded from environment
const awsPoolId = process.env.AWS_POOL_ID;
const bucketName = process.env.AWS_BUCKET_NAME;
const bucketUrl = `https://${bucketName}.s3.amazonaws.com/`;
let s3: aws.S3;
const testing = process.env.DEVELOPMENT === "true";
// end environment variables

// build s3 connection if variables are valid
if (awsPoolId === undefined || bucketName === undefined) {
    console.log("AWS_POOL_ID or AWS_BUCKET_NAME is not defined");
    console.log("AWS_POOL_ID: " + awsPoolId);
    console.log("AWS_BUCKET_NAME: " + bucketName);
} else {
    aws.config.credentials = new aws.CognitoIdentityCredentials({
        IdentityPoolId: awsPoolId,
    });
    s3 = new aws.S3({
        region: "us-east-1",
        params: { Bucket: bucketName },
    });
    loaded = true;
}
// end of building s3 connection

// start of api route
export default async function awsS3Bucket(req: any, res: any) {
    if (loaded && bucketName !== undefined) {
        if (testing) {
            console.log(
                "Using Test Data for request as per environment variable"
            );
            const obj = HandleResponse(testingData);
            res.status(200).send(obj);
        } else {
            s3.listObjects(
                {
                    Prefix: "SummerMaths",
                    Bucket: bucketName,
                },
                (err: any, data: aws.S3.ListObjectsOutput) => {
                    if (err) {
                        console.log(
                            err,
                            "\n\nErrored using poolId and BucketId of:",
                            awsPoolId,
                            bucketName
                        );
                        res.status(500).send(err);
                    } else {
                        const obj = HandleResponse(data);
                        res.status(200).send(obj);
                    }
                }
            );
        }
    } else {
        res.status(500).json({
            error: "Something went wrong",
        });
    }
}
// end of api route

// start of util functions
function HandleResponse(input: aws.S3.ListObjectsOutput) {
    const files = parseFiles(input);
    const obj = parseObj(files);
    return obj;
}

function parseFiles(obj: any) {
    const output: string[] = [];

    obj.Contents?.forEach((item: any) => {
        const splitElement = item.Key.split(".");
        if (splitElement !== undefined && splitElement.length > 1) {
            const extension = splitElement[splitElement.length - 1];
            if (fileExtensions.includes(extension)) {
                output.push(item.Key);
            }
        }
    });
    return output;
}

function parseObj(data: string[]): dictType_Math {
    // input data should be an array of file paths

    const output: dictType_Math = { chapters: [] }; // init object to return

    data.forEach((item: string) => {
        // for each file
        const splitElement = item.split("/"); // split path into folders & file
        if (splitElement !== undefined && splitElement.length > 1) {
            // if file is at least 2 folders deep - the chapter folder and the question folder
            const chapter = splitElement[splitElement.length - 2]; // get chapter folder
            const question = splitElement[splitElement.length - 1]; // get question folder
            const questionSplit = question.split("."); // split into file name and extension
            if (questionSplit !== undefined && questionSplit.length === 2) {
                // ensure file has an extension and a name
                const questionNumber = questionSplit[0]; // get name from init of array
                const chapterIndex = output.chapters.findIndex(
                    (item: any) => item.name === chapter
                ); // get chapter index from pre-existing output object

                const questionObj = {
                    name: questionNumber,
                    path: `${bucketUrl}${item}`,
                }; // assemble the question object

                if (chapterIndex !== -1) {
                    // if the chapter already exists
                    output.chapters[chapterIndex].questions.push(questionObj); // then add the question to the chapter
                } else {
                    // if the chapter doesn't exist
                    output.chapters.push({
                        name: chapter,
                        questions: [questionObj],
                    }); // then add the chapter and the question
                }
            }
        }
    });

    return output;
}
// end of util functions

// start of testing data
const testingData = {
    IsTruncated: false,
    Marker: "",
    Contents: [
        {
            Key: "SummerMaths/Ch1/a20.png",
            LastModified: new Date("2022-07-28T14:08:14.000Z"),
            ETag: '"0222e383670bea09a81fb75cb510f9c8"',
            ChecksumAlgorithm: [],
            Size: 9719,
            StorageClass: "STANDARD",
        },
        {
            Key: "SummerMaths/Ch1/q20.png",
            LastModified: new Date("2022-07-28T14:08:18.000Z"),
            ETag: '"6589fd116c3bd6ea481a406604415549"',
            ChecksumAlgorithm: [],
            Size: 64645,
            StorageClass: "STANDARD",
        },
        {
            Key: "SummerMaths/random/",
            LastModified: new Date("2022-07-29T11:08:29.000Z"),
            ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
            ChecksumAlgorithm: [],
            Size: 0,
            StorageClass: "STANDARD",
        },
        {
            Key: "SummerMaths/random/CrabGameUpdate.png",
            LastModified: new Date("2022-07-29T11:10:08.000Z"),
            ETag: '"dd934ad6e33d26076bc44eb2faf47ed2"',
            ChecksumAlgorithm: [],
            Size: 429685,
            StorageClass: "STANDARD",
        },
        {
            Key: "SummerMaths/random/bear.png",
            LastModified: new Date("2022-07-29T17:20:39.000Z"),
            ETag: '"6ec2293b5fc89434c0d262c79d0695a6"',
            ChecksumAlgorithm: [],
            Size: 1529249,
            StorageClass: "STANDARD",
        },
        {
            Key: "SummerMaths/random/image.png",
            LastModified: new Date("2022-07-29T11:27:42.000Z"),
            ETag: '"7bb3c7aee0fad913c7a6432e2a6cc6f0"',
            ChecksumAlgorithm: [],
            Size: 1793271,
            StorageClass: "STANDARD",
        },
    ],
    Name: "maths-questions-bucket",
    Prefix: "SummerMaths",
    MaxKeys: 1000,
    CommonPrefixes: [],
};
// end of testing data
