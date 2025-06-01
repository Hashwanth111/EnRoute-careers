let cardDiv = document.getElementById("cardDiv");
let deatilsForm = document.getElementById("deatilsForm");
let fullname = document.getElementById("full-name");
let jobtitle = document.getElementById("job-title");
let email = document.getElementById("email");
let locations = document.getElementById("locations");
let skills = document.getElementById("Skills");
let phone = document.getElementById("phone");
let userimage = document.getElementById("userimage");
let reqSkills = document.getElementById("reqSkills");
let tempArr = JSON.parse(localStorage.getItem("tempArr")) || [];
let currentStep = 1;
const totalSteps = 4;
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.step');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const saveBtn = document.querySelector('.save-btn');
function opens() {
    deatilsForm.style.display = "block";
    cardDiv.style.display = "none";
}
function previewImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            document.querySelector('.rightdivimg').style.display = "none";
        }
        reader.readAsDataURL(input.files[0]);
    }
}

let userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

async function saveChanges() {
    const imageFile = userimage.files[0];
    let imageBase64 = "";

    if (imageFile) {
        imageBase64 = await convertToBase64(imageFile);
    }
    let user = {
        id: tempArr[0]?.id || Date.now(),
        fullname: fullname.value.trim(),
        jobtitle: jobtitle.value.trim(),
        email: email.value.trim(),
        locations: locations.value.trim(),
        skills: skills.value.split(",").map(skill => skill.trim()).filter(skill => skill),
        reqSkills: reqSkills.value.split(",").map(skill => skill.trim()).filter(skill => skill),
        phone: phone.value.trim(),
        userimage: imageBase64
    };

    const existingIndex = userDetails.findIndex(u => u.id === user.id);
    if (existingIndex >= 0) {
        userDetails[existingIndex] = user;
    } else {
        userDetails.push(user);
    }

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    window.location.href = "../components/feed.html";
}

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
function updateButtons() {
    if (currentStep === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        saveBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        saveBtn.style.display = 'none';
    }
}

function showStep(step) {
    formSteps.forEach((formStep, index) => {
        formStep.classList.toggle('active', index + 1 === step);
    });

    progressSteps.forEach((progressStep, index) => {
        progressStep.classList.toggle('active', index + 1 <= step);
    });

    currentStep = step;
    updateButtons();
}

function goToNextStep() {
    if (currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}

function goToPrevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}
// Load existing data if available
document.addEventListener('DOMContentLoaded', function() {
    // Your existing DOMContentLoaded code
    
    // Add these new event listeners
    nextBtn.addEventListener('click', goToNextStep);
    prevBtn.addEventListener('click', goToPrevStep);
    
    progressSteps.forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = parseInt(this.getAttribute('data-step'));
            if (stepNumber < currentStep) {
                showStep(stepNumber);
            }
        });
    });
    
    // Initialize
    showStep(1);
});