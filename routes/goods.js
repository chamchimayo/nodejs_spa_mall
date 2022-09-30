const { response } = require("express");
const express = require("express");
const router = express.Router();

// localhost:3000/api/ GET
router.get('/', (req, res) => {
    res.send("default url for goods.js GET Method");
})

// localhost:3000/api/about GET
router.get('/about', (req, res) => {
    res.send("goods.js about PATH");
})

module.exports = router;