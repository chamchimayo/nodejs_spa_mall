const express = require("express");
const app = express();
const port = 3000;
const connect = require("./schemas");
connect();
app.use(express.json());
const goodsRouter = require('./routes/goods');
const cartsRouter = require('./routes/carts');

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);
app.use("/api", [goodsRouter, cartsRouter]);

app.post("/", (req, res) => {
    console.log(req.body);

    res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.")
});

app.get("/", (req, res) => {
    console.log(req.query);

    // const obj = {
    //     "KeyKey" : "value 입니다.",
    //     "이름입니다." : "이름일까요?",
    // }

    // res.send('정상적으로 반환되었습니다.');
    // res.json(obj);
    res.status(400).json({
        "KeyKey" : "value 입니다.",
        "이름입니다." : "이름일까요?",
    });
});

app.get("/:id", (req, res) => {
    console.log(req.params);

    res.send(":id URI에 정상적으로 반환되었습니다.")
});



app.listen(port, () => {
    console.log("서버가 3000번 포트로 열렸습니다.");
});