google.charts.load('current', {packages: ['corechart']});

/* ****SEDE AREQUIPA**** */
/* -------Total de alumnas por generacion:--------------- */

google.charts.setOnLoadCallback(drawChartTotalStudentsAQP);
function drawChartTotalStudentsAQP() {
  var dataTotalStudentsAQP = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2016-2', numEstudentsAQP20162, 'blue'],
    ['Gen 2016-2', numdesertedAQP20162, 'red'],
    ['Gen 2017-1', numEstudentsAQP20171, 'blue'],
    ['Gen 2017-1', numdesertedAQP20171, 'red'],
  ]);

  var viewTotalStudentsAQP = new google.visualization.DataView(dataTotalStudentsAQP);
  viewTotalStudentsAQP.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsAQP = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 300,
    height: 200,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsAQP = new google.visualization.ColumnChart(document.getElementById('columnchart1Values'));
  chartTotalStudentsAQP.draw(viewTotalStudentsAQP, optionsTotalStudentsAQP);
}

/* -------NPS por generación:--------------- */

google.charts.setOnLoadCallback(drawChartNPSAQP20162);
function drawChartNPSAQP20162() {
  var dataNPSAQP20162 = google.visualization.arrayToDataTable([
    ['Calificación NPS', 'Total', { role: 'style' } ],
    ['Promoters', npsPromotersAQP20162, 'blue'],
    ['Passives', npsPassivesAQP20162, 'green'],
    ['Detractors', npsDetractorsAQP20162, 'red'],
  ]);

  var viewNPSAQP20162 = new google.visualization.DataView(dataNPSAQP20162);
  viewNPSAQP20162.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsNPSAQP20162 = {
    title: 'Calificación NPS GEN 2016-2',
    width: 300,
    height: 200,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartNPSAQP20162 = new google.visualization.ColumnChart(document.getElementById('columnchart1NPS'));
  chartNPSAQP20162.draw(viewNPSAQP20162, optionsNPSAQP20162);
}

google.charts.setOnLoadCallback(drawChartNPSAQP20171);
function drawChartNPSAQP20171() {
  var dataNPSAQP20171 = google.visualization.arrayToDataTable([
    ['Calificación NPS', 'Total', { role: 'style' } ],
    ['Promoters', npsPromotersAQP20171, 'blue'],
    ['Passives', npsPassivesAQP20171, 'green'],
    ['Detractors', npsDetractorsAQP20171, 'red'],
  ]);

  var viewNPSAQP20171 = new google.visualization.DataView(dataNPSAQP20171);
  viewNPSAQP20171.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsNPSAQP20171 = {
    title: 'Calificación NPS GEN 2017-1',
    width: 300,
    height: 200,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartNPSAQP20171 = new google.visualization.ColumnChart(document.getElementById('columnchart2NPS'));
  chartNPSAQP20171.draw(viewNPSAQP20171, optionsNPSAQP20171);
}
/* ****SEDE CDMX**** */
/* -------Total de alumnas por generacion:--------------- */
google.charts.setOnLoadCallback(drawChartTotalStudentsCDMX);
function drawChartTotalStudentsCDMX() {
  var dataTotalStudentsCDMX = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2017-1', numEstudentsCDMX20171, 'blue'],
    ['Gen 2017-1', numdesertedCDMX20171, 'red'],
    ['Gen 2017-2', numEstudentsCDMX20172, 'blue'],
    ['Gen 2017-2', numdesertedCDMX20172, 'red'],

  ]);

  var viewTotalStudentsCDMX = new google.visualization.DataView(dataTotalStudentsCDMX);
  viewTotalStudentsCDMX.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsCDMX = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 300,
    height: 200,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsCDMX = new google.visualization.ColumnChart(document.getElementById('columnchart2Values'));
  chartTotalStudentsCDMX.draw(viewTotalStudentsCDMX, optionsTotalStudentsCDMX);
}

/* ****SEDE LIM**** */
/* -------Total de alumnas por generacion:--------------- */
google.charts.setOnLoadCallback(drawChartTotalStudentsLIM);
function drawChartTotalStudentsLIM() {
  var dataTotalStudentsLIM = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2016-2', numEstudentsLIM20162, 'blue'],
    ['Gen 2016-2', numdesertedLIM20162, 'red'],
    ['Gen 2017-1', numEstudentsLIM20171, 'blue'],
    ['Gen 2017-1', numdesertedLIM20171, 'red'],
    ['Gen 2017-2', numEstudentsLIM20172, 'blue'],
    ['Gen 2017-2', numdesertedLIM20172, 'red'],
  ]);

  var viewTotalStudentsLIM = new google.visualization.DataView(dataTotalStudentsLIM);
  viewTotalStudentsLIM.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsLIM = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 300,
    height: 200,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsLIM = new google.visualization.ColumnChart(document.getElementById('columnchart3Values'));
  chartTotalStudentsLIM.draw(viewTotalStudentsLIM, optionsTotalStudentsLIM);
}

/* ****SEDE SCL**** */
/* -------Total de alumnas por generacion:--------------- */
google.charts.setOnLoadCallback(drawChartTotalStudentsSCL);
function drawChartTotalStudentsSCL() {
  var dataTotalStudentsSCL = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2016-2', numEstudentsSCL20162, 'blue'],
    ['Gen 2016-2', numdesertedSCL20162, 'red'],
    ['Gen 2017-1', numEstudentsSCL20171, 'blue'],
    ['Gen 2017-1', numdesertedSCL20171, 'red'],
    ['Gen 2017-2', numEstudentsSCL20172, 'blue'],
    ['Gen 2017-2', numdesertedSCL20172, 'red'],
  ]);

  var viewTotalStudentsSCL = new google.visualization.DataView(dataTotalStudentsSCL);
  viewTotalStudentsSCL.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsSCL = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 300,
    height: 200,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsSCL = new google.visualization.ColumnChart(document.getElementById('columnchart4Values'));
  chartTotalStudentsSCL.draw(viewTotalStudentsSCL, optionsTotalStudentsSCL);
}
