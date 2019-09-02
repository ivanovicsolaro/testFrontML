"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const Items_1 = __importDefault(require("./api/Items"));
const server = new server_1.default();
server.start(() => {
    console.log(`Connected to port ${server.port}`);
});
server.app.use('/api', Items_1.default);
