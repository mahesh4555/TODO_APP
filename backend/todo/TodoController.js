var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// import { TodoData, TodoTabs } from "./TodoTabs";

var TodoData = require("./TodoData");
var TodoTabs = require("./TodoTabs");

// CREATES A NEW USER
router.post("/addData", function (req, res) {
  console.log("POST request");
  console.log(req.body);
  TodoData.create(
    {
      currentState: req.body.currentState,
      name: req.body.name,
      content: req.body.content,
    },
    function (err, data) {
      if (err) {
        console.log("err:", err);
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      }
      console.log("DATA :", data);
      res.status(200).send(data);
    }
  );
});

// CREATES A NEW USER
router.post("/addTab", function (req, res) {
  console.log("POST request");
  console.log(req.body);
  TodoTabs.create(
    {
      state: req.body.state,
      label: req.body.label,
    },
    function (err, data) {
      if (err) {
        console.log("err:", err);
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      }

      res.status(200).send(data);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/getData", function (req, res) {
  console.log("GET request data");
  TodoData.find({}, function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.status(200).send(data);
  });
});

router.get("/getTabs", function (req, res) {
  console.log("GET request tabs");
  TodoTabs.find({}, function (err, tabs) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(tabs);
  });
});

// // GETS A SINGLE USER FROM THE DATABASE
// router.get("/:id", function (req, res) {
//   User.findById(req.params.id, function (err, user) {
//     if (err)
//       return res.status(500).send("There was a problem finding the user.");
//     if (!user) return res.status(404).send("No user found.");
//     res.status(200).send(user);
//   });
// });

// // DELETES A USER FROM THE DATABASE
// router.delete("/:id", function (req, res) {
//   User.findByIdAndRemove(req.params.id, function (err, user) {
//     if (err)
//       return res.status(500).send("There was a problem deleting the user.");
//     res.status(200).send("User: " + user.name + " was deleted.");
//   });
// });

// UPDATES A SINGLE DATA IN THE DATABASE
router.patch("/updateState/:id", async function (req, res) {
  //db.city.update({_id:ObjectId("584a13d5b65761be678d4dd4")}, {$set: {"citiName":"Jakarta Pusat"}})

  // User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (
  console.log("PUT request");
  console.log("req.params.id :", req.params.id);
  console.log("req.body.changedState :", req.body.changedState);

  try {
    const filter = { _id: req.params.id };
    var todoData = await TodoData.findOne(filter);
    await console.log(todoData);
    todoData.currentState = req.body.changedState;
    await todoData.save();
    console.log(todoData);
    res.json(todoData);
  } catch (err) {
    res.send(err);
  }

  // User.findByIdAndUpdate(
  //   req.params.id,
  //   { $set: { currentState: req.body.changedState } },
  //   function (err, user) {
  //     if (err) return res.status(500).send(err);
  //     res.status(200).send(user);
  //   }
  // );
  // console.log("req.params.id :", req.params.id);
  // console.log("req.body :", req.body);
  // res.status(200).send({ A: "Success" });
});

module.exports = router;
