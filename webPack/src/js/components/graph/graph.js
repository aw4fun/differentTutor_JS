import * as d3 from "d3";

const graph = (data) => {
  let x =  data[0].columns[2].slice(1);
  let y =  data[0].columns[1].slice(1);
  let coords = combinator(x,y);

  let line = d3.line()
    .x(function (d) {return d.x})
    .y(function (d) {return d.y});

  let svg = d3.select("svg");

  svg.append("path")
    .attr("d", line(coords))
    .style("stroke", "steelblue")
    .style("stroke-width", 2);
};

function combinator(a, b) {
  let container = [];
  for (let i = 0; i < a.length -1 ; i++) {
    let obj = {};
    obj.x = 15 + a[i];
    obj.y = 375 - b[i];
    container.push(obj);
  }
  return container;
}

export default graph;