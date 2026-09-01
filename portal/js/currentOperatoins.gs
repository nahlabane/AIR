/*=========================================*
* FORMAT VALUE
*=========================================*/

function formatValue(value, header) {

  if (
    value === "" ||
    value === null ||
    value === undefined
  ) {

    return "";

  }


  const cleanHeader =
    String(header || "").trim();


  /*-----------------------------------------
  * DATE COLUMNS
  *-----------------------------------------*/

  const dateColumns = [

    "Start Date",
    "Due Date",
    "Assignment Due",
    "Topic Test Date",
    "Google Meet Date",
    "Posted Date",
    "End Date"

  ];


  if (
    dateColumns.includes(
      cleanHeader
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


  /*-----------------------------------------
  * TIME COLUMNS
  *-----------------------------------------*/

  const timeColumns = [

    "Start Time",
    "End Time",
    "Google Meet Time"

  ];


  if (
    timeColumns.includes(
      cleanHeader
    )
  ) {

    /*
     * Google Sheets time cells are often
     * returned as Date objects.
     */

    if (
      Object.prototype.toString
        .call(value) ===
      "[object Date]"
    ) {

      const time =
        new Date(
          value.getTime()
        );


      if (
        !isNaN(
          time.getTime()
        )
      ) {

        return Utilities.formatDate(

          time,

          Session.getScriptTimeZone(),

          "HH:mm"

        );

      }

    }


    /*
     * If the value is already text,
     * preserve it.
     */

    return String(
      value
    ).trim();

  }


  return value;

}


/*=========================================*
* COMBINE DATE + TIME
*=========================================*/

function combineDateAndTime(
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
    new Date(
      dateValue
    );


  if (
    isNaN(
      date.getTime()
    )
  ) {

    return null;

  }


  /*
   * If no time was supplied, use:
   *
   * Start → 00:00
   * End   → 23:59:59
   *
   * This keeps compatibility with
   * existing resources.
   */

  if (
    timeValue === "" ||
    timeValue === null ||
    timeValue === undefined
  ) {

    if (endOfDay) {

      date.setHours(
        23,
        59,
        59,
        999
      );

    }
    else {

      date.setHours(
        0,
        0,
        0,
        0
      );

    }


    return date;

  }


  let hours = 0;
  let minutes = 0;


  /*
   * Handle a Date object from
   * a Google Sheets time cell.
   */

  if (
    Object.prototype.toString
      .call(timeValue) ===
    "[object Date]"
  ) {

    const time =
      new Date(
        timeValue.getTime()
      );


    if (
      !isNaN(
        time.getTime()
      )
    ) {

      hours =
        time.getHours();

      minutes =
        time.getMinutes();

    }

  }


  /*
   * Handle text such as:
   *
   * 08:00
   * 14:30
   * 8:00 AM
   */

  else {

    const timeText =
      String(
        timeValue
      ).trim();


    const match24 =
      timeText.match(
        /^(\d{1,2}):(\d{2})$/
      );


    if (
      match24
    ) {

      hours =
        Number(
          match24[1]
        );

      minutes =
        Number(
          match24[2]
        );

    }

    else {

      const parsedTime =
        new Date(
          "1970-01-01 " +
          timeText
        );


      if (
        !isNaN(
          parsedTime.getTime()
        )
      ) {

        hours =
          parsedTime.getHours();

        minutes =
          parsedTime.getMinutes();

      }

    }

  }


  date.setHours(
    hours,
    minutes,
    endOfDay ? 59 : 0,
    endOfDay ? 999 : 0
  );


  return date;

}


/*=========================================*
* FORMAT DATE + TIME FOR PORTAL
*=========================================*/

function formatDateTimeForPortal(
  date
) {

  if (
    !date ||
    isNaN(
      date.getTime()
    )
  ) {

    return "";

  }


  return Utilities.formatDate(

    date,

    Session.getScriptTimeZone(),

    "dd MMM yyyy HH:mm"

  );

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


  let topic = {};

  let resources = [];


  /*=========================================
  * TOPIC INFORMATION
  *=========================================*/

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
      ).trim() === ""
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
            ).trim() !== ""
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


  /*=========================================
  * FIND RESOURCE TABLE
  *=========================================*/

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

      topic: topic,

      resources: resources

    };

  }


  const resourceHeaders =
    data[
      resourceHeaderRow
    ];


  /*=========================================
  * FIND IMPORTANT COLUMNS
  *=========================================*/

  const topicCodeIndex =
    resourceHeaders.indexOf(
      "Topic Code"
    );


  const statusIndex =
    resourceHeaders.indexOf(
      "Status"
    );


  const startDateIndex =
    resourceHeaders.indexOf(
      "Start Date"
    );


  const startTimeIndex =
    resourceHeaders.indexOf(
      "Start Time"
    );


  const dueDateIndex =
    resourceHeaders.indexOf(
      "Due Date"
    );


  const endTimeIndex =
    resourceHeaders.indexOf(
      "End Time"
    );


  /*=========================================
  * LOOP THROUGH RESOURCES
  *=========================================*/

  for (
    let i =
      resourceHeaderRow + 1;

    i < data.length;

    i++
  ) {

    const rowTopicCode =
      topicCodeIndex > -1
      ?
      String(
        data[i][
          topicCodeIndex
        ]
      ).trim()
      :
      "";


    /*---------------------------------------
    * MATCH TOPIC
    *---------------------------------------*/

    if (
      rowTopicCode
      !==
      String(
        topicCode
      ).trim()
    ) {

      continue;

    }


    /*---------------------------------------
    * CHECK STATUS
    *---------------------------------------*/

    let status = "";


    if (
      statusIndex > -1
    ) {

      status =
        String(
          data[i][
            statusIndex
          ]
        )
        .trim()
        .toLowerCase();

    }


    /*
     * Only ACTIVE resources are shown.
     *
     * IMPORTANT:
     * We deliberately do NOT remove
     * upcoming or expired resources here.
     */

    if (
      status !== "active"
    ) {

      continue;

    }


    /*=======================================
    * BUILD RESOURCE
    *=======================================*/

    let resource = {};


    resourceHeaders.forEach(
      (
        header,
        index
      ) => {

        if (
          String(
            header
          ).trim() !== ""
        ) {

          resource[header] =
            formatValue(

              data[i][index],

              header

            );

        }

      }
    );


    /*=======================================
    * ASSESSMENT DATE/TIME INFORMATION
    *=======================================*/

    const resourceType =
      String(
        resource[
          "Resource Type"
        ] || ""
      )
      .trim()
      .toLowerCase();


    const isAssessment =
      resourceType === "test" ||
      resourceType === "assignment";


    if (
      isAssessment
    ) {

      const startDateValue =
        startDateIndex > -1
        ?
        data[i][
          startDateIndex
        ]
        :
        "";


      const startTimeValue =
        startTimeIndex > -1
        ?
        data[i][
          startTimeIndex
        ]
        :
        "";


      const dueDateValue =
        dueDateIndex > -1
        ?
        data[i][
          dueDateIndex
        ]
        :
        "";


      const endTimeValue =
        endTimeIndex > -1
        ?
        data[i][
          endTimeIndex
        ]
        :
        "";


      const startDateTime =
        combineDateAndTime(

          startDateValue,

          startTimeValue,

          false

        );


      const endDateTime =
        combineDateAndTime(

          dueDateValue,

          endTimeValue,

          true

        );


      const now =
        new Date();


      let availability =
        "available";


      if (
        startDateTime &&
        now.getTime()
        <
        startDateTime.getTime()
      ) {

        availability =
          "upcoming";

      }

      else if (
        endDateTime &&
        now.getTime()
        >
        endDateTime.getTime()
      ) {

        availability =
          "closed";

      }


      resource[
        "Start Date"
      ] =
        formatValue(

          startDateValue,

          "Start Date"

        );


      resource[
        "Start Time"
      ] =
        formatValue(

          startTimeValue,

          "Start Time"

        );


      resource[
        "Due Date"
      ] =
        formatValue(

          dueDateValue,

          "Due Date"

        );


      resource[
        "End Time"
      ] =
        formatValue(

          endTimeValue,

          "End Time"

        );


      resource[
        "Start DateTime"
      ] =
        formatDateTimeForPortal(
          startDateTime
        );


      resource[
        "End DateTime"
      ] =
        formatDateTimeForPortal(
          endDateTime
        );


      resource[
        "Availability"
      ] =
        availability;

    }


    /*=======================================
    * ADD RESOURCE
    *=======================================*/

    resources.push(
      resource
    );

  }


  /*=========================================
  * RETURN RESULT
  *=========================================*/

  return {

    topic:
      topic,

    resources:
      resources

  };

}


/*=========================================*
* TEST TOPIC OPERATION
*=========================================*/

function testOperation() {

  const result =
    getTopicOperation(
      "ZA-MAT-G12-T001"
    );


  Logger.log(

    JSON.stringify(
      result,
      null,
      2
    )

  );

}