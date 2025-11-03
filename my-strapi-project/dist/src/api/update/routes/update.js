"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "POST",
            path: "/update",
            handler: "update.update",
            config: {
                auth: { public: false }, // user must be logged in
            },
        },
    ],
};
