module.exports = {
    apps: [{
        name: "cost-ipdopd-backend",
      script: "dist/main.js",
      instances: 1,
      exec_mode: "fork",       // use "cluster" if you want multi-core scaling
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
      env_file: ".env"          // loads your .env if using something like dotenv
    }]
  };