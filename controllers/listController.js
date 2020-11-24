let listdata = require("../listdata");

exports.viewList = (req, res) => {
  try {
    res.json(listdata);
  } catch (error) {
    console.error("ListStore -> fetchlist -> error", error);
  }
};

exports.taskCreate = (req, res) => {
  const id = listdata[listdata.length - 1].id + 1;
  const newTask = { ...req.body, id };
  listdata.push(newTask);
  res.status(201).json(newTask);
};

// exports.funkoDelete = (req, res) => {
//   const { funkoId } = req.params;
//   const foundFunko = funkos.find((funko) => funko.id === +funkoId);
//   if (foundFunko) {
//     funkos = funkos.filter((funko) => funko.id !== +funkoId);
//     res.status(204).end();
//     console.log("funkos", funkos);
//   } else {
//     res.status(404).json({ message: "Funko not found" });
//   }
// };

// exports.funkoUpdate = (req, res) => {
//   const { funkoId } = req.params;
//   const foundFunko = funkos.find((funko) => funko.id === +funkoId);
//   if (foundFunko) {
//     for (const key in req.body) foundFunko[key] = req.body[key];
//     foundFunko.slug = slugify(req.body.name, { lower: true });
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Funko not found" });
//   }
// };
