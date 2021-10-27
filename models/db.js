// mongodb
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.on("connected", function() {
    console.log("数据库连接成功")
});

mongoose.connection.on("error", function() {
    console.log("数据库连接失败")
});

mongoose.connection.on("disconnected", function() {
    console.log("MongoDB connected disconnected.")
});