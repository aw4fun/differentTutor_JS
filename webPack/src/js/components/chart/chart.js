import * as d3 from "d3";

function chartMaker(data) {
  let margin = {
    top:20,
    right:20,
    bottom:30,
    left:50
  };

  let width = 500 - margin.left - margin.right;
  let height = 500 - margin.top - margin.bottom;

  const parseTime = d3.timeParse("%d-%b");

  let xRange = d3.scaleTime().range([0, width]);
  let yRange = d3.scaleLinear().range([height, 0]);


  let valueLine = d3.line()
    .x(function (d) { return xRange(d.date);})
    .y(function (d) { return yRange(d.close);});

  let svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  data.forEach(function (d) {
    d.date = parseTime(d.date);
    d.close = +d.close;
  });

  xRange.domain(d3.extent(data, function (d) { return d.date;}));
  yRange.domain([0, d3.max(data, function (d) { return d.close;})]);

  svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", valueLine);


  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xRange).ticks(6));

  svg.append("g")
    .call(d3.axisLeft(yRange).ticks(6));
}

export default chartMaker;