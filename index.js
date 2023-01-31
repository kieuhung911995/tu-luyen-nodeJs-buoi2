const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  const data = fs.readFileSync("data.txt");
  console.log(data.toString());
  //   fs.readFile("data.txt", function (err, data) {
  //     if (err) throw err;
  //     console.log(data.toString());
  //   });
  res.send("Read file data.txt thanh cong");
});
app.post("/", (req, res) => {
  fs.appendFileSync("data.txt", " /n noi dung 2 duoc them vao");
  const data = fs.readFileSync("data.txt");
  console.log(data.toString());
  res.send("Them noi dung vao data.txt thanh cong");
});
app.patch("/", (req, res) => {
  fs.writeFileSync("data.txt", " ghi de noi dung 3 vao");
  const data = fs.readFileSync("data.txt");
  console.log(data.toString());
  res.send("Ghi de noi dung thanh cong");
});
app.delete("/", (req, res) => {
  fs.unlinkSync("data.txt");
  if (fs.existsSync("data.txt")) {
    console.log("data.txt van ton tai");
  } else {
    console.log("khong ton tai data.txt");
  }

  res.send("Xoa file data.txt thanh cong");
});
app.listen(3000);
