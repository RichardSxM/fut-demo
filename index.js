import express from "express";
import fileupload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
const util = require("util");

// const parentDir = path.normalize(__dirname + "/..");
const app = express();
app.set("view engine", "ejs");

cloudinary.config({
  cloud_name: "deqebw9tg",
  api_key: "691689396948581",
  api_secret: "wDpUB34RM__ZS4yGP9cGx4dxWos",
});
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render("index.ejs", { picUrl: null });
});

app.post("/", function (req, res, next) {
  const file = req.files.file;
  cloudinary.uploader.upload(
    file.tempFilePath,
    {
      format: "png",
      background_removal: "cloudinary_ai",
      notification_url: "https://581f05c72c64.ngrok.io/hook",
    },
    function (err, result) {
      const picUrl = result.url;
      res.render("index.ejs", { picUrl: picUrl });
      console.log(util.inspect(result, false, null));
    }
  );
});

app.post("/hook", function (req, res) {
  console.log(req.body);
  res.json(req.body);
  if (req.body.info_status === "complete") {
    console.log(req.body.secure_url);
  }
});

app.listen(3000, () => {
  console.log("Started on port: 3000");
});
