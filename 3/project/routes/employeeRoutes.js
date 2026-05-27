const express = require("express");

const router = express.Router();

const controller = require("../controllers/employeeController");

router.get("/", controller.dashboard);

router.get("/add", controller.addPage);

router.post("/add", controller.create);

router.get("/edit/:id", controller.editPage);

router.put("/edit/:id", controller.update);

router.delete("/delete/:id", controller.delete);

module.exports = router;