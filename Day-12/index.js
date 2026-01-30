const express = require("express");
const app = express();
const main = require("./aiChat");

app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { msg } = req.body;
    const ans = await main(msg);
    res.send(ans);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating response");
  }
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
