import { signOut, getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let logOut = document.querySelector("#logOut");
const auth = getAuth();

logOut.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.assign("./index.html")
    }).catch((error) => {
        swal("Something went wrong");
    });
});


let greet = document.getElementById("Welcome");
greet.innerHTML = `Welcome User!`
