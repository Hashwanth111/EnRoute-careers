let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let NavUl = document.getElementById("Nav-ul");
let tempArr = JSON.parse(localStorage.getItem("tempArr"));
let index = tempArr[0].id;
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let renderArr = [userDetails[index]];
let search=document.getElementById("search")
search.addEventListener("click",()=>{
    window.location.href = "./serch.html"
})
let Nav_items_ul = [
    {
        title: "Home",
        icon: "fa-house",
        href: "./feed.html"

    },
    {
        title: "Network",
        icon: "fa-users",
        href: "./network.html"
    },
    {
        title: "Jobs",
        icon: "fa-suitcase",
        href: "./jobscard.html"
    },
    {
        title: "Filter",
        icon: "fa-filter",
        href:'./index.html'
        
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
        image: {
            src: "https://logo.clearbit.com/tcs.com",
            alt: "TCS Logo"
        },
        title: "Frontend Developer",
        companyInfo: {
            name: "Tata Consultancy Services",
            location: "Bangalore, Karnataka"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 600000,
            max: 1200000,
            currency: "INR",
            period: "year"
        },
        postedTime: "1 day ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/infosys.com",
            alt: "Infosys Logo"
        },
        title: "Backend Engineer",
        companyInfo: {
            name: "Infosys",
            location: "Hyderabad, Telangana"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 500000,
            max: 1000000,
            currency: "INR",
            period: "year"
        },
        postedTime: "3 days ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/wipro.com",
            alt: "Wipro Logo"
        },
        title: "UX Designer",
        companyInfo: {
            name: "Wipro",
            location: "Remote"
        },
        jobDetails: {
            employmentType: "Contract"
        },
        salary: {
            min: 400000,
            max: 800000,
            currency: "INR",
            period: "year"
        },
        postedTime: "1 week ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/hcltech.com",
            alt: "HCL Logo"
        },
        title: "iOS Developer",
        companyInfo: {
            name: "HCL Technologies",
            location: "Noida, Uttar Pradesh"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 700000,
            max: 1500000,
            currency: "INR",
            period: "year"
        },
        postedTime: "5 days ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/techmahindra.com",
            alt: "Tech Mahindra Logo"
        },
        title: "Cloud Architect",
        companyInfo: {
            name: "Tech Mahindra",
            location: "Pune, Maharashtra"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 800000,
            max: 1800000,
            currency: "INR",
            period: "year"
        },
        postedTime: "2 days ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/flipkart.com",
            alt: "Flipkart Logo"
        },
        title: "Data Scientist",
        companyInfo: {
            name: "Flipkart",
            location: "Bangalore, Karnataka"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 900000,
            max: 2000000,
            currency: "INR",
            period: "year"
        },
        postedTime: "Just now",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/zomato.com",
            alt: "Zomato Logo"
        },
        title: "Mobile Developer",
        companyInfo: {
            name: "Zomato",
            location: "Gurgaon, Haryana"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 750000,
            max: 1600000,
            currency: "INR",
            period: "year"
        },
        postedTime: "1 week ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/olacabs.com",
            alt: "Ola Logo"
        },
        title: "Product Manager",
        companyInfo: {
            name: "Ola",
            location: "Bangalore, Karnataka"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 850000,
            max: 1700000,
            currency: "INR",
            period: "year"
        },
        postedTime: "3 days ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/swiggy.com",
            alt: "Swiggy Logo"
        },
        title: "DevOps Engineer",
        companyInfo: {
            name: "Swiggy",
            location: "Remote"
        },
        jobDetails: {
            employmentType: "Contract"
        },
        salary: {
            min: 650000,
            max: 1400000,
            currency: "INR",
            period: "year"
        },
        postedTime: "2 weeks ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        image: {
            src: "https://logo.clearbit.com/paytm.com",
            alt: "Paytm Logo"
        },
        title: "Backend Developer",
        companyInfo: {
            name: "Paytm",
            location: "Hybrid (Noida, Uttar Pradesh)"
        },
        jobDetails: {
            employmentType: "Full-time"
        },
        salary: {
            min: 800000,
            max: 1600000,
            currency: "INR",
            period: "year"
        },
        postedTime: "4 days ago",
        actions: {
            apply: "Apply Now",
            save: "Save"
        }
    },
    {
        "id": 10,
        "image": {
            "src": "https://logo.clearbit.com/cognizant.com",
            "alt": "Cognizant Logo"
        },
        "title": "Full Stack Developer",
        "companyInfo": {
            "name": "Cognizant",
            "location": "Chennai, Tamil Nadu"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "60+ applicants"
        },
        "salary": {
            "min": 700000,
            "max": 1300000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "2 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 11,
        "image": {
            "src": "https://logo.clearbit.com/accenture.com",
            "alt": "Accenture Logo"
        },
        "title": "AI/ML Engineer",
        "companyInfo": {
            "name": "Accenture",
            "location": "Pune, Maharashtra"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "45+ applicants"
        },
        "salary": {
            "min": 900000,
            "max": 1500000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "1 week ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 12,
        "image": {
            "src": "https://logo.clearbit.com/byjus.com",
            "alt": "Byju's Logo"
        },
        "title": "Product Designer",
        "companyInfo": {
            "name": "Byju's",
            "location": "Bangalore, Karnataka"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "30+ applicants"
        },
        "salary": {
            "min": 800000,
            "max": 1400000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "5 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 13,
        "image": {
            "src": "https://logo.clearbit.com/razorpay.com",
            "alt": "Razorpay Logo"
        },
        "title": "Backend Engineer (Node.js)",
        "companyInfo": {
            "name": "Razorpay",
            "location": "Remote"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "80+ applicants"
        },
        "salary": {
            "min": 1200000,
            "max": 2000000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "Just now",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 14,
        "image": {
            "src": "https://logo.clearbit.com/nykaa.com",
            "alt": "Nykaa Logo"
        },
        "title": "Frontend Developer (React)",
        "companyInfo": {
            "name": "Nykaa",
            "location": "Mumbai, Maharashtra"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "50+ applicants"
        },
        "salary": {
            "min": 750000,
            "max": 1300000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "3 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 15,
        "image": {
            "src": "https://logo.clearbit.com/lenskart.com",
            "alt": "Lenskart Logo"
        },
        "title": "Data Analyst",
        "companyInfo": {
            "name": "Lenskart",
            "location": "Gurugram, Haryana"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "35+ applicants"
        },
        "salary": {
            "min": 600000,
            "max": 1100000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "1 day ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 16,
        "image": {
            "src": "https://logo.clearbit.com/myntra.com",
            "alt": "Myntra Logo"
        },
        "title": "UX Researcher",
        "companyInfo": {
            "name": "Myntra",
            "location": "Bangalore, Karnataka"
        },
        "jobDetails": {
            "employmentType": "Contract",
            "applicants": "25+ applicants"
        },
        "salary": {
            "min": 850000,
            "max": 1400000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "1 week ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 17,
        "image": {
            "src": "https://logo.clearbit.com/pharmeasy.in",
            "alt": "PharmEasy Logo"
        },
        "title": "Android Developer",
        "companyInfo": {
            "name": "PharmEasy",
            "location": "Hybrid (Mumbai, Maharashtra)"
        },
        "jobDetails": {
            "employmentType": "Contract",
            "applicants": "40+ applicants"
        },
        "salary": {
            "min": 700000,
            "max": 1200000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "4 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 18,
        "image": {
            "src": "https://logo.clearbit.com/bigbasket.com",
            "alt": "BigBasket Logo"
        },
        "title": "DevOps Engineer",
        "companyInfo": {
            "name": "BigBasket",
            "location": "Bangalore, Karnataka"
        },
        "jobDetails": {
            "employmentType": "Internship",
            "applicants": "20+ applicants"
        },
        "salary": {
            "min": 1000000,
            "max": 1800000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "2 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 19,
        "image": {
            "src": "https://logo.clearbit.com/jio.com",
            "alt": "Jio Logo"
        },
        "title": "Cloud Security Engineer",
        "companyInfo": {
            "name": "Jio",
            "location": "Mumbai, Maharashtra"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "55+ applicants"
        },
        "salary": {
            "min": 1100000,
            "max": 1900000,
            "currency": "INR",
            "period": "year"
        },
        "postedTime": "Just now",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    }

];

function populateLocationFilter() {
    const locationFilter = document.getElementById('locationFilter');
    const locations = [...new Set(jobsArr.map(job => job.companyInfo.location))];
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });
}
window.addEventListener('DOMContentLoaded', populateLocationFilter);
let list = document.getElementById("list");
let locationFilter = document.getElementById("locationFilter");
let salaryFilter = document.getElementById("salaryFilter");
let experienceFilter = document.getElementById("experienceFilter");
let roleFilter = document.getElementById("roleFilter");
let jobTypeFilter = document.getElementById("jobTypeFilter");

function renderJobs(jobs) {
    list.innerHTML = "";
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.className = "job-card";
        li.innerHTML = `
          <div class="job-title">${job.title}</div>
          <div><span class="company-name">${job.companyInfo.name}</span> · ${job.companyInfo.location}</div>
          <div class="job-meta">${job.jobDetails.employmentType || job.jobDetails.duration || ""}</div>
          <div class="job-meta">Salary: ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} ${job.salary.currency}/${job.salary.period}</div>
          <div class="job-meta">Posted: ${job.postedTime}</div>
          <div class="job-actions">
            <button>${job.actions.apply}</button>
            <button>${job.actions.save}</button>
          </div>
        `;
        list.appendChild(li);
    });
}

function applyFilters() {
    let locationVal = locationFilter.value;
    let salaryVal = parseInt(salaryFilter.value);
    let experienceVal = experienceFilter.value;
    let roleVal = roleFilter.value.toLowerCase();
    let jobTypeVal = jobTypeFilter.value; 
    let filtered = jobsArr.filter(job => {
        let matchLocation = locationVal === "" || job.companyInfo.location === locationVal;
        let matchSalary = isNaN(salaryVal) || job.salary.min >= salaryVal;
        let matchExperience = experienceVal === "" || job.jobDetails.employmentType === experienceVal || job.jobDetails.duration?.includes(experienceVal);
        let matchRole = roleVal === "" || job.title.toLowerCase().includes(roleVal);
        let matchType = jobTypeVal === "" || job.companyInfo.location.toLowerCase().includes(jobTypeVal.toLowerCase());
        return matchLocation && matchSalary && matchExperience && matchRole && matchType;
    });
    renderJobs(filtered);
}
function resetFilters() {
    locationFilter.value = "";
    salaryFilter.value = "";
    experienceFilter.value = "";
    roleFilter.value = "";
    jobTypeFilter.value = "";
    renderJobs(jobsArr);
}
renderJobs(jobsArr);
let navimg=document.getElementById("navimg");
navimg.src=`${renderArr[0].userimage}`;