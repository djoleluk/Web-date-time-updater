module.exports = {
  apps: [
    {
      name: 'ngrok-service',
      script: 'ngrok',
      args: 'http 3001',
      env: {
        NGROK_AUTHTOKEN: '<your-ngrok-authtoken>'
      }
    }
  ]
};
