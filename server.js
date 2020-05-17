const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "960101",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "김유신",
      birthday: "960218",
      gender: "남자",
      job: "군인",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "이순신",
      birthday: "960328",
      gender: "여자",
      job: "기자",
    },
    {
      id: 4,
      image: "https://placeimg.com/64/64/4",
      name: "허준",
      birthday: "960331",
      gender: "여자",
      job: "의사",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
