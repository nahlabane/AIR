/*=========================================
  GET ACADEMIC PLAN
=========================================*/

function getAcademicPlan(subjectCode){

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("AcademicPlan");

  const data = sheet.getDataRange().getValues();

  let results = [];

  for(let i = 1; i < data.length; i++){

    if(data[i][0] === subjectCode){

      results.push({

        subjectCode : data[i][0],

        topicCode : data[i][1],

        module : data[i][2],

        topicTitle : data[i][3],

        startDate : data[i][4],

        endDate : data[i][5],

        status : data[i][6]

      });

    }

  }

  return results;

}

/*=========================================
  TEST ACADEMIC PLAN
=========================================*/

function testPlan(){

  const result = getAcademicPlan("ZA-MAT-G12");

  Logger.log(JSON.stringify(result, null, 2));

}