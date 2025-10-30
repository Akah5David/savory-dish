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
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["https://savory-dish-hi42-david-akahs-projects.vercel.app", "http://localhost:3000"], // ✅ only allow your frontend
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
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
