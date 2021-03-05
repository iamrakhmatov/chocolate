const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());

app.get("/api", (req, res) => {
	res.json({ message: "Hello from Server!" });
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
