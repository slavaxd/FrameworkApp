import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyD-GVRZzEHK_HyVqMe1rDOWmSgBTdpQS4c",
  authDomain: "frameworkapp-e2591.firebaseapp.com",
  databaseURL: "https://frameworkapp-e2591.firebaseio.com",
  projectId: "frameworkapp-e2591",
  storageBucket: "frameworkapp-e2591.appspot.com",
  messagingSenderId: "853171650993"
};
firebase.initializeApp(config);
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('https://www.googleapis.com/auth/drive');
// firebase.auth().signInWithRedirect(provider);
// //add the code below to your previous lines
// firebase.auth().getRedirectResult().then(function (authData) {
//   console.log(authData);
// }).catch(function (error) {
//   console.log(error);
// });

export default firebase;
