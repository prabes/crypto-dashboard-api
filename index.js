const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db");


var corsOptions = {
	origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());

// set port
const PORT = process.env.PORT || 8080;

app.use("/api", (req, res) => res.send('Hey there'));

//listen for requests
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});