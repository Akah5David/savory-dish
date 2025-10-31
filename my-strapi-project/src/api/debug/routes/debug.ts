export default {
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
