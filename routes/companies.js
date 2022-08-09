/** Routes for companies. */


const express = require("express");
const slugify = require("slugify");
const ExpressError = require("../expressError")
const db = require("../db");

let router = new express.Router();


router.get('/', (req, res) => {
    return res.json({companies: result.rows})
})

module.exports = router;