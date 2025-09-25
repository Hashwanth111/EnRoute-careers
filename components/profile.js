let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let NavUl = document.getElementById("Nav-ul");
let tempArr = JSON.parse(localStorage.getItem("tempArr"));
let index = tempArr[0].id;
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let renderArr = [userDetails[index]];
let main = document.getElementById("main");
let editEducationBtn = document.getElementById("editEducationBtn");
let search=document.getElementById("search")
search.addEventListener("click",()=>{
    window.location.href='/components/serch.html'
})
let Nav_items_ul = [
    {
        title: "Home",
        icon: "fa-house",
        href: "/components/feed.html"

    },
    {
        title: "Network",
        icon: "fa-users",
        href: "/components/network.html#"
    },
    {
        title: "Jobs",
        icon: "fa-suitcase",
        href: "/components/jobscard.html#"
    },
    {
        title: "Filter",
        icon: "fa-filter",
        href:'/components/index.html'
        
    }
]
Nav_items_ul.map((i) => {
    NavUl.innerHTML += `<li class="Nav-ul-lis" id="${i.title}">
                            <a href="${i.href?`${i.href}`:"#"}" class="Nav-ul-lis-a" onclick="${i.title}()">
                            <div class="Nav-ul-lis-icon-div">
                                <i class="fa-solid ${i.icon} fa-1x i"></i>
                            </div>
                            <span class="Nav-ul-lis-span">${i.title}</span>
                        </a>
                    </li>`
});

//rendering profile
let Profileimage=document.getElementById("Profileimage");
function render() {
    renderArr.map((i) => {
        main.innerHTML = `<div class="userprofile-div" id="userProfileContainer">
        <div class="userprofile-div-left" id="profileImageContainer">
            <img src="${i.userimage}" alt="Profile-image" class="Profile-image" id="profileImage1">
        </div>
        <div class="userprofile-div-right" id="profileInfoContainer">
            <div id="basicInfo">
                <h4 id="userName">${i.fullname}</h4>
                <h5 id="userDegree">B.Tech/B.E</h5>
                <p id="userCollege">MLR Institute of Technology,${i.location}</p>
            </div>
            <hr>
            <div class="userprofile-div-right-bio" id="bioDetails">
                <div class="userprofile-div-right-bio-left" id="contactInfo">
                    <div id="userLocation"><i class="fa-solid fa-location-dot"></i>Hyderabad</div>
                    <div id="userPhone"><i class="fa-solid fa-phone-volume"></i>${i.phone}</div>
                    <div id="userEmail"><i class="fa-solid fa-envelope"></i>${i.email}</div>
                </div>
                <div class="userprofile-div-right-bio-right" id="personalInfo">
                    <div id="userGender"><i class="fa-solid fa-venus-mars"></i>Male</div>
                    <div id="userDob"><i class="fa-solid fa-cake-candles"></i>2nd July 2002</div>
                </div>
            </div>
        </div>
    </div>`
    Profileimage.src=`${i.userimage}`
    })
}
render();
//editEducation
let empty = document.getElementById("empty");
editEducationBtn.addEventListener("click", (e) => {
    empty.style.display="flex"
    empty.innerHTML = `<div class="education-details-form" id="educationFormContainer">
    <div class="form-title-section" id="educationFormHeader">
        <h1 class="main-form-title" id="educationFormMainTitle">Education</h1>
        <p class="form-subtitle" id="educationFormSubtitle">Adding your educational details help recruiters know your value as a potential candidate</p>
    </div>
    <form id="educationQualificationForm">
        <div class="form-field-group" id="qualificationFieldGroup">
            <h2 class="field-group-title" id="qualificationTitle">Qualification/Describe</h2>
            <div class="option-list" id="qualificationOptions">
                <div class="option-item" id="graduateOption">
                    <input type="radio" id="graduateRadio" name="qualification" 
                           class="option-radio" value="graduate" checked>
                    <label for="graduateRadio" class="option-label">Graduate/Diploma</label>
                </div>
                <div class="option-item" id="postgraduateOption">
                    <input type="radio" id="postgraduateRadio" name="qualification" 
                           class="option-radio" value="postgraduate">
                    <label for="postgraduateRadio" class="option-label">Post Graduate</label>
                </div>
                <div class="option-item" id="doctorateOption">
                    <input type="radio" id="doctorateRadio" name="qualification" 
                           class="option-radio" value="doctorate">
                    <label for="doctorateRadio" class="option-label">Doctorate</label>
                </div>
            </div>
        </div>
        <div class="form-divider" id="formSectionDivider"></div>
        <div class="form-actions" id="educationFormActions">
            <button type="button" class="action-button secondary-button" id="cancelEducationForm">Cancel</button>
            <button type="submit" class="action-button primary-button" id="submitEducationForm" onclick="eduSave()">Save</button>
        </div>
    </form>
</div>`
});
let submitEducationForm=document.getElementById("submitEducationForm");
function eduSave(){
    console.log("save");
}