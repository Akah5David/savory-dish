"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https://your-frontend-url.com'],
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            origin: ['https://your-frontend-url.com'], // ✅ only allow your frontend
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization'],
            credentials: true,
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
module.exports = [
    // Custom CORS middleware
    async (ctx, next) => {
        const allowedOrigin = "https://your-frontend-url.com"; // your frontend URL
        const requestOrigin = ctx.request.header.origin;
        if (requestOrigin === allowedOrigin) {
            ctx.set("Access-Control-Allow-Origin", allowedOrigin);
            ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            ctx.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
            ctx.set("Access-Control-Allow-Credentials", "true");
        }
        // Handle preflight requests
        if (ctx.method === "OPTIONS") {
            ctx.status = 204;
            return;
        }
        await next();
    },
    // Default Strapi middlewares
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
