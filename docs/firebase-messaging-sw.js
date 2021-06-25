// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.344034493973
// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBgkDA5Hv14YNUzVnWiYASMnVtpPNWxk6o",
  authDomain: "taufikakbarmaliki-bba49.firebaseapp.com",
  databaseURL: "https://taufikakbarmaliki-bba49.firebaseio.com",
  projectId: "taufikakbarmaliki-bba49",
  storageBucket: "taufikakbarmaliki-bba49.appspot.com",
  messagingSenderId: "58729208325",
  appId: "1:58729208325:web:870df25351a9d6cad0da6c",
  measurementId: "G-MNR3F0DD4K"
});
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
  messaging.setBackgroundMessageHandler(payload => {
    console.log(payload)
    // const notification = JSON.parse(payload.data.notification);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });