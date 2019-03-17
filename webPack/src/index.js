import './css/main.css';
import './scss/main.scss';
import index from "./js/components/data-service";
import createAxis from './js/components/axis/axisCreator'
import graph from "./js/components/graph/graph";
import chartMaker from "./js/components/chart/chart";

/*getting JSON by http*/
index()
  .then((data)=>{
      // createAxis(data);
      // graph(data);
    chartMaker(timeData);
      console.log(data);
    },
    err => {
      throw new Error(`reject thenErr ${err.message}`);
    })
  .catch(err => {
    console.log(err)
  });
/* worker.js*/

let timeData = [
  {date:"1-May",close:"58.13"},
  {date:"25-Mar",close:"99.00"}
];