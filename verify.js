import { app } from "./script.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const auth = getAuth(app);

let verifybtn = document.getElementById("resendEmail");
verifybtn.addEventListener("click", verifyEmail);

async function verifyEmail() {
    await sendEmailVerification(auth.currentUser);
    console.log('we resend your email.')
}
let cont = document.getElementById("cont");
cont.addEventListener("click", () => window.location.assign("./Home.html")
);
