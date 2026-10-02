/*=========================================*
* AIR PORTAL API
*=========================================*/


/*=========================================*
* CONFIGURATION
*=========================================*/

const MAX_ASSESSMENT_ATTEMPTS = 2;


/*=========================================*
* GET REQUESTS
*=========================================*/

function doGet(e) {

    try {

        const action =
            e && e.parameter
                ? e.parameter.action
                : "";


        /*=====================================
        * ACADEMIC PLAN
        *=====================================*/

        if (
            action === "plan"
        ) {

            const subjectCode =
                e.parameter.subjectCode;

            return jsonResponse(
                getAcademicPlan(
                    subjectCode
                )
            );

        }


        /*=====================================
        * TOPIC OPERATION
        *=====================================*/

        if (
            action === "operation"
        ) {

            const topicCode =
                e.parameter.topicCode;

            return jsonResponse(
                getTopicOperation(
                    topicCode
                )
            );

        }


        /*=====================================
        * ASSESSMENT QUESTIONS
        *=====================================*/

        if (
            action === "assessment"
        ) {

            const sourceCode =
                e.parameter.sourceCode;

            return jsonResponse(
                getMathematicsOperations(
                    sourceCode
                )
            );

        }


        /*=====================================
        * ASSESSMENT ATTEMPTS
        *=====================================*/

        if (
            action === "attempts"
        ) {

            const email =
                e.parameter.email;

            const sourceCode =
                e.parameter.sourceCode;

            return jsonResponse(
                checkAssessmentAttempts(
                    email,
                    sourceCode
                )
            );

        }
        /*=========================================*
* LEARNER RESULTS
*=========================================*/

if (action == "results") {

  const email =
    e.parameter.email;

  return jsonResponse(
    getLearnerResults(email)
  );

}


        /*=====================================
        * INVALID ACTION
        *=====================================*/

        return jsonResponse({

            status: "error",

            message:
                "Invalid action."

        });

    }

    catch(error) {

        return jsonResponse({

            status: "error",

            message:
                error.toString()

        });

    }

}


/*=========================================*
* POST REQUESTS
*=========================================*/

function doPost(e) {

    try {

        const request =
            JSON.parse(
                e.postData.contents
            );


        const action =
            request.action;


        /*=====================================
        * VERIFY USER
        *=====================================*/

        if (
            !action ||
            action === "verifyUser"
        ) {

            return jsonResponse(
                verifyUser(
                    request.email
                )
            );

        }


        /*=====================================
        * CHECK ATTEMPTS
        *=====================================*/

        if (
            action === "attempts"
        ) {

            return jsonResponse(
                checkAssessmentAttempts(
                    request.email,
                    request.sourceCode
                )
            );

        }


        /*=====================================
        * SUBMIT ASSESSMENT
        *=====================================*/

        if (
            action === "submitAssessment"
        ) {

            return jsonResponse(
                submitAssessment(
                    request.email,
                    request.sourceCode,
                    request.answers
                )
            );

        }


        /*=====================================
        * INVALID ACTION
        *=====================================*/

        return jsonResponse({

            status: "error",

            message:
                "Invalid POST action."

        });

    }

    catch(error) {

        return jsonResponse({

            status: "error",

            message:
                error.toString()

        });

    }

}


/*=========================================*
* JSON RESPONSE
*=========================================*/

function jsonResponse(data) {

    return ContentService

        .createTextOutput(
            JSON.stringify(data)
        )

        .setMimeType(
            ContentService.MimeType.JSON
        );

}


/*=========================================*
* FORMAT VALUE
*=========================================*/

function formatValue(
    value,
    header
) {

    if (
        value === "" ||
        value === null ||
        value === undefined
    ) {

        return "";

    }


    const dateColumns = [

        "Assignment Due",

        "Topic Test Date",

        "Google Meet Date",

        "Posted Date",

        "Start Date",

        "Due Date"

    ];


    if (
        dateColumns.includes(
            String(header).trim()
        )
    ) {

        const date =
            new Date(value);


        if (
            !isNaN(
                date.getTime()
            )
        ) {

            return Utilities.formatDate(

                date,

                Session.getScriptTimeZone(),

                "dd MMM yyyy"

            );

        }

    }


    if (
        String(header).trim()
        ===
        "Google Meet Time"
    ) {

        const date =
            new Date(value);


        if (
            !isNaN(
                date.getTime()
            )
        ) {

            return Utilities.formatDate(

                date,

                Session.getScriptTimeZone(),

                "HH:mm"

            );

        }

    }


    return value;

}


/*=========================================*
* GET ACADEMIC PLAN
*=========================================*/

function getAcademicPlan(
    subjectCode
) {

    const sheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "AcademicPlan"
        );


    if (!sheet) {

        return {

            status: "error",

            message:
                "AcademicPlan sheet not found."

        };

    }


    const data =
        sheet
        .getDataRange()
        .getValues();


    if (
        data.length === 0
    ) {

        return {

            status: "error",

            message:
                "AcademicPlan is empty."

        };

    }


    const headers =
        data[0];


    const result = [];


    for (
        let i = 1;
        i < data.length;
        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            ===
            String(
                subjectCode
            ).trim()
        ) {

            const row = {};


            headers.forEach(
                (
                    header,
                    index
                ) => {

                    if (
                        String(
                            header
                        ).trim()
                        !== ""
                    ) {

                        row[header] =
                            formatValue(
                                data[i][index],
                                header
                            );

                    }

                }
            );


            result.push(row);

        }

    }


    return {

        status: "success",

        subjectCode:
            subjectCode,

        plan:
            result

    };

}


/*=========================================*
* GET TOPIC OPERATION
*=========================================*/

function getTopicOperation(
    topicCode
) {

    const sheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "MathematicsOperations"
        );


    if (!sheet) {

        return {

            status: "error",

            message:
                "MathematicsOperations sheet not found."

        };

    }


    const data =
        sheet
        .getDataRange()
        .getValues();


    if (
        data.length === 0
    ) {

        return {

            status: "error",

            message:
                "MathematicsOperations is empty."

        };

    }


    let topic = {};

    let resources = [];


    /*---------------------------------------
    * TOPIC TABLE
    *---------------------------------------*/

    const topicHeaders =
        data[0];


    for (
        let i = 1;
        i < data.length;
        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            === ""
        ) {

            break;

        }


        if (
            String(
                data[i][0]
            ).trim()
            ===
            String(
                topicCode
            ).trim()
        ) {

            topicHeaders.forEach(
                (
                    header,
                    index
                ) => {

                    if (
                        String(
                            header
                        ).trim()
                        !== ""
                    ) {

                        topic[header] =
                            formatValue(
                                data[i][index],
                                header
                            );

                    }

                }
            );


            break;

        }

    }


    /*---------------------------------------
    * FIND RESOURCE TABLE
    *---------------------------------------*/

    let resourceHeaderRow =
        -1;


    for (
        let i = 0;
        i < data.length;
        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            ===
            "Resource Code"
        ) {

            resourceHeaderRow =
                i;

            break;

        }

    }


    /*---------------------------------------
    * READ RESOURCES
    *---------------------------------------*/

    if (
        resourceHeaderRow > -1
    ) {

        const resourceHeaders =
            data[
                resourceHeaderRow
            ];


        for (
            let i =
                resourceHeaderRow + 1;

            i < data.length;

            i++
        ) {

            const rowTopicCode =
                String(
                    data[i][1]
                ).trim();


            if (
                rowTopicCode
                ===
                String(
                    topicCode
                ).trim()
            ) {

                let resource = {};


                resourceHeaders.forEach(
                    (
                        header,
                        index
                    ) => {

                        if (
                            String(
                                header
                            ).trim()
                            !== ""
                        ) {

                            resource[header] =
                                formatValue(
                                    data[i][index],
                                    header
                                );

                        }

                    }
                );


                /*-----------------------------
                * ONLY ACTIVE RESOURCES
                *-----------------------------*/

                const status =
                    String(
                        resource["Status"]
                        || ""
                    )
                    .trim()
                    .toLowerCase();


                if (
                    status === "active"
                ) {

                    resources.push(
                        resource
                    );

                }

            }

        }

    }


    return {

        status: "success",

        topic:
            topic,

        resources:
            resources

    };

}


/*=========================================
GET MATHEMATICS ASSESSMENT QUESTIONS
=========================================*/

function getMathematicsOperations(sourceCode) {

    const sheet =
        SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName("MathematicsOperations");

    if (!sheet) {
        return {
            status: "error",
            message: "MathematicsOperations sheet not found."
        };
    }

    const data =
        sheet.getDataRange().getValues();

    if (data.length === 0) {
        return {
            status: "error",
            message: "MathematicsOperations is empty."
        };
    }

    const requestedSourceCode =
        String(sourceCode || "").trim();

    if (!requestedSourceCode) {
        return {
            status: "error",
            message: "Source Code is required."
        };
    }

    /*=========================================
    * FIND RESOURCE TABLE
    =========================================*/

    let resourceHeaderRow = -1;

    for (let i = 0; i < data.length; i++) {
        if (
            String(data[i][0]).trim() ===
            "Resource Code"
        ) {
            resourceHeaderRow = i;
            break;
        }
    }

    if (resourceHeaderRow === -1) {
        return {
            status: "error",
            message: "Resource table not found."
        };
    }

    const resourceHeaders =
        data[resourceHeaderRow];

    let resource = null;

    /*=========================================
    * FIND RESOURCE
    =========================================*/

    for (
        let i = resourceHeaderRow + 1;
        i < data.length;
        i++
    ) {

        const rowSourceCode =
            String(data[i][0]).trim();

        if (
            rowSourceCode !==
            requestedSourceCode
        ) {
            continue;
        }

        resource = {};

        resourceHeaders.forEach(
            (header, index) => {

                const cleanHeader =
                    String(header).trim();

                if (!cleanHeader) {
                    return;
                }

                if (
                    cleanHeader === "Start Time" ||
                    cleanHeader === "End Time"
                ) {

                    resource[cleanHeader] =
                        formatAssessmentTime(
                            data[i][index]
                        );

                } else {

                    resource[cleanHeader] =
                        formatValue(
                            data[i][index],
                            cleanHeader
                        );

                }

            }
        );

        break;
    }

    if (!resource) {
        return {
            status: "error",
            message: "Assessment resource not found."
        };
    }

    /*=========================================
    * CHECK STATUS
    =========================================*/

    const status =
        String(resource["Status"] || "")
            .trim()
            .toLowerCase();

    if (status !== "active") {
        return {
            status: "closed",
            sourceCode: requestedSourceCode,
            message:
                "This assessment is not currently available.",
           resource: {

    resourceCode:
        resource["Resource Code"],

    resourceLink:
        resource["Resource Link"] || "",

    startDate:
        resource["Start Date"] || "",

    startTime:
        resource["Start Time"] || "",

    dueDate:
        resource["Due Date"] || "",

    endTime:
        resource["End Time"] || "",

    startDateTime:
        resource["Start DateTime"] || "",

    endDateTime:
        resource["End DateTime"] || "",

    status: "active",

    availability:
        resource["Availability"] || "available"

}
        };
    }

    /*=========================================
    * BUILD EXACT START/END DATE + TIME
    =========================================*/

    const startDate =
        buildDateTime(
            resource["Start Date"],
            resource["Start Time"],
            false
        );

    const dueDate =
        buildDateTime(
            resource["Due Date"],
            resource["End Time"],
            true
        );

    const now = new Date();

    if (
        startDate &&
        now.getTime() < startDate.getTime()
    ) {

        resource["Availability"] =
            "upcoming";

    } else if (
        dueDate &&
        now.getTime() > dueDate.getTime()
    ) {

        resource["Availability"] =
            "closed";

    } else {

        resource["Availability"] =
            "available";

    }

    resource["Start DateTime"] =
        formatDateTime(startDate);

    resource["End DateTime"] =
        formatDateTime(dueDate);

    /*=========================================
    * FIND ASSESSMENT QUESTIONS TABLE
    =========================================*/

    let assessmentHeaderRow = -1;

    for (let i = 0; i < data.length; i++) {
        if (
            String(data[i][0]).trim() ===
            "Source Code"
        ) {
            assessmentHeaderRow = i;
            break;
        }
    }

    if (assessmentHeaderRow === -1) {
        return {
            status: "error",
            message:
                "Assessment Questions table not found."
        };
    }

    const headers =
        data[assessmentHeaderRow];

    const questions = [];

    /*=========================================
    * GET QUESTIONS
    =========================================*/

    for (
        let i = assessmentHeaderRow + 1;
        i < data.length;
        i++
    ) {

        if (
            String(data[i][0]).trim() !==
            requestedSourceCode
        ) {
            continue;
        }

        const question = {};

        headers.forEach(
            (header, index) => {

                if (
                    String(header).trim() !== ""
                ) {
                    question[header] =
                        data[i][index];
                }

            }
        );

        questions.push(question);
    }

    return {
        status: "success",
        sourceCode: requestedSourceCode,
        resource: {
            resourceCode:
                resource["Resource Code"],
                 resourceLink:
        resource["Resource Link"] || "",
            startDate:
                resource["Start Date"] || "",
            startTime:
                resource["Start Time"] || "",
            dueDate:
                resource["Due Date"] || "",
            endTime:
                resource["End Time"] || "",
            startDateTime:
                resource["Start DateTime"] || "",
            endDateTime:
                resource["End DateTime"] || "",
            status: "active",
            availability:
                resource["Availability"] || "available"
        },
        questions: questions
    };
}


/*=========================================
* FORMAT ASSESSMENT TIME
=========================================*/

function formatAssessmentTime(value) {

    if (
        value === "" ||
        value === null ||
        value === undefined
    ) {
        return "";
    }

    if (
        Object.prototype.toString.call(value) ===
        "[object Date]"
    ) {

        return Utilities.formatDate(
            value,
            Session.getScriptTimeZone(),
            "HH:mm"
        );

    }

    const text =
        String(value).trim();

    if (!text) {
        return "";
    }

    const parsedDate =
        new Date(text);

    if (
        !isNaN(parsedDate.getTime())
    ) {

        return Utilities.formatDate(
            parsedDate,
            Session.getScriptTimeZone(),
            "HH:mm"
        );

    }

    const timeMatch =
        text.match(
            /^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i
        );

    if (timeMatch) {

        let hour =
            parseInt(timeMatch[1], 10);

        const minute =
            parseInt(timeMatch[2], 10);

        const ampm =
            timeMatch[3]
                ? timeMatch[3].toUpperCase()
                : "";

        if (
            ampm === "PM" &&
            hour < 12
        ) {
            hour += 12;
        }

        if (
            ampm === "AM" &&
            hour === 12
        ) {
            hour = 0;
        }

        return (
            String(hour).padStart(2, "0") +
            ":" +
            String(minute).padStart(2, "0")
        );
    }

    return "";
}


/*=========================================
* BUILD EXACT DATE + TIME
=========================================*/

function buildDateTime(
    dateValue,
    timeValue,
    endOfDay
) {

    if (
        dateValue === "" ||
        dateValue === null ||
        dateValue === undefined
    ) {
        return null;
    }

    const date =
        new Date(dateValue);

    if (
        isNaN(date.getTime())
    ) {
        return null;
    }

    const time =
        formatAssessmentTime(timeValue);

    if (time) {

        const parts =
            time.split(":");

        date.setHours(
            parseInt(parts[0], 10),
            parseInt(parts[1], 10),
            0,
            0
        );

    } else if (endOfDay) {

        date.setHours(
            23,
            59,
            59,
            999
        );

    } else {

        date.setHours(
            0,
            0,
            0,
            0
        );
    }

    return date;
}


/*=========================================
* FORMAT DATE + TIME
=========================================*/

function formatDateTime(date) {

    if (
        !date ||
        isNaN(date.getTime())
    ) {
        return "";
    }

    return Utilities.formatDate(
        date,
        Session.getScriptTimeZone(),
        "dd MMM yyyy HH:mm"
    );
}



function parseServerDate(
    value
) {

    if (
        !value
    ) {

        return null;

    }


    if (
        value instanceof Date
    ) {

        return new Date(
            value.getTime()
        );

    }


    const text =
        String(value).trim();


    const match =
        text.match(
            /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
        );


    if (
        match
    ) {

        const day =
            parseInt(
                match[1],
                10
            );


        const monthName =
            match[2]
            .substring(
                0,
                3
            )
            .toLowerCase();


        const year =
            parseInt(
                match[3],
                10
            );


        const months = {

            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            may: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            oct: 9,
            nov: 10,
            dec: 11

        };


        if (
            months[
                monthName
            ] !== undefined
        ) {

            return new Date(

                year,

                months[
                    monthName
                ],

                day,

                23,

                59,

                59,

                999

            );

        }

    }


    const date =
        new Date(value);


    if (
        isNaN(
            date.getTime()
        )
    ) {

        return null;

    }


    return date;

}
/*=========================================*
* VERIFY USER
*=========================================*/

function verifyUser(email) {

    email =
        String(
            email || ""
        )
        .trim()
        .toLowerCase();


    if (!email) {

        return {

            status: "error",

            message:
                "Email is required."

        };

    }


    const sheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "Users"
        );


    if (!sheet) {

        return {

            status: "error",

            message:
                "Users sheet not found."

        };

    }


    const data =
        sheet
        .getDataRange()
        .getValues();


    for (
        let i = 1;
        i < data.length;
        i++
    ) {

        const rowEmail =
            String(
                data[i][0] || ""
            )
            .trim()
            .toLowerCase();


        if (
            rowEmail === email
        ) {

            /*---------------------------------
            * UPDATE LAST LOGIN
            * COLUMN I
            *---------------------------------*/

            sheet
                .getRange(
                    i + 1,
                    9
                )
                .setValue(
                    new Date()
                );


            /*---------------------------------
            * RETURN USER
            *---------------------------------*/

            return {

    status:
        String(
            data[i][3] || ""
        )
        .trim()
        .toLowerCase(),

    email:
        data[i][0],

    name:
        data[i][1],

    role:
        data[i][2],

                country:
                    data[i][4],

                programme:
                    data[i][5],

                subjects:
                    data[i][6],

                photo:
                    data[i][9]

            };

        }

    }


    /*---------------------------------------
    * USER NOT REGISTERED
    *---------------------------------------*/

    return {

        status:
            "not_registered",

        email:
            email

    };

}


/*=========================================*
* CHECK ASSESSMENT ATTEMPTS
*=========================================*/

function checkAssessmentAttempts(
    email,
    sourceCode
) {

    email =
        String(
            email || ""
        )
        .trim()
        .toLowerCase();


    sourceCode =
        String(
            sourceCode || ""
        )
        .trim();


    /*---------------------------------------
    * VALIDATE INPUT
    *---------------------------------------*/

    if (!email) {

        return {

            status: "error",

            message:
                "Learner email is required."

        };

    }


    if (!sourceCode) {

        return {

            status: "error",

            message:
                "Source Code is required."

        };

    }


    /*---------------------------------------
    * VERIFY LEARNER
    *---------------------------------------*/

    const usersSheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "Users"
        );


    if (!usersSheet) {

        return {

            status: "error",

            message:
                "Users sheet not found."

        };

    }


    const users =
        usersSheet
        .getDataRange()
        .getValues();


    let registered =
        false;


    for (
        let i = 1;
        i < users.length;
        i++
    ) {

        const rowEmail =
            String(
                users[i][0] || ""
            )
            .trim()
            .toLowerCase();


        if (
            rowEmail === email
        ) {

            registered =
                true;

            break;

        }

    }


    if (!registered) {

        return {

            status:
                "not_registered",

            email:
                email

        };

    }


    /*---------------------------------------
    * GET SUBMISSION SHEET
    *---------------------------------------*/

    const sheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "AssessmentSubmissions"
        );


    /*---------------------------------------
    * NO SUBMISSIONS YET
    *---------------------------------------*/

    if (!sheet) {

        return {

            status:
                "success",

            email:
                email,

            sourceCode:
                sourceCode,

            attempts:
                0,

            remaining:
                MAX_ASSESSMENT_ATTEMPTS,

            maxAttempts:
                MAX_ASSESSMENT_ATTEMPTS

        };

    }


    const data =
        sheet
        .getDataRange()
        .getValues();


    let attempts =
        0;


    /*---------------------------------------
    * COUNT ATTEMPTS
    *---------------------------------------*/

    for (
        let i = 1;
        i < data.length;
        i++
    ) {

        const rowEmail =
            String(
                data[i][0] || ""
            )
            .trim()
            .toLowerCase();


        const rowSourceCode =
            String(
                data[i][1] || ""
            )
            .trim();


        if (
            rowEmail === email &&
            rowSourceCode === sourceCode
        ) {

            attempts++;

        }

    }


    return {

        status:
            "success",

        email:
            email,

        sourceCode:
            sourceCode,

        attempts:
            attempts,

        remaining:
            Math.max(
                MAX_ASSESSMENT_ATTEMPTS -
                attempts,
                0
            ),

        maxAttempts:
            MAX_ASSESSMENT_ATTEMPTS

    };

}


/*=========================================*
* SUBMIT ASSESSMENT
*=========================================*/

function submitAssessment(
    email,
    sourceCode,
    answers
) {

    email =
        String(
            email || ""
        )
        .trim()
        .toLowerCase();


    sourceCode =
        String(
            sourceCode || ""
        )
        .trim();


    /*---------------------------------------
    * VALIDATE INPUT
    *---------------------------------------*/

    if (!email) {

        return {

            status: "error",

            message:
                "Learner email is required."

        };

    }


    if (!sourceCode) {

        return {

            status: "error",

            message:
                "Source Code is required."

        };

    }


    if (
        !Array.isArray(
            answers
        )
    ) {

        return {

            status: "error",

            message:
                "Assessment answers are required."

        };

    }


    /*---------------------------------------
    * VERIFY LEARNER
    *---------------------------------------*/

    const usersSheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "Users"
        );


    if (!usersSheet) {

        return {

            status: "error",

            message:
                "Users sheet not found."

        };

    }


    const users =
        usersSheet
        .getDataRange()
        .getValues();


    let registered =
        false;


    for (
        let i = 1;
        i < users.length;
        i++
    ) {

        const rowEmail =
            String(
                users[i][0] || ""
            )
            .trim()
            .toLowerCase();


        if (
            rowEmail === email
        ) {

            registered =
                true;

            break;

        }

    }


    if (!registered) {

        return {

            status:
                "not_registered",

            email:
                email

        };

    }


    /*---------------------------------------
    * GET ASSESSMENT RESOURCE
    *---------------------------------------*/

    const assessment =
        getAssessmentForSubmission(
            sourceCode
        );


    if (
        assessment.status !==
        "success"
    ) {

        return assessment;

    }


    /*---------------------------------------
    * CHECK START DATE
    *---------------------------------------*/

    const now =
        new Date();


    if (
        assessment.startDate &&
        now.getTime()
        <
        assessment.startDate.getTime()
    ) {

        return {

            status:
                "closed",

            sourceCode:
                sourceCode,

            message:
                "This assessment has not started yet."

        };

    }


    /*---------------------------------------
    * CHECK DUE DATE
    *---------------------------------------*/

    if (
        assessment.dueDate &&
        now.getTime()
        >
        assessment.dueDate.getTime()
    ) {

        return {

            status:
                "closed",

            sourceCode:
                sourceCode,

            message:
                "This assessment is closed. The submission deadline has passed."

        };

    }


    /*---------------------------------------
    * CHECK PREVIOUS ATTEMPTS
    *---------------------------------------*/

    const attemptInfo =
        checkAssessmentAttempts(
            email,
            sourceCode
        );


    if (
        attemptInfo.status !==
        "success"
    ) {

        return attemptInfo;

    }


    if (
        attemptInfo.attempts
        >=
        MAX_ASSESSMENT_ATTEMPTS
    ) {

        return {

            status:
                "max_attempts",

            email:
                email,

            sourceCode:
                sourceCode,

            attempts:
                attemptInfo.attempts,

            maxAttempts:
                MAX_ASSESSMENT_ATTEMPTS,

            message:
                "You have used all available attempts for this assessment."

        };

    }


    /*---------------------------------------
    * CALCULATE SCORE
    *---------------------------------------*/

    const questions =
        assessment.questions;


    let score =
        0;


    let totalMarks =
        0;


    questions.forEach(
        function(question, index) {

            const mark =
                Number(
                    question["Mark"]
                ) || 0;


            totalMarks +=
                mark;


            const correctAnswer =
                String(
                    question[
                        "Correct Answer"
                    ] || ""
                )
                .trim()
                .toUpperCase();


            let learnerAnswer =
                "";


            if (
                answers[index]
            ) {

                learnerAnswer =
                    String(
                        answers[index].answer ||
                        ""
                    )
                    .trim()
                    .toUpperCase();

            }


            if (
                learnerAnswer &&
                learnerAnswer ===
                correctAnswer
            ) {

                score +=
                    mark;

            }

        }
    );


    /*---------------------------------------
    * CALCULATE PERCENTAGE
    *---------------------------------------*/

    let percentage =
        0;


    if (
        totalMarks > 0
    ) {

        percentage =
            (
                score /
                totalMarks
            ) *
            100;

    }


    /*---------------------------------------
    * SAVE SUBMISSION
    *---------------------------------------*/

    const spreadsheet =
        SpreadsheetApp
        .getActiveSpreadsheet();


    let submissionSheet =
        spreadsheet
        .getSheetByName(
            "AssessmentSubmissions"
        );


    /*---------------------------------------
    * CREATE SUBMISSION SHEET
    *---------------------------------------*/

    if (!submissionSheet) {

        submissionSheet =
            spreadsheet
            .insertSheet(
                "AssessmentSubmissions"
            );


        submissionSheet
            .appendRow([

                "Email",

                "Source Code",

                "Attempt",

                "Submission Date",

                "Score",

                "Total Marks",

                "Percentage",

                "Answers"

            ]);

    }


    /*---------------------------------------
    * ATTEMPT NUMBER
    *---------------------------------------*/

    const attempt =
        attemptInfo.attempts + 1;


    /*---------------------------------------
    * SAVE ANSWERS AS JSON
    *---------------------------------------*/

    const answersJSON =
        JSON.stringify(
            answers
        );


    submissionSheet
        .appendRow([

            email,

            sourceCode,

            attempt,

            new Date(),

            score,

            totalMarks,

            percentage,

            answersJSON

        ]);


    /*---------------------------------------
    * RETURN RESULT
    *---------------------------------------*/

    return {

        status:
            "submitted",

        message:
            "Assessment submitted successfully.",

        email:
            email,

        sourceCode:
            sourceCode,

        attempt:
            attempt,

        maxAttempts:
            MAX_ASSESSMENT_ATTEMPTS,

        score:
            score,

        totalMarks:
            totalMarks,

        percentage:
            percentage

    };

}


/*=========================================*
* GET ASSESSMENT FOR SUBMISSION
*=========================================*/

function getAssessmentForSubmission(
    sourceCode
) {

    const sheet =
        SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
            "MathematicsOperations"
        );


    if (!sheet) {

        return {

            status:
                "error",

            message:
                "MathematicsOperations sheet not found."

        };

    }


    const data =
        sheet
        .getDataRange()
        .getValues();


    /*---------------------------------------
    * FIND RESOURCE TABLE
    *---------------------------------------*/

    let resourceHeaderRow =
        -1;


    for (
        let i = 0;
        i < data.length;
        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            ===
            "Resource Code"
        ) {

            resourceHeaderRow =
                i;

            break;

        }

    }


    if (
        resourceHeaderRow === -1
    ) {

        return {

            status:
                "error",

            message:
                "Resource table not found."

        };

    }


    const resourceHeaders =
        data[
            resourceHeaderRow
        ];


    let resource =
        null;


    /*---------------------------------------
    * FIND RESOURCE
    *---------------------------------------*/

    for (
        let i =
            resourceHeaderRow + 1;

        i < data.length;

        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            ===
            String(
                sourceCode
            ).trim()
        ) {

            resource = {};


            resourceHeaders.forEach(
                function(
                    header,
                    index
                ) {

                    if (
                        String(
                            header
                        ).trim()
                        !== ""
                    ) {

                        resource[header] =
                            data[i][index];

                    }

                }
            );


            break;

        }

    }


    if (!resource) {

        return {

            status:
                "error",

            message:
                "Assessment resource not found."

        };

    }


    /*---------------------------------------
    * CHECK STATUS
    *---------------------------------------*/

    const status =
        String(
            resource["Status"] || ""
        )
        .trim()
        .toLowerCase();


    if (
        status !==
        "active"
    ) {

        return {

            status:
                "closed",

            sourceCode:
                sourceCode,

            message:
                "This assessment is not currently available."

        };

    }


   /*---------------------------------------
* EXACT START DATE + TIME
*---------------------------------------*/

const startDate =
    combineDateAndTime(
        resource["Start Date"],
        resource["Start Time"],
        false
    );


/*---------------------------------------
* EXACT END DATE + TIME
*---------------------------------------*/

const dueDate =
    combineDateAndTime(
        resource["Due Date"],
        resource["End Time"],
        true
    );

    /*---------------------------------------
    * FIND QUESTION TABLE
    *---------------------------------------*/

    let questionHeaderRow =
        -1;


    for (
        let i = 0;
        i < data.length;
        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            ===
            "Source Code"
        ) {

            questionHeaderRow =
                i;

            break;

        }

    }


    if (
        questionHeaderRow === -1
    ) {

        return {

            status:
                "error",

            message:
                "Assessment Questions table not found."

        };

    }


    const headers =
        data[
            questionHeaderRow
        ];


    const questions = [];


    /*---------------------------------------
    * GET QUESTIONS
    *---------------------------------------*/

    for (
        let i =
            questionHeaderRow + 1;

        i < data.length;

        i++
    ) {

        if (
            String(
                data[i][0]
            ).trim()
            ===
            String(
                sourceCode
            ).trim()
        ) {

            const question = {};


            headers.forEach(
                function(
                    header,
                    index
                ) {

                    if (
                        String(
                            header
                        ).trim()
                        !== ""
                    ) {

                        question[header] =
                            data[i][index];

                    }

                }
            );


            questions.push(
                question
            );

        }

    }


    return {

        status:
            "success",

        sourceCode:
            sourceCode,

        resource:
            resource,

        startDate:
            startDate,

        dueDate:
            dueDate,

        questions:
            questions

    };

}


/*=========================================*
* TEST VERIFY USER
*=========================================*/

function testVerifyUser() {

    const email =
        "nahlabane.mokwena@gmail.com";


    const result =
        verifyUser(
            email
        );


    Logger.log(
        JSON.stringify(
            result,
            null,
            2
        )
    );

}


/*=========================================*
* TEST ASSESSMENT
*=========================================*/

function testMathematicsAssessment() {

    const sourceCode =
        "ZA-MAT-G12-T001-S002";


    const result =
        getMathematicsOperations(
            sourceCode
        );


    Logger.log(
        JSON.stringify(
            result,
            null,
            2
        )
    );

}


/*=========================================*
* TEST ATTEMPTS
*=========================================*/

function testAssessmentAttempts() {

    const email =
        "nahlabane.mokwena@gmail.com";


    const sourceCode =
        "ZA-MAT-G12-T001-S003";


    const result =
        checkAssessmentAttempts(
            email,
            sourceCode
        );


    Logger.log(
        JSON.stringify(
            result,
            null,
            2
        )
    );

}
/*=========================================*
* GET LEARNER RESULTS
*=========================================*/

function getLearnerResults(email) {

  if (!email || String(email).trim() === "") {
    return {
      status: "error",
      message: "Learner email is required."
    };
  }

  const sheet =
    SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("AssessmentSubmissions");

  if (!sheet) {
    return {
      status: "error",
      message: "AssessmentSubmissions sheet not found."
    };
  }

  const data =
    sheet
      .getDataRange()
      .getValues();

  const requestedEmail =
    String(email)
      .trim()
      .toLowerCase();

  const results = [];

  for (let i = 1; i < data.length; i++) {

    const row = data[i];

    /*
     * ACTUAL SHEET STRUCTURE
     *
     * A = Email
     * B = Test/Assignment Code
     * C = Attempt
     * D = Submitted Date & Time
     * E = Score
     * F = Total Questions
     * G = Scored Percentage
     */

    const rowEmail =
      String(row[0] || "")
        .trim()
        .toLowerCase();

    if (rowEmail !== requestedEmail) {
      continue;
    }

    let submittedAt = "";

    if (row[3] instanceof Date) {

      submittedAt =
        Utilities.formatDate(
          row[3],
          Session.getScriptTimeZone(),
          "dd MMM yyyy HH:mm:ss"
        );

    } else {

      submittedAt =
        String(row[3] || "")
          .trim();

    }

    results.push({

      code:
        String(row[1] || "").trim(),

      attempt:
        row[2],

      submittedAt:
        submittedAt,

      score:
        row[4],

      total:
        row[5],

      percentage:
        row[6]

    });

  }

  return {

    status: "success",

    email:
      email,

    results:
      results

  };

}
/*=========================================*
* TEST ASSESSMENT SUBMISSION
*=========================================*/

function testSubmitAssessment() {

    const email =
        "nahlabane.mokwena@gmail.com";


    const sourceCode =
        "ZA-MAT-G12-T001-S002";


    const answers = [

        {
            questionNo:
                "3.1",

            answer:
                "C"
        },

        {
            questionNo:
                "1.3.1",

            answer:
                "A"
        }

    ];


    const result =
        submitAssessment(
            email,
            sourceCode,
            answers
        );


    Logger.log(
        JSON.stringify(
            result,
            null,
            2
        )
    );

}