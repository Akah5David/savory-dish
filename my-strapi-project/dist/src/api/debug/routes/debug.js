"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/debug/jwt",
            handler: "debug.jwtSecret",
            config: {
                auth: false, // make public for debugging
            },
        },
    ],
};
