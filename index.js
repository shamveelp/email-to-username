
const email = document.getElementById("email");
const submit = document.getElementById("submit");

submit.onclick = function(){
    let username = email.value.slice(0,email.value.indexOf("@"))

    document.getElementById("username").textContent = `username: ${username}`
}