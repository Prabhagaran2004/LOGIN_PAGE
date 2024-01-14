function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add your authentication logic here (e.g., check against a predefined username and password)
    if (username === "user" && password === "password") {
        document.getElementById("loginMessage").textContent = "Login successful!";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password. Please try again.";
    }
}


function changePass(){
    const newPass = document.getElementById("newPass").value;
    const reNewPass = document.getElementById("reNewPass").value;
    const changedPass = newPass;
    if(newPass && reNewPass && newPass === reNewPass){
        alert("password chagned successfully");  
    }
    else{
        alert("password doesn't match")
    }

}