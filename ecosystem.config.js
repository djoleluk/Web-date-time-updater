module.exports = {
  apps: [
    {
      name: 'ngrok-service',
      script: 'ngrok',
      args: 'http 3001',
      env: {
        NGROK_AUTHTOKEN: '1dARQsaFZoUv7VOAuMk5BZqdel9_6Ro9GVuFaxXd9Z6dkr719' // Replace with your actual ngrok authtoken
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


