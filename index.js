const express = require("express");

const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
const errorRouter = require("./routes/error");
const PORT = 5000;
const app = express();

//Link the router files

app.use(homeRouter);
app.use("/api/products", productRouter);
app.use(errorRouter);

app.listen(PORT, () => {
  console.log(`Created a portal of${PORT}`);
});
