let pass1 = "";
let pass2 = "";
const message = document.createElement("span");
message.textContent = "*Passwords do not match"
const box = document.querySelector("#password_box");
message.style.cssText = "position:absolute";
message.style.color = "red";

function checkPassword(event) {
    pass1 = document.getElementById("password").value;
    pass2 = document.getElementById("confirm_password").value;
    if (pass1 != pass2) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm_password").style.borderColor = "red";
        box.appendChild(message);
        return false;
    } else {
        return true;
    };
};
