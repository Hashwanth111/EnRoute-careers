let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let NavUl = document.getElementById("Nav-ul");
let tempArr = JSON.parse(localStorage.getItem("tempArr"));
let index = tempArr[0].id;
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let renderArr = [userDetails[index]];
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
                            <a href="${i.href ? `${i.href}` : "#"}" class="Nav-ul-lis-a" onclick="${i.title}()">
                            <div class="Nav-ul-lis-icon-div">
                                <i class="fa-solid ${i.icon} fa-1x i"></i>
                            </div>
                            <span class="Nav-ul-lis-span">${i.title}</span>
                        </a>
                    </li>`
});
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
//rendering profile
let navimg = document.getElementById("navimg");
navimg.src = `${renderArr[0].userimage}`;

//rendering saved jobs in ul
// console.log(jobsArr[savedArr[0]]);
// Get saved and applied jobs from localStorage
let savedArr = JSON.parse(localStorage.getItem("savedArr")) || [];
let appliedArr = JSON.parse(localStorage.getItem("appliedArr")) || [];

// Display saved jobs
let savedJobsContainer = document.getElementById("SavedJobs");
savedArr.forEach((jobIndex) => {
    createJobListing(jobIndex, savedJobsContainer);
     localStorage.setItem("savedbtn", JSON.stringify([]));
});

// Display applied jobs
let appliedJobsContainer = document.getElementById("AppliedJobs");
appliedArr.forEach((jobIndex) => {
    createJobListing(jobIndex, appliedJobsContainer);
    localStorage.setItem("appliedbtn", JSON.stringify([]));
});

function createJobListing(jobIndex, container) {
    if (!jobsArr[jobIndex]) {
        return;
    }
    const job = jobsArr[jobIndex];
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="job-listing-wrap">
            <div class="job-listing-image">
                <img src="${job.image?.src || 'default-image.jpg'}" alt="${job.companyInfo?.name || 'Company'} logo" id="companyimg">
            </div>
            <div class="job-listing">
                <div class="job-title">${job.title || 'Job Title'}, University Graduate, 2026</div>
                <div class="company-info">
                    <span class="company-name">${job.companyInfo?.name || 'Company'}</span>
                    <span class="separator">·</span>
                    <span class="location">${job.companyInfo?.location || 'Location'}</span>
                </div>
                <div class="alumni-badge">${job.jobDetails?.applicants || '0'} applicants</div>
                <div class="promoted-tag">${job.postedTime || 'Recently'}</div>
            </div>
        </div>
    `;
    container.appendChild(li);
}

//SavedReseting
// Get reset buttons
let savedReset = document.getElementById("SavedReset");
let appliedReset = document.getElementById("AppliedReset");
let appliedbtn = JSON.parse(localStorage.getItem("appliedbtn")) || [];
let savedbtn = JSON.parse(localStorage.getItem("savedbtn")) || [];

// Reset saved jobs
savedReset.addEventListener("click", () => {
    resetArray('savedArr');
    window.location.reload(true);
});

// Reset applied jobs
appliedReset.addEventListener("click", () => {
    resetArray('appliedArr');
    window.location.reload(true);
});

function resetArray(arrayKey) {
    localStorage.setItem(arrayKey, JSON.stringify([]));
    if (arrayKey === 'savedArr' ) {
        savedArr = [];
        savedbtn=[];
    } else if (arrayKey === 'appliedArr') {
        appliedArr = [];
        appliedbtn=[];
    }
    refreshJobLists();
    // console.log(`${arrayKey} has been reset`);
}

function refreshJobLists() {
    let savedContainer = document.getElementById("SavedJobs");
    let appliedContainer = document.getElementById("AppliedJobs");
}