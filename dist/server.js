"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    return res.json({ message: " here we go ✈" });
});
app.listen(3333, function () {
    console.log("🛫 Server is Up! Using port 3333");
});
