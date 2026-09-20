function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "Abdelrahman" && password === "1234") {

        window.location.href = "home.html";

    } else {

        message.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
        message.style.color = "red";

    }
}


// الضغط على Enter لتسجيل الدخول
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        login();
    }

});
