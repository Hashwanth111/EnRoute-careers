
// Your existing JavaScript code remains the same
let Community = document.getElementById("Community");
let Continue = document.getElementById("Continue");
let passwordlabel = document.getElementById("passwordlabel");
let password = document.getElementById("password");
let Remail = document.getElementById("Remail");
let btndivR = document.getElementById("btndivR");
let btndivL = document.getElementById("btndivL");
let loginemail = document.getElementById("loginemail");
let loginpassword = document.getElementById("loginpassword");
let errormessage = document.getElementById("errormessage");
let errorText = document.getElementById("errorText");
let Arr = JSON.parse(localStorage.getItem("RegDetails")) || [];
let tempArr = [];
let id = JSON.parse(localStorage.getItem("RegDetails")) ? (JSON.parse(localStorage.getItem("RegDetails"))).length : 0;

function enter(s) {
    let div = document.getElementById(`${s}-div`);
    div.classList.add('active');
}

function leave(s) {
    let div = document.getElementById(`${s}-div`);
    div.classList.remove('active');
}

function Active() {
    document.querySelector('.auth-options').style.display = 'none';
    document.querySelector('.auth-form').style.display = 'block';
}

function toggleAuth() {
    btndivL.style.display = 'none';
    btndivR.style.display = 'block';
    document.querySelector('.auth-options').style.display = 'block';
    document.querySelector('.auth-form').style.display = 'none';
}

Remail.addEventListener("input", () => {
    Continue.style.display = "block";
    passwordlabel.style.display = "block";
    password.style.display = "block"
})

let obj = {};

function SaveReg() {
    let Emailvalue = Remail.value.trim();
    let passwordvalue = password.value.trim();
    let a = 0;
    errorText.innerHTML = "";
    if (!Emailvalue || !passwordvalue) {
        errorText.innerHTML = "Please fill in all fields.";
        errorText.style.color = "red";
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Emailvalue)) {
        errorText.innerHTML = "Invalid email format.";
        errorText.style.color = "red";
        return;
    }
    if (passwordvalue.length < 6) {
        errorText.innerHTML = "Password must be at least 6 characters long.";
        errorText.style.color = "red";
        return;
    }
    Arr.forEach((i) => {
        if (i.email === Emailvalue) {
            errorText.innerHTML = "Account Already Exists!";
            errorText.style.color = "red";
            a++;
        }
    });
    if (a === 0) {
        obj = {
            id: id,
            email: Emailvalue,
            password: passwordvalue,
            visited: 0
        };
        Arr.push(obj);
        localStorage.setItem("RegDetails", JSON.stringify(Arr));
        Remail.value = "";
        password.value = "";
        setTimeout(() => {
            btndivR.innerHTML = "<h2>Welcome to EnRoute</h2><p>Your career journey starts here...</p>";
        }, 200);
        setTimeout(() => {
            btndivR.innerHTML = `<h2>EnRouting...</h2><p>Please Sign In to continue</p>
                    <button class="auth-btn" onclick="login()">Sign In</button>`;
        }, 2000);
    }
}

let Lemail;
let Lpassword;
let v = 0;
let c = 0;

function Signin() {
    Lemail = loginemail.value;
    Lpassword = loginpassword.value;
    Arr.map((i) => {
        if (i.email == Lemail && i.password == Lpassword) {
            console.log(Arr.indexOf(i));
            c++;
            if (i.visited == 0) {
                window.location.href = "components/form.html";
                i.visited = 1;
                localStorage.setItem("RegDetails", JSON.stringify(Arr));
                obj = {
                    id: i.id,
                    email: i.email,
                    password: i.password
                }
                tempArr.push(obj);
                localStorage.setItem("tempArr", JSON.stringify(tempArr));
            }
            else if (i.visited > 0) {
                obj = {
                    id: i.id,
                    email: i.email,
                    password: i.password
                }
                tempArr.push(obj);
                localStorage.setItem("tempArr", JSON.stringify(tempArr));
                window.location.href = "components/feed.html";
            }
        }
    });
    if (c == 0) {
        errormessage.style.display = "block";
        errormessage.innerHTML = "Login Failed: Email or Password is incorrect";
        errormessage.style.color = "red";
    }
}

function login() {
    btndivR.style.display = "none";
    btndivL.style.display = "block";
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    btndivL.style.display = 'none';
    document.querySelector('.auth-form').style.display = 'none';
});