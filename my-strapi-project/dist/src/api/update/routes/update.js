"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "PUT",
            path: "/update",
            handler: "update.update",
            config: {
                auth: { public: false }, // user must be logged in
            },
        },
    ],
};
