
function handleSubmit() {
    console.log("handling submit");

    let email = document.getElementById("email").value;
    let passord1 = document.getElementById("passord1").value;
    let passord2 = document.getElementById("passord2").value;

    if(passord1 == passord2) {
        console.log("Vellykett");
    }
    else{
        console.log("Feil passord");
        
    }
}