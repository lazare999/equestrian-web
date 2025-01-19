// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFeIPwIZvsQqGqrw4sImUphEcMVo5Xiko",
  authDomain: "equestrian-web.firebaseapp.com",
  databaseURL: "https://equestrian-web-default-rtdb.firebaseio.com",
  projectId: "equestrian-web",
  storageBucket: "equestrian-web.firebasestorage.app",
  messagingSenderId: "263973641220",
  appId: "1:263973641220:web:68096bb6d76c9f5ad6e951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
