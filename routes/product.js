const express = require("express");
const productData = require("../data/products.json");
//Initialize router object

const router = express.Router();

router.get("/", (req, res) => {
  const { category, minprice } = req.query;
  //apply filter here
  if (category && minprice) {
    const filteredData = productData.filter((product) => {
      return product.category === category && product.price >= minprice;
    });
    res.json(filteredPrice);
  } else if (minprice) {
    const filteredPrice = productData.filter((product) => {
      return product.price >= minprice;
    });
    res.json(filteredPrice);
  } else if (category) {
    const filteredData = productData.filter((product) => {
      return product.category === category;
    });
    res.json(filteredData);
  } else {
    res.json(productData);
  }
});

router.get("/:productID", (req, res) => {
  const { productID } = req.params;
  const product = productData.find((product) => {
    return product.id === Number(productID);
  });
  res.json(product ? product : "Index Not Found");
  console.log(productID);
});

router.post("/", (req, res) => {
  res.send("This api will create product in database");
});
router.put("/:productID", (req, res) => {
  res.send("This api will replace product in database");
});
router.patch("/:productID", (req, res) => {
  res.send("This api will update product in database");
});
router.delete("/:productID", (req, res) => {
  res.send("This api will delete product in database");
});

module.exports = router;
