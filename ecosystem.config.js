module.exports = {
  apps: [
    {
      name: 'ngrok-service',
      script: 'ngrok',
      args: 'http 3001',
      env: {
        NGROK_AUTHTOKEN: '1dARQsaFZoUv7VOAuMk5BZqdel9_6Ro9GVuFaxXd9Z6dkr719' 
      }
    }
  ]
};

