"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./cursos/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/cursos', routes_1.CursoRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map