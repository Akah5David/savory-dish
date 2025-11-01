"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async jwtSecret(ctx) {
        // 🚫 Don't return the actual secret
        // ✅ Return a hash or partial string for comparison
        const secret = process.env.JWT_SECRET || "undefined";
        const hash = secret ? secret.slice(0, 8) + "..." : "no secret found";
        ctx.send({ env: process.env.NODE_ENV, jwtPrefix: hash });
    },
};
