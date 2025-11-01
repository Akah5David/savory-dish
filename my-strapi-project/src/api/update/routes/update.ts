export default {
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
