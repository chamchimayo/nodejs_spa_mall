const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("안녕하세요!")
})

app.listen(3000, () => {
    console.log("서버가 3000번 포트로 열렸습니다.");
})