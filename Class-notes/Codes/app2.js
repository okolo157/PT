
const fs = require("fs").promises;
const { isUtf8 } = require("buffer");
const express = require("express");
const { config } = require("process");
const app = express();
app.use(express.json());
app.get("/api/error", async (req,res) =>{
  try{
    const logcontent = await fs.readFile("app.log","utf8");
    // process content
    const errorlogs = logcontent
    .split("\n")
    .filter((line) => line.includes("ERROR"));

    //write error logs to new file
    await fs.writeFile("errors.log", errorlogs.join("/n"));
    return res.json({message: "files exported sucessfully"});
    
    console.log("Error logs extracted successfully");
  }catch (error) {
      console.error("Failed to process log file:", error );

    }
});


const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server running on port${PORT}`);
});