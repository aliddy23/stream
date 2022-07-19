const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.use("/", express.static("./dist"));
app.use("/movies", express.static("/mnt/movies"));
app.use("/tv", express.static("/mnt/tv"));
app.use("/stream", express.static("/mnt/stream"));

app.get("/api", async (req, res) => {
	const files = fs.readdirSync("/mnt/stream");
	let output = [];

	for (let i of files) {
		output.push({
			title: i.substring(0, i.lastIndexOf(".")),
			path: `https://stream.aidanliddy.com/stream/${i}`,
		});
	}

	res.json(output);
});

app.listen(3001);
