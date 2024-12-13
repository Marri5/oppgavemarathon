const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Node.js Express API!");
});

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
