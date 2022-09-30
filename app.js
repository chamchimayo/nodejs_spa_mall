const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods')

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);

app.listen(port, () => {
    console.log("서버가 3000번 포트로 열렸습니다.");
})