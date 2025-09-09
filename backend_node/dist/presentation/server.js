"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }
    async start() {
        //* Middlewares
        this.app.use(express_1.default.json()); // raw
        this.app.use(express_1.default.urlencoded({ extended: true })); // x-www-form-urlencoded
        this.app.use((0, compression_1.default)());
        //* Routes
        this.app.use(this.routes);
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
    close() {
        this.serverListener?.close();
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map