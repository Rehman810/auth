import { auth } from "./script.js";
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
     console.log('user found', user);
      const uid = user.uid;
      window.location.assign("./Home.html")
    } else {
        console.log('user not found', user)
    }
  });





let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#login");
btn.addEventListener("click", login);

async function login() {
    try {
        let { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log(user);
        location();
    }
    catch (e) {
      swal("Incorrect Email or password!");
    }
}


function location(){
    window.location.assign("./Home.html")
}


let forgot = document.querySelector("#forgot");
forgot.addEventListener("click", () => {
    // import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// const auth = getAuth();
sendPasswordResetEmail(auth, email.value)
.then(() => {
  swal("Check Your Email for reset your password");
})
.catch((error) => {
  console.error("Something went wrong");
});
});



