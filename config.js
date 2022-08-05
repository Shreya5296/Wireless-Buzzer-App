import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhtyEEIc1m1Ntz2JQWPi01_6fx3vPSa-U",
  authDomain: "wireless-buzzer-app-2b389.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-2b389-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-app-2b389",
  storageBucket: "wireless-buzzer-app-2b389.appspot.com",
  messagingSenderId: "772340762211",
  appId: "1:772340762211:web:28f664e78fe4a3793eda56"
};


  firebase.initializeApp(firebaseConfig);


export default firebase.database();