
const jobsArr = [
    {
        "id": 0,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
            "alt": "Amazon logo",
            "id": "companyimg"
        },
        "title": "Software Dev Engineer I",
        "companyInfo": {
            "name": "Amazon",
            "separator": "·",
            "location": "Hyderabad, Telangana, India"
        },
        "jobDetails": {
            "reposted": "Reposted 1 week ago",
            "applicants": "Over 100 people clicked apply",
            "employmentType": "Full-time"
        },
        "postedTime": "1 week ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 1,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
            "alt": "Microsoft logo",
            "id": "companyimg"
        },
        "title": "Backend Engineer Intern",
        "companyInfo": {
            "name": "Microsoft",
            "separator": "·",
            "location": "Remote"
        },
        "jobDetails": {
            "duration": "6-Month Internship",
            "applicants": "50+ applicants",
            "employmentType": "Internship"
        },
        "postedTime": "3 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 2,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
            "alt": "IBM logo",
            "id": "companyimg"
        },
        "title": "Data Science Associate",
        "companyInfo": {
            "name": "IBM",
            "separator": "·",
            "location": "Bangalore, India (Hybrid)"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "50+ applicants"
        },
        "postedTime": "5 hours ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 3,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
            "alt": "Apple logo",
            "id": "companyimg"
        },
        "title": "iOS Developer (Entry Level)",
        "companyInfo": {
            "name": "Apple",
            "separator": "·",
            "location": "Chennai, India"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "50+ applicants",
            "reposted": "Reposted yesterday"
        },
        "postedTime": "1 day ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 4,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/200px-LinkedIn_Logo.svg.png",
            "alt": "LinkedIn logo",
            "id": "companyimg"
        },
        "title": "UX Design Intern",
        "companyInfo": {
            "name": "LinkedIn",
            "separator": "·",
            "location": "Remote"
        },
        "jobDetails": {
            "duration": "3-Month Internship",
            "applicants": "350+ applicants",
            "employmentType": "Internship"
        },
        "postedTime": "Just now",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 5,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png",
            "alt": "Microsoft logo",
            "id": "companyimg"
        },
        "title": "Cloud Solutions Architect",
        "companyInfo": {
            "name": "Microsoft",
            "separator": "·",
            "location": "Pune, India"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "30+ applicants"
        },
        "postedTime": "1 week ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 6,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
            "alt": "Google logo",
            "id": "companyimg"
        },
        "title": "Machine Learning Intern",
        "companyInfo": {
            "name": "Google",
            "separator": "·",
            "location": "Bangalore, India"
        },
        "jobDetails": {
            "duration": "6-Month Internship",
            "applicants": "50+ applicants",
            "employmentType": "Internship"
        },
        "postedTime": "2 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 7,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png",
            "alt": "React logo",
            "id": "companyimg"
        },
        "title": "Frontend Developer (React)",
        "companyInfo": {
            "name": "TechStart",
            "separator": "·",
            "location": "Remote"
        },
        "jobDetails": {
            "employmentType": "Contract",
            "applicants": "70+ applicants",
            "duration": "6-Month Project"
        },
        "postedTime": "1 hour ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 8,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png",
            "alt": "AWS logo",
            "id": "companyimg"
        },
        "title": "DevOps Engineer",
        "companyInfo": {
            "name": "AWS",
            "separator": "·",
            "location": "Hyderabad, India"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "20+ applicants"
        },
        "postedTime": "3 days ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 9,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo.svg/200px-Adobe_Systems_logo.svg.png",
            "alt": "Adobe logo",
            "id": "companyimg"
        },
        "title": "UI/UX Design Intern",
        "companyInfo": {
            "name": "Adobe",
            "separator": "·",
            "location": "Remote"
        },
        "jobDetails": {
            "duration": "3-Month Internship",
            "applicants": "150+ applicants",
            "employmentType": "Internship"
        },
        "postedTime": "1 day ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    }
]
let joblistingul = document.getElementById("job-listing-ul");
function creatingJob(){
    jobsArr.map((i) => {
    let li = document.createElement("li");
    li.setAttribute("onclick", `cardclick(${i.id})`)
    li.innerHTML= `<div class="job-listing-wrap">
        <div class="job-listing-image" >
            <img src="${i.image.src}" alt="company img" id="companyimg">
        </div>
    <div class="job-listing">
        <div class="job-title">${i.title}, University Graduate, 2026</div>
        <div class="company-info">
            <span class="company-name">${i.companyInfo.name}</span>
            <span class="separator">·</span>
            <span class="location">${i.companyInfo.location}</span>
        </div>
        <div class="alumni-badge">${i.jobDetails.applicants}</div>
        <div class="promoted-tag">${i.postedTime}</div>
    </div>
</div>`
    joblistingul.appendChild(li);
});
}
creatingJob();
let enlargeddiv = document.getElementById("enlargeddiv")
function cardclick(id) {
    enlargeddiv.innerHTML = `<div class="job-card">
                <div class="company-name"><h2>${jobsArr[id].companyInfo.name}</h2></div>
                <div class="job-title">${jobsArr[id].title} <span class="salary-indicator"></span></div>
                <div class="job-meta">
                    <span>${jobsArr[id].companyInfo.location}</span>
                    <span>·</span>
                    <span>${jobsArr[id].postedTime}</span>
                    <span>·</span>
                    <span>${jobsArr[id].jobDetails.applicants}</span>
                </div>
                <div class="job-type">✔ ${jobsArr[id].jobDetails.employmentType}</div>
                <div class="job-actions">
                    <button class="apply-btn" id="abtn${id}" onclick="apply(${id})">Apply</button>
                    <button class="save-btn" id="btn${id}" onclick="save(${id})">Save</button>
                </div>
                 <!-- Web Developer Intern Job Card -->
            <div class="job-card" id="job-card">
                <div class="job-section">
                    <h1>About the job</h1>
                    <h2>Job Title:${jobsArr[id].title}</h2>
                    <div class="highlight-box">
                        <div><strong>Location:</strong> ${jobsArr[id].companyInfo.location}</div>
                        <div><strong>Duration:</strong>${jobsArr[id].jobDetails.employmentType}</div>
                    </div>
                    <h2>About The Role</h2>
                    <p>We're looking for a creative and driven <strong> ${jobsArr[id].title} </strong> to join our team. If you love
                        building beautiful landing pages, converting Figma designs into functional websites, and working
                        with no-code tools like Webflow and Framer – we want to hear from you!</p>
                    <h2>Responsibilities</h2>
                    <ul>
                        <li>Convert Figma designs into responsive landing pages and websites</li>
                        <li>Build and maintain websites using Framer, Webflow, and similar tools</li>
                        <li>Work with CMS platforms to manage and update content</li>
                        <li>Collaborate with designers, marketers, and developers to launch high-quality pages</li>
                        <li>Optimize web pages for performance, speed, and SEO</li>
                    </ul>
                    <h2>Requirements</h2>
                    <p>[Requirements would go here]</p>
                    <ul>
                        <li>Convert Figma designs into responsive landing pages and websites</li>
                        <li>Build and maintain websites using Framer, Webflow, and similar tools</li>
                        <li>Work with CMS platforms to manage and update content</li>
                        <li>Collaborate with designers, marketers, and developers to launch high-quality pages</li>
                        <li>Optimize web pages for performance, speed, and SEO</li>
                    </ul>
                </div>
                <div
                </div>
            </div>
            </div>`
        SaveButtons(); 
        applybuttons();
};
let savedArr = JSON.parse(localStorage.getItem("savedArr")) || [];
let savedbtn = JSON.parse(localStorage.getItem("savedbtn")) || [];
// let bell=document.getElementById("bell");
// console.log(bell);

function apply(id) {
        if (!appliedArr.includes(id)) {
            appliedArr.push(id);
            localStorage.setItem("appliedArr", JSON.stringify(appliedArr));
            appliedbtn.push("abtn"+id);
            localStorage.setItem("appliedbtn", JSON.stringify(appliedbtn));
            bell.classList.add("fa-shake");
            bell.style.color="red"
        }
        applybuttons();
    }
let appliedArr = JSON.parse(localStorage.getItem("appliedArr")) || [];
let appliedbtn = JSON.parse(localStorage.getItem("appliedbtn")) || [];
function save(id) {
    if (!savedArr.includes(id)) {
        savedArr.push(id);
        localStorage.setItem("savedArr", JSON.stringify(savedArr));
        savedbtn.push("btn"+id);
        localStorage.setItem("savedbtn", JSON.stringify(savedbtn));
        bell.classList.add("fa-shake");
        bell.style.color="red"
    }
    SaveButtons(); 
}
//rendering Saved text!!
function SaveButtons() {
    savedbtn.forEach(id =>{
        const btn = document.getElementById(id);
        if(btn)
            {
                btn.textContent = "Saved!!";
                btn.style.color="green";
                btn.style.border="1px solid green";
            }
        });
    }
//rendering applied text!!
function applybuttons(){
    appliedbtn.forEach(id =>{
        const btn = document.getElementById(id);
        if (btn)
            {
                btn.textContent = "Applied!!";
                btn.style.color="white";
                btn.style.backgroundColor="rgba(255, 255, 255, 0.1),";
            }     
        });
    }
let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let MainDivScrollUl=document.getElementById("Main-Div-scroll-ul");
let NavUl = document.getElementById("Nav-ul");
let tempArr=JSON.parse(localStorage.getItem("tempArr")) || [];
let Profileimage=document.getElementById("Profileimage");
let search=document.getElementById("search")
search.addEventListener("click",()=>{
    window.location.href='http://127.0.0.1:5500/components/serch.html'
})
let Nav_items_ul = [
    {
        title: "Home",
        icon: "fa-house",
        href: "http://127.0.0.1:5500/components/feed.html"

    },
    {
        title: "Network",
        icon: "fa-users",
        href: "http://127.0.0.1:5500/components/network.html#"
    },
    {
        title: "Jobs",
        icon: "fa-suitcase",
        href: "http://127.0.0.1:5500/components/jobscard.html#"
    },
    {
        title: "Filter",
        icon: "fa-filter",
        href:'http://127.0.0.1:5500/components/index.html'
        
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
if(window.location.href=='http://127.0.0.1:5500/components/jobscard.html#')
{
    document.getElementById("Jobs").style.borderBottom="5px solid black";
    document.getElementById("Jobs").style.color="black";
}
//rendering profile
let index = tempArr[0].id;
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let renderArr = [userDetails[index]];
let navimg=document.getElementById("navimg");
navimg.src=`${renderArr[0].userimage}`;