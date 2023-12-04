
function handleSubmit() {
    console.log("handling submit");

    let email = document.getElementById("email").value;
    let passord1 = document.getElementById("nyttPassord1").value;
    let passord2 = document.getElementById("nyttPassord2").value;

    if(passord1 === passord2) {

        if (passord1.length > 2) {
            console.log("Vellykett");
        localStorage.setItem("userPassword", passord1)
        localStorage.setItem("userEmail", email)

        window.location.href="http://127.0.0.1:5500/index.html";
        }
        else {
            console.log("Ikke langt nok passord")
        }
        


    }
    else{
        console.log("Ikke samme passord!");
    }
}

function handleLogin() {


    let loginPassword = document.getElementById("passwordCheck").value;
    let loginEmail = document.getElementById("emailCheck").value;

    if(localStorage.getItem("userPassword") === loginPassword && localStorage.getItem("userEmail") === loginEmail) {
        console.log("logget inn");
        window.location.href="http://127.0.0.1:5500/HTML/velkommen.html"
    }   
    else{
        if (localStorage.getItem("userPassword") != loginPassword) {
            console.log("Feil passord");
        }

        if (localStorage.getItem("userEmail") != loginEmail) {
            console.log("Feil epost");
        }
    }
}