const express = require('express');
const api = require('./routes/api');

const app = express();
const port = 3000;

// 静的ファイルの場所を指定する
app.use(express.static('public'));

// /apiというパス名をルーティング用のオブジェクトに紐づける
app.use('/api', api);

app.get('/', (req, res, next) => {
  res.end("Top Page");
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
