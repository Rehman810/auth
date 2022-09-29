import { auth} from "./script.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
     console.log('user found', user);
      const uid = user.uid;
      window.location.assign("./Home.html")
    } else {
        console.log('user not found', user)
    }
  });


//   let auth = getAuth(app);

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#signup");
btn.addEventListener("click", signupUser);



async function signupUser() {
    try {
        let user = await createUserWithEmailAndPassword(auth, email.value, password.value);
        verifyEmail();
        location();
    }
    catch (e) {
        swal("Incorrect Email or password!");
    }
}
async function verifyEmail() {
    await sendEmailVerification(auth.currentUser);
    console.log('please check your email address and confirm.')
}
function location(){
        window.location.assign("./verify.html")

}

