require("dotenv").config();
const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
const path = require('path');
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);


// static files accesss
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

console.log(process.env.MONGO_URL);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on PORT NO:  ${port}`));