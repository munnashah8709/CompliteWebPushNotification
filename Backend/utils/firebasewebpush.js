const admin = require('firebase-admin');
const serviceAccount = require('../Components/connections/firebase-admin-sdk-config.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

    
    function sendPushNotification(deviceToken, title, body) {
        const messaging = admin.messaging();
        const message = {
          notification: {
            title: title,
            body: body,
          },
          token: deviceToken, // Use "token" instead of "DeviceTocken"
        };
        
        messaging.send(message)
          .then((response) => {
            console.log('Successfully sent message:', response);
          })
          .catch((error) => {
            console.error('Error sending message:', error);
          });
    }
module.exports = {
  sendPushNotification
};