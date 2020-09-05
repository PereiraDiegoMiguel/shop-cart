const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser);

mongoose.connect("mongodb://localhhost.shop-cart", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: shortid.generate },
  })
);

app.get("/api/products", (req, res) => { });
// parei em 0943