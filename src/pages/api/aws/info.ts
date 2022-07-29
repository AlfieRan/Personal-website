import aws from "aws-sdk";

const awsPoolId = process.env.AWS_POOL_ID;
const bucketName = process.env.AWS_BUCKET_NAME;
const bucketUrl = `https://${bucketName}.s3.amazonaws.com/`;
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
        region: "us-east-1",
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
                    const files = parseFiles(data);
                    const obj = parseObj(files);
                    console.log(obj);
                    res.status(200).send(obj);

                    // res.status(200).send(
                    //     `<html><body>${files.map(
                    //         (file: any) =>
                    //             "<img src=" +
                    //             bucketUrl +
                    //             file +
                    //             " height=100px />"
                    //     )}</body></html>`
                    // );
                }
            }
        );
    } else {
        res.status(500).json({
            error: "Something went wrong",
        });
    }
}

const fileExtensions = ["png", "jpg", "jpeg", "gif"];

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

type objType = {
    chapters: { name: string; questions: { name: string; path: string }[] }[];
};

function parseObj(data: string[]): objType {
    // input data should be an array of file paths

    const output: objType = { chapters: [] }; // init object to return

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
                    (item) => item.name === chapter
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
