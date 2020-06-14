module.exports = {
  apps: [
    {
      name: "API",
      script: "./dist/index.js",
      watch: "./dist",
      node_args: "-r dotenv/config",
      max_restarts: 1,
    },
  ],
};
