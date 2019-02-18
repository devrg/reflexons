import firebase from "firebase/app";

let config = {
  databaseURL: "https://reflexons-2019.firebaseio.com",
};

firebase.initializeApp(config);

export default firebase;