const express = require("express");
const os = require("node:os");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/status", (_req, res) => {
  res.json({
    status: "Running",
    pod: process.env.HOSTNAME || os.hostname(),
    uptimeSeconds: Math.floor(process.uptime()),
    time: new Date().toLocaleTimeString()
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Pod Pulse is running on port ${port}`);
});