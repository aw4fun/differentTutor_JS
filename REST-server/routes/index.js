let express = require(`express`);
let router = express.Router();

let myData = [
  {id: 1, name: "Petya"},
  {id: 2, name: "Fetya"},
  {id: 3, name: "Setya"},
];

router.get(`/`, function (req,res, next) {
  res.render(`index`, {title: `my first project`});
});

router.get(`/testajax`, function (req,res, next) {
  res.send(myData.stringify());
});

module.exports = router;