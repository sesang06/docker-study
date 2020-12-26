'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();


app.get("/", (req, res) => {
    res.json({
        message: "Success",
    });
});

app.get("/hello", (req, res) => {
    res.json({
        message: "hello",
    });
});

// 테스트용
app.get("/test", (req, res) => {
    res.json({
        message: "Test",
    });
});

app.listen(3000, () => {
    console.log("Server starting on port 80");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);