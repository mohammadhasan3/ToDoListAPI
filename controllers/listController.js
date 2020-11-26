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
  const completed = false;
  const newTask = { ...req.body, id , completed};
  listdata.push(newTask);
  res.status(201).json(newTask);
};

exports.taskDelete = (req, res) => {
  const { taskId } = req.params;
  const foundTask = listdata.find((task) => task.id === +taskId);
  if (foundTask) {
    listdata = listdata.filter((task) => task.id !== +taskId);
    res.status(204).end();
    console.log("listdata", listdata);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.taskUpdate = (req, res) => {
  const { taskId } = req.params;
  const foundTask = listdata.find((task) => task.id === +taskId);
  if (foundTask) {
    for (const key in req.body) foundTask[key] = req.body[key];
    // for (const completed in req.body) foundTask[completed] = true;
    res.status(204).end();
  } else {
    res.status(404).json({ message: "task not found" });
  }
};
