export default {
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
