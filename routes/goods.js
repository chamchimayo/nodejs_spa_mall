const express = require("express");
const router = express.Router();
const Goods = require("../schemas/goods");

router.get("/goods", (req, res) => {
    res.json({ goods: goods });
});

router.get("/goods/:goodsId", (req, res) => {
    const goods = [
        {
            goodsId: 4,
            name: "상품 4",
            thumbnailUrl:
                "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
            category: "drink",
            price: 0.1,
        },
        {
            goodsId: 3,
            name: "상품 3",
            thumbnailUrl:
                "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
            category: "drink",
            price: 2.2,
        },
        {
            goodsId: 2,
            name: "상품 2",
            thumbnailUrl:
                "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
            category: "drink",
            price: 0.11,
        },
        {
            goodsId: 1,
            name: "상품 1",
            thumbnailUrl:
                "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
            category: "drink",
            price: 6.2,
        },
    ];
    // const goodsId = req.params.goodsId;
    const {goodsId} = req.params;

    const detail = goods.filter((item) => item.goodsId === Number(goodsId));

    res.json({"detail" : detail});
})

// localhost:3000/api/ GET
router.get("/", (req, res) => {
    res.send("goods 기본 url입니다.");
});

// router.get("/:goodId", (req, res) => {
//     const goodId = req.params.goodId;
//     console.log("fffffffff");

//     res.json({ goodId: goodId });
// });

router.post("/goods", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createdGoods });
});

module.exports = router;
