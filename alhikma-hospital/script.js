function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

function bookAppointment() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;

    if(name === "" || email === "" || date === "") {
        document.getElementById("message").innerText = "Please fill all fields.";
    } else {
        document.getElementById("message").innerText = "Appointment submitted successfully!";
    }
}
