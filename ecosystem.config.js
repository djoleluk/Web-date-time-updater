module.exports = {
  apps: [
    {
      name: 'ngrok-service',
      script: 'ngrok',
      args: 'http --domain=allowing-secondly-jaguar.ngrok-free.app 3001',
      env: {
        NGROK_AUTHTOKEN: '1dARQsaFZoUv7VOAuMk5BZqdel9_6Ro9GVuFaxXd9Z6dkr719' 
      }
    },
    {
      name: 'date-time-updater-service',
      script: './server/server.js', 
      watch: true, 
    },
    {
      name: 'react-app-service',
      script: 'npm',
      args: 'start',
      cwd: './client', 
      watch: true, 
    }
  ]
};



