export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https://funny-authority-3c58098ae3.strapiapp.com",
            "https://savory-dish-hi42-david-akahs-projects.vercel.app",
            "https:",
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true, // ✅ Make sure it's explicitly enabled
      origin: [
        "https://savory-dish-hi42-david-akahs-projects.vercel.app",
        "https://savory-dish-hi42.vercel.app", // add main Vercel domain too
        "http://localhost:3000",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true, // ✅ helps debug preflight
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
