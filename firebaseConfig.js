import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDzcmgMSkFM78yN_30VATertEX6eHXS76w",
  authDomain: "volito-task-e86b7.firebaseapp.com",
  projectId: "volito-task-e86b7",
  storageBucket: "volito-task-e86b7.appspot.com",
  messagingSenderId: "317526569270",
  appId: "1:317526569270:web:343bdc13a42fea8df90397",
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
