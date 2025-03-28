function validateLogin() {
    var phone = document.getElementById("phone").value;
    var errorMsg = document.getElementById("error-msg");

    if (phone.length !== 10 || isNaN(phone)) {
        errorMsg.textContent = "Please enter a valid 10-digit phone number!";
    } else {
        errorMsg.textContent = "";
        alert("Login Successful!");
    }
}
