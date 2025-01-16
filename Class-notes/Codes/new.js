const express = require("express");
const fs = require("fs").promises;
const app = express();
app.use(express.json());

app.get("/api/error", async (req, res) => {
  try {
    // Read log file
    const logContent = await fs.readFile("app.log", "utf8");

    // Process content
    const errorLogs = logContent
      .split("\n")
      .filter((line) => line.includes("ERROR"));

    // Write error logs to new file
    await fs.writeFile("errors.log", errorLogs.join("\n"));
    res.json("file extracted successful");

    console.log("Error logs extracted successfully");
  } catch (error) {
    console.error("Failed to process log file:", error);
  }
});
PORT = 3000;
app.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
});

// function greet(name, callback) {
//   let age = 10;
//   console.log(`Hello, ${name}!`);
//   callback(age);
// }
// function displayAge(value) {
//   console.log(`Your age is: ${value}`);
// }

// great("alice", displayAge);
