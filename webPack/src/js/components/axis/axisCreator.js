import * as d3 from "d3";

/* axes */
function createAxis(data) {

  let height = 400;
  let width = 400;
  let margin = 25;
  let offset = 50; // смещение между значениями на осях
  let axisWidth = width - 2 * margin;
  let axisHeight = width - 2 * margin;
  let svg; // object that contain render

  svg = d3.select("body").append("svg")
    .attr("class", "axis")
    .attr("width", width)
    .attr("height", height);

  /*data on axe*/
  let scaleX = d3.scaleLinear()
    .domain(dataTranslatorX(data))
    .range([0, axisWidth]);
  let scaleY = d3.scaleLinear()
    .domain([250, 0])
    .range([0, axisHeight]);
  /*data on axe*/

  /*create axe*/
  let axesX = d3.axisBottom(scaleX).ticks(6);

  let axesY = d3.axisLeft(scaleY).ticks(6);
  /*create axe*/

  svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate("+margin+","+(height - margin)+")")
    .call(axesX);

  svg.append("g")
    .attr("class", "y-axis")
    .attr("transform", "translate("+margin+","+margin+")")
    .call(axesY);
}
/* axes */

/* date translator */
function dataTranslatorX(data) {
  let date = data[0].columns[0];
  let firstTest = new Date(date[1]);
  let lastTest = new Date(date[date.length -1]);
  console.log(date.slice(1));
  return [firstTest.getDate(), lastTest.getDate()];
}
/* data translator */

export default createAxis;