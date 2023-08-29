const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getMessaging } = require("firebase-admin/messaging");

const app = initializeApp()
exports.app = app;
exports.auth = getAuth(app)
exports.messaging = getMessaging(app)