const fs = require("fs");
const http = require("http");
const os = require("os");

const getIpAddress = () =>
  Object.values(os.networkInterfaces())
    .flatMap((interfaceData) =>
      interfaceData.filter(
        (details) => details.family === "IPv4" && !details.internal
      )
    )
    .map((details) => details.address)[0];


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    var html = fs.readFileSync("./movie.html", "utf8");
    // res.render("test", { html: html });
    res.write(html);
  }
  if (req.url === "/video") {
    const range = req.headers.range;
    const videopath =
      "./Donn (2022) Hindi HQ Dubbed Full Movie HD 1080p x264 - Vegamovies.NL.mkv";
    const videoSize = fs.statSync(
      "./Donn (2022) Hindi HQ Dubbed Full Movie HD 1080p x264 - Vegamovies.NL.mkv"
    ).size;
    const chunk_size = 10 ** 6; //1mb
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunk_size, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/x-matroska",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videopath, { start, end });
    videoStream.pipe(res); //pipe(res);
  }
});
const ipAddress = getIpAddress()
server.listen(5000, ipAddress, () => {
  console.log(`listening to server ${ipAddress}:5000`,);
});
