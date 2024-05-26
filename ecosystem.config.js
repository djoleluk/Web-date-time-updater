module.exports = {
  apps: [
    {
      name: 'ngrok-service',
      script: 'ngrok',
      args: 'http --domain=allowing-secondly-jaguar.ngrok-free.app 3001',
      env: {
        NGROK_AUTHTOKEN: 'your_ngrok_auth_token_here' // Replace with your actual ngrok auth token
      }
    },
    {
      name: 'date-time-updater-service',
      script: './server/server.js', // Adjust this according to the location of your server script
      watch: true, // Optional: restart the service on changes
    },
    {
      name: 'react-app-service',
      script: 'npm',
      args: 'start',
      cwd: './client', // Change to the client directory to run the React app
      watch: true, // Optional: restart the service on changes
    }
  ]
};



