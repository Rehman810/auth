import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAKY0L33aAPVmIQ-o3WC4VHWU3p-NJjeF8",
  authDomain: "quizapprehman.firebaseapp.com",
  projectId: "quizapprehman",
  storageBucket: "quizapprehman.appspot.com",
  messagingSenderId: "458327578246",
  appId: "1:458327578246:web:457a833bf9f8cebff46307",
  measurementId: "G-WH6F27N5RH"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
