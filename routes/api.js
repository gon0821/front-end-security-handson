// Expressのルーティング用のオブジェクトを作る
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('X-Timestamp', Date.now());
  let message = req.query.message;
  const lang = req.headers['x-lang'];

  if (message === "") {
    res.status(400);
    if (lang === 'en') {
      message = "message is empty!";
    } else {
      message = "messageの値が空です！";
    }
  }
  res.send({ message});
});

// POSTメソッドの処理を追加
router.use(express.json());
router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

// 他ファイルから読み込めるようにエクスポートする
module.exports = router;
