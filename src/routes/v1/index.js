const router = require("express").Router();

const { welcome } = require("../../controllers");

router.get("/welcome", welcome);

module.exports = router;
