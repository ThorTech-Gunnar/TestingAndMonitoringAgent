const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`Monitoring service running on port ${PORT}`);
});
