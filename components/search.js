let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let NavUl = document.getElementById("Nav-ul");
let tempArr = JSON.parse(localStorage.getItem("tempArr"));
let index = tempArr[0].id;
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let renderArr = [userDetails[index]];
let navimg = document.getElementById("navimg");
navimg.src = `${renderArr[0].userimage}`;
let bell = document.getElementById("bell");
bell.addEventListener("click", () => { window.location.href = "http://127.0.0.1:5500/components/applied.html" });
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
        href: 'http://127.0.0.1:5500/components/index.html'

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
// jobsarr
let temp = "Jobs";
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
        "salary": {
            "min": 1200000,
            "max": 1800000,
            "currency": "INR",
            "period": "year",
            "equity": "RSUs included"
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
        "salary": {
            "min": 40000,
            "max": 60000,
            "currency": "INR",
            "period": "month",
            "bonus": "Performance bonus available"
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
        "salary": {
            "min": 1500000,
            "max": 2000000,
            "currency": "INR",
            "period": "year",
            "bonus": "Yearly performance bonus"
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
        "salary": {
            "min": 1000000,
            "max": 1500000,
            "currency": "INR",
            "period": "year",
            "signingBonus": "Included"
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
        "salary": {
            "min": 30000,
            "max": 45000,
            "currency": "INR",
            "period": "month",
            "housing": "Stipend available"
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
        "salary": {
            "min": 2500000,
            "max": 3500000,
            "currency": "INR",
            "period": "year",
            "bonus": "Quarterly bonuses"
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
        "salary": {
            "min": 50000,
            "max": 80000,
            "currency": "INR",
            "period": "month",
            "perks": "Free meals and transport"
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
        "salary": {
            "min": 800000,
            "max": 1200000,
            "currency": "INR",
            "period": "year",
            "flexible": "Output-based"
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
        "salary": {
            "min": 1800000,
            "max": 2400000,
            "currency": "INR",
            "period": "year",
            "stock": "RSUs included"
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
        "salary": {
            "min": 25000,
            "max": 40000,
            "currency": "INR",
            "period": "month",
            "housing": "Stipend available"
        },
        "postedTime": "1 day ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 10,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tesla_logo.png/200px-Tesla_logo.png",
            "alt": "Tesla logo",
            "id": "companyimg"
        },
        "title": "Autopilot Software Engineer",
        "companyInfo": {
            "name": "Tesla",
            "separator": "·",
            "location": "Bengaluru, India"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "40+ applicants",
            "reposted": "Reposted 2 days ago"
        },
        "salary": {
            "min": 2200000,
            "max": 3000000,
            "currency": "INR",
            "period": "year",
            "bonus": "Stock options included"
        },
        "postedTime": "4 days ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 11,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Oracle_logo.svg/200px-Oracle_logo.svg.png",
            "alt": "Oracle logo",
            "id": "companyimg"
        },
        "title": "Database Administrator",
        "companyInfo": {
            "name": "Oracle",
            "separator": "·",
            "location": "Mumbai, India"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "25+ applicants"
        },
        "salary": {
            "min": 1400000,
            "max": 1900000,
            "currency": "INR",
            "period": "year",
            "bonus": "Yearly performance bonus"
        },
        "postedTime": "1 week ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    },
    {
        "id": 12,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Swiggy_logo.svg/200px-Swiggy_logo.svg.png",
            "alt": "Swiggy logo",
            "id": "companyimg"
        },
        "title": "Product Manager",
        "companyInfo": {
            "name": "Swiggy",
            "separator": "·",
            "location": "Remote (India)"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "80+ applicants"
        },
        "salary": {
            "min": 2000000,
            "max": 2800000,
            "currency": "INR",
            "period": "year",
            "bonus": "ESOPs available"
        },
        "postedTime": "2 days ago",
        "actions": {
            "apply": "Apply Now",
            "save": "Save"
        }
    },
    {
        "id": 13,
        "image": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Zomato_logo.png/200px-Zomato_logo.png",
            "alt": "Zomato logo",
            "id": "companyimg"
        },
        "title": "Data Analyst Intern",
        "companyInfo": {
            "name": "Zomato",
            "separator": "·",
            "location": "Gurugram, India"
        },
        "jobDetails": {
            "duration": "6-Month Internship",
            "applicants": "120+ applicants",
            "employmentType": "Internship"
        },
        "salary": {
            "min": 35000,
            "max": 50000,
            "currency": "INR",
            "period": "month",
            "perks": "Food credits included"
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
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png",
            "alt": "Netflix logo",
            "id": "companyimg"
        },
        "title": "Content Recommendation Engineer",
        "companyInfo": {
            "name": "Netflix",
            "separator": "·",
            "location": "Remote (Global)"
        },
        "jobDetails": {
            "employmentType": "Full-time",
            "applicants": "90+ applicants"
        },
        "salary": {
            "min": 3000000,
            "max": 4000000,
            "currency": "INR",
            "period": "year",
            "bonus": "Unlimited vacation policy"
        },
        "postedTime": "1 day ago",
        "actions": {
            "apply": "Apply",
            "save": "Save"
        }
    }
];
const users = [
    {
        "id": "linkedin-101",
        "name": "Emma Rodriguez",
        "headline": "Senior Product Designer at Spotify | UX Lead",
        "profileUrl": "https://www.linkedin.com/in/emmarodriguez",
        "avatar": "https://randomuser.me/api/portraits/women/33.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 7,
        "location": "hyderabad",
        "currentCompany": {
            "name": "Spotify",
            "logo": "https://logo.clearbit.com/spotify.com",
            "url": "https://www.linkedin.com/company/spotify"
        },
        "skills": ["html", "User Research", "Prototyping"],
        "lastActive": "Active now",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 38
    },
    {
        "id": "linkedin-102",
        "name": "David Kim",
        "headline": "Engineering Manager at Tesla",
        "profileUrl": "https://www.linkedin.com/in/davidkim",
        "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 4,
        "location": "Austin, Texas",
        "currentCompany": {
            "name": "Tesla",
            "logo": "https://logo.clearbit.com/tesla.com",
            "url": "https://www.linkedin.com/company/tesla"
        },
        "skills": ["Robotics", "C++", "Machine Learning"],
        "lastActive": "2 days ago",
        "isPremium": false,
        "isOpenToWork": true,
        "endorsementCount": 52
    },
    {
        "id": "linkedin-103",
        "name": "Aisha Mohammed",
        "headline": "VP of Sales at Stripe",
        "profileUrl": "https://www.linkedin.com/in/aishamohammed",
        "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 1,
        "location": "hyderabad",
        "currentCompany": {
            "name": "Stripe",
            "logo": "https://logo.clearbit.com/stripe.com",
            "url": "https://www.linkedin.com/company/stripe"
        },
        "skills": ["Enterprise Sales", "Negotiation", "css"],
        "lastActive": "1 week ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 29
    },
    {
        "id": "linkedin-104",
        "name": "James Wilson",
        "headline": "Lead Data Scientist at Netflix",
        "profileUrl": "https://www.linkedin.com/in/jameswilson",
        "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 9,
        "location": "hyderabad",
        "currentCompany": {
            "name": "Netflix",
            "logo": "https://logo.clearbit.com/netflix.com",
            "url": "https://www.linkedin.com/company/netflix"
        },
        "skills": ["Python", "TensorFlow", "java"],
        "lastActive": "Active 1h ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 63
    },
    {
        "id": "linkedin-105",
        "name": "Sophie Chen",
        "headline": "VP of Engineering at Slack",
        "profileUrl": "https://www.linkedin.com/in/sophiechen",
        "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 6,
        "location": "hyderabad",
        "currentCompany": {
            "name": "Slack",
            "logo": "https://logo.clearbit.com/slack.com",
            "url": "https://www.linkedin.com/company/slack"
        },
        "skills": ["Distributed Systems", "c++", "Scalability"],
        "lastActive": "Yesterday",
        "isPremium": false,
        "isOpenToWork": false,
        "endorsementCount": 47
    },
    // Continuing with 15 more unique profiles...
    {
        "id": "linkedin-120",
        "name": "Carlos Mendez",
        "headline": "CTO at Startup",
        "profileUrl": "https://www.linkedin.com/in/carlosmendez",
        "avatar": "https://randomuser.me/api/portraits/men/88.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 2,
        "location": "Barcelona, Spain",
        "currentCompany": {
            "name": "NextGen AI",
            "logo": "https://logo.clearbit.com/nextgenai.com",
            "url": "https://www.linkedin.com/company/nextgenai"
        },
        "skills": ["Startups", "Fundraising"],
        "lastActive": "3 weeks ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 31
    },
    {
        "id": "linkedin-101",
        "name": "Emma Rodriguez",
        "headline": "Senior Product Designer at Spotify | UX Lead",
        "profileUrl": "https://www.linkedin.com/in/emmarodriguez",
        "avatar": "https://randomuser.me/api/portraits/women/33.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 7,
        "location": "Berlin, Germany",
        "currentCompany": {
            "name": "Spotify",
            "logo": "https://logo.clearbit.com/spotify.com",
            "url": "https://www.linkedin.com/company/spotify"
        },
        "skills": ["Figma", "User Research", "Prototyping"],
        "lastActive": "Active now",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 38
    },
    {
        "id": "linkedin-102",
        "name": "David Kim",
        "headline": "Engineering Manager at Tesla",
        "profileUrl": "https://www.linkedin.com/in/davidkim",
        "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 4,
        "location": "Austin, Texas",
        "currentCompany": {
            "name": "Tesla",
            "logo": "https://logo.clearbit.com/tesla.com",
            "url": "https://www.linkedin.com/company/tesla"
        },
        "skills": ["Robotics", "C++", "Machine Learning"],
        "lastActive": "2 days ago",
        "isPremium": false,
        "isOpenToWork": true,
        "endorsementCount": 52
    },
    {
        "id": "linkedin-103",
        "name": "Aisha Mohammed",
        "headline": "VP of Sales at Stripe",
        "profileUrl": "https://www.linkedin.com/in/aishamohammed",
        "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 1,
        "location": "Dubai, UAE",
        "currentCompany": {
            "name": "Stripe",
            "logo": "https://logo.clearbit.com/stripe.com",
            "url": "https://www.linkedin.com/company/stripe"
        },
        "skills": ["Enterprise Sales", "Negotiation"],
        "lastActive": "1 week ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 29
    },
    {
        "id": "linkedin-104",
        "name": "James Wilson",
        "headline": "Lead Data Scientist at Netflix",
        "profileUrl": "https://www.linkedin.com/in/jameswilson",
        "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 9,
        "location": "Los Gatos, California",
        "currentCompany": {
            "name": "Netflix",
            "logo": "https://logo.clearbit.com/netflix.com",
            "url": "https://www.linkedin.com/company/netflix"
        },
        "skills": ["Python", "TensorFlow"],
        "lastActive": "Active 1h ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 63
    },
    {
        "id": "linkedin-105",
        "name": "Sophie Chen",
        "headline": "VP of Engineering at Slack",
        "profileUrl": "https://www.linkedin.com/in/sophiechen",
        "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 6,
        "location": "San Francisco, California",
        "currentCompany": {
            "name": "Slack",
            "logo": "https://logo.clearbit.com/slack.com",
            "url": "https://www.linkedin.com/company/slack"
        },
        "skills": ["Distributed Systems", "Scalability", "python"],
        "lastActive": "Yesterday",
        "isPremium": false,
        "isOpenToWork": false,
        "endorsementCount": 47
    },
    // Continuing with 15 more unique profiles...
    {
        "id": "linkedin-120",
        "name": "Carlos Mendez",
        "headline": "CTO at Startup",
        "profileUrl": "https://www.linkedin.com/in/carlosmendez",
        "avatar": "https://randomuser.me/api/portraits/men/88.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 2,
        "location": "Barcelona, Spain",
        "currentCompany": {
            "name": "NextGen AI",
            "logo": "https://logo.clearbit.com/nextgenai.com",
            "url": "https://www.linkedin.com/company/nextgenai"
        },
        "skills": ["Startups", "Fundraising"],
        "lastActive": "3 weeks ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 31
    },
    {
        "id": "linkedin-101",
        "name": "Emma Rodriguez",
        "headline": "Senior Product Designer at Spotify | UX Lead",
        "profileUrl": "https://www.linkedin.com/in/emmarodriguez",
        "avatar": "https://randomuser.me/api/portraits/women/33.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 7,
        "location": "Berlin, Germany",
        "currentCompany": {
            "name": "Spotify",
            "logo": "https://logo.clearbit.com/spotify.com",
            "url": "https://www.linkedin.com/company/spotify"
        },
        "skills": ["Figma", "User Research", "Prototyping"],
        "lastActive": "Active now",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 38
    },
    {
        "id": "linkedin-102",
        "name": "David Kim",
        "headline": "Engineering Manager at Tesla",
        "profileUrl": "https://www.linkedin.com/in/davidkim",
        "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 4,
        "location": "Austin, Texas",
        "currentCompany": {
            "name": "Tesla",
            "logo": "https://logo.clearbit.com/tesla.com",
            "url": "https://www.linkedin.com/company/tesla"
        },
        "skills": ["Robotics", "C++", "Machine Learning"],
        "lastActive": "2 days ago",
        "isPremium": false,
        "isOpenToWork": true,
        "endorsementCount": 52
    },
    {
        "id": "linkedin-103",
        "name": "Aisha Mohammed",
        "headline": "VP of Sales at Stripe",
        "profileUrl": "https://www.linkedin.com/in/aishamohammed",
        "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 1,
        "location": "Dubai, UAE",
        "currentCompany": {
            "name": "Stripe",
            "logo": "https://logo.clearbit.com/stripe.com",
            "url": "https://www.linkedin.com/company/stripe"
        },
        "skills": ["Enterprise Sales", "Negotiation"],
        "lastActive": "1 week ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 29
    },
    {
        "id": "linkedin-104",
        "name": "James Wilson",
        "headline": "Lead Data Scientist at Netflix",
        "profileUrl": "https://www.linkedin.com/in/jameswilson",
        "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 9,
        "location": "Los Gatos, California",
        "currentCompany": {
            "name": "Netflix",
            "logo": "https://logo.clearbit.com/netflix.com",
            "url": "https://www.linkedin.com/company/netflix"
        },
        "skills": ["Python", "TensorFlow"],
        "lastActive": "Active 1h ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 63
    },
    {
        "id": "linkedin-105",
        "name": "Sophie Chen",
        "headline": "VP of Engineering at Slack",
        "profileUrl": "https://www.linkedin.com/in/sophiechen",
        "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 6,
        "location": "San Francisco, California",
        "currentCompany": {
            "name": "Slack",
            "logo": "https://logo.clearbit.com/slack.com",
            "url": "https://www.linkedin.com/company/slack"
        },
        "skills": ["Distributed Systems", "Scalability"],
        "lastActive": "Yesterday",
        "isPremium": false,
        "isOpenToWork": false,
        "endorsementCount": 47
    },
    // Continuing with 15 more unique profiles...
    {
        "id": "linkedin-120",
        "name": "Carlos Mendez",
        "headline": "CTO at Startup",
        "profileUrl": "https://www.linkedin.com/in/carlosmendez",
        "avatar": "https://randomuser.me/api/portraits/men/88.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 2,
        "location": "Barcelona, Spain",
        "currentCompany": {
            "name": "NextGen AI",
            "logo": "https://logo.clearbit.com/nextgenai.com",
            "url": "https://www.linkedin.com/company/nextgenai"
        },
        "skills": ["Startups", "Fundraising"],
        "lastActive": "3 weeks ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 31
    },
    {
        "id": "linkedin-101",
        "name": "Emma Rodriguez",
        "headline": "Senior Product Designer at Spotify | UX Lead",
        "profileUrl": "https://www.linkedin.com/in/emmarodriguez",
        "avatar": "https://randomuser.me/api/portraits/women/33.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 7,
        "location": "Berlin, Germany",
        "currentCompany": {
            "name": "Spotify",
            "logo": "https://logo.clearbit.com/spotify.com",
            "url": "https://www.linkedin.com/company/spotify"
        },
        "skills": ["Figma", "User Research", "Prototyping"],
        "lastActive": "Active now",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 38
    },
    {
        "id": "linkedin-102",
        "name": "David Kim",
        "headline": "Engineering Manager at Tesla",
        "profileUrl": "https://www.linkedin.com/in/davidkim",
        "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 4,
        "location": "Austin, Texas",
        "currentCompany": {
            "name": "Tesla",
            "logo": "https://logo.clearbit.com/tesla.com",
            "url": "https://www.linkedin.com/company/tesla"
        },
        "skills": ["Robotics", "C++", "Machine Learning"],
        "lastActive": "2 days ago",
        "isPremium": false,
        "isOpenToWork": true,
        "endorsementCount": 52
    },
    {
        "id": "linkedin-103",
        "name": "Aisha Mohammed",
        "headline": "VP of Sales at Stripe",
        "profileUrl": "https://www.linkedin.com/in/aishamohammed",
        "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 1,
        "location": "Dubai, UAE",
        "currentCompany": {
            "name": "Stripe",
            "logo": "https://logo.clearbit.com/stripe.com",
            "url": "https://www.linkedin.com/company/stripe"
        },
        "skills": ["Enterprise Sales", "Negotiation"],
        "lastActive": "1 week ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 29
    },
    {
        "id": "linkedin-104",
        "name": "James Wilson",
        "headline": "Lead Data Scientist at Netflix",
        "profileUrl": "https://www.linkedin.com/in/jameswilson",
        "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 9,
        "location": "Los Gatos, California",
        "currentCompany": {
            "name": "Netflix",
            "logo": "https://logo.clearbit.com/netflix.com",
            "url": "https://www.linkedin.com/company/netflix"
        },
        "skills": ["Python", "TensorFlow"],
        "lastActive": "Active 1h ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 63
    },
    {
        "id": "linkedin-105",
        "name": "Sophie Chen",
        "headline": "VP of Engineering at Slack",
        "profileUrl": "https://www.linkedin.com/in/sophiechen",
        "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 6,
        "location": "San Francisco, California",
        "currentCompany": {
            "name": "Slack",
            "logo": "https://logo.clearbit.com/slack.com",
            "url": "https://www.linkedin.com/company/slack"
        },
        "skills": ["Distributed Systems", "Scalability"],
        "lastActive": "Yesterday",
        "isPremium": false,
        "isOpenToWork": false,
        "endorsementCount": 47
    },
    // Continuing with 15 more unique profiles...
    {
        "id": "linkedin-120",
        "name": "Carlos Mendez",
        "headline": "CTO at Startup",
        "profileUrl": "https://www.linkedin.com/in/carlosmendez",
        "avatar": "https://randomuser.me/api/portraits/men/88.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 2,
        "location": "Barcelona, Spain",
        "currentCompany": {
            "name": "NextGen AI",
            "logo": "https://logo.clearbit.com/nextgenai.com",
            "url": "https://www.linkedin.com/company/nextgenai"
        },
        "skills": ["Startups", "Fundraising"],
        "lastActive": "3 weeks ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 31
    },
    {
        "id": "linkedin-101",
        "name": "Emma Rodriguez",
        "headline": "Senior Product Designer at Spotify | UX Lead",
        "profileUrl": "https://www.linkedin.com/in/emmarodriguez",
        "avatar": "https://randomuser.me/api/portraits/women/33.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 7,
        "location": "Berlin, Germany",
        "currentCompany": {
            "name": "Spotify",
            "logo": "https://logo.clearbit.com/spotify.com",
            "url": "https://www.linkedin.com/company/spotify"
        },
        "skills": ["Figma", "User Research", "Prototyping"],
        "lastActive": "Active now",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 38
    },
    {
        "id": "linkedin-102",
        "name": "David Kim",
        "headline": "Engineering Manager at Tesla",
        "profileUrl": "https://www.linkedin.com/in/davidkim",
        "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 4,
        "location": "Austin, Texas",
        "currentCompany": {
            "name": "Tesla",
            "logo": "https://logo.clearbit.com/tesla.com",
            "url": "https://www.linkedin.com/company/tesla"
        },
        "skills": ["Robotics", "C++", "Machine Learning"],
        "lastActive": "2 days ago",
        "isPremium": false,
        "isOpenToWork": true,
        "endorsementCount": 52
    },
    {
        "id": "linkedin-103",
        "name": "Aisha Mohammed",
        "headline": "VP of Sales at Stripe",
        "profileUrl": "https://www.linkedin.com/in/aishamohammed",
        "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 1,
        "location": "Dubai, UAE",
        "currentCompany": {
            "name": "Stripe",
            "logo": "https://logo.clearbit.com/stripe.com",
            "url": "https://www.linkedin.com/company/stripe"
        },
        "skills": ["Enterprise Sales", "Negotiation"],
        "lastActive": "1 week ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 29
    },
    {
        "id": "linkedin-104",
        "name": "James Wilson",
        "headline": "Lead Data Scientist at Netflix",
        "profileUrl": "https://www.linkedin.com/in/jameswilson",
        "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
        "connectionDegree": "1st",
        "mutualConnections": 9,
        "location": "Los Gatos, California",
        "currentCompany": {
            "name": "Netflix",
            "logo": "https://logo.clearbit.com/netflix.com",
            "url": "https://www.linkedin.com/company/netflix"
        },
        "skills": ["Python", "TensorFlow"],
        "lastActive": "Active 1h ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 63
    },
    {
        "id": "linkedin-105",
        "name": "Sophie Chen",
        "headline": "VP of Engineering at Slack",
        "profileUrl": "https://www.linkedin.com/in/sophiechen",
        "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
        "connectionDegree": "2nd",
        "mutualConnections": 6,
        "location": "San Francisco, California",
        "currentCompany": {
            "name": "Slack",
            "logo": "https://logo.clearbit.com/slack.com",
            "url": "https://www.linkedin.com/company/slack"
        },
        "skills": ["Distributed Systems", "Scalability"],
        "lastActive": "Yesterday",
        "isPremium": false,
        "isOpenToWork": false,
        "endorsementCount": 47
    },
    // Continuing with 15 more unique profiles...
    {
        "id": "linkedin-120",
        "name": "Carlos Mendez",
        "headline": "CTO at Startup",
        "profileUrl": "https://www.linkedin.com/in/carlosmendez",
        "avatar": "https://randomuser.me/api/portraits/men/88.jpg",
        "connectionDegree": "3rd",
        "mutualConnections": 2,
        "location": "Barcelona, Spain",
        "currentCompany": {
            "name": "NextGen AI",
            "logo": "https://logo.clearbit.com/nextgenai.com",
            "url": "https://www.linkedin.com/company/nextgenai"
        },
        "skills": ["Startups", "Fundraising"],
        "lastActive": "3 weeks ago",
        "isPremium": true,
        "isOpenToWork": false,
        "endorsementCount": 31
    }
];
let mainSearchInput = document.getElementById("mainSearchInput");
let searchBtn = document.getElementById("searchBtn");
let tabs = document.querySelectorAll('.nav-tab');
let mainLocation = document.getElementById("mainLocation");
//shifting active
function changeP(div, placeholderText, value) {
    tabs.forEach(tab => tab.classList.remove('active'));
    div.classList.add('active');
    temp = value;
    mainSearchInput.setAttribute("placeholder", placeholderText);
}
//searching
let filteredJobs;
let joblistingul = document.getElementById("list");

searchBtn.addEventListener("click", () => {
    let req = mainSearchInput.value.toLowerCase().trim();
    let loc = mainLocation.value.toLowerCase().trim();
    if (temp == 'Companies') {
        if (loc&&loc!=""&&req!="") {
            filteredJobs = jobsArr.filter((job) => {
                return job.companyInfo.name.toLowerCase().includes(req) && job.companyInfo.location.toLowerCase().includes(loc);
            });
        }
        else {
            filteredJobs = jobsArr.filter((job) => {
                return job.companyInfo.name.toLowerCase().includes(req);
            });
        }
    }
    else if (temp == 'Jobs') {
        if (loc&&loc!=""&&req!="") {
            filteredJobs = jobsArr.filter((job) => {
                return job.title.toLowerCase().includes(req) && job.companyInfo.location.toLowerCase().includes(loc);
            });
        }
        else {
            filteredJobs = jobsArr.filter((job) => {
                return job.title.toLowerCase().includes(req);
            });
        }

    }
    else if (temp == 'Salary') {
        if (loc&&loc!=""&&req!="") {
            filteredJobs = jobsArr.filter((job) => {
                return job.salary.max >= req && job.companyInfo.location.toLowerCase().includes(loc);
            });
        } else {
            filteredJobs = jobsArr.filter((job) => {
                return job.salary.max >= req;
            });
        }
    }
    else if (temp == 'People') {
        if (loc&&loc!=""&&req!="") {
            filteredJobs = users.filter((job) => {
                return job.name.toLowerCase().includes(req) && job.location.toLowerCase().includes(loc);
            });
        } else {
            filteredJobs = users.filter((job) => {
                return job.name.toLowerCase().includes(req);
            });
        }
    }
    else if (temp == 'skills') {
        if (loc&&loc!=""&&req!="") {
           filteredJobs=users.filter((job)=>{
                for(let i=0;i<user.length;i++){
                    if(req.split(",").includes(job.skills[i].toLowerCase()) && job.location.toLowerCase().includes(loc)){
                        return true
                    }
                }
            });
        } else {
            filteredJobs=users.filter((job)=>{
                for(let i=0;i<user.length;i++){
                    if(req.split(",").includes(job.skills[i].toLowerCase())){
                        return true
                    }
                } 
            });
        }
    }
    joblistingul.innerHTML = ""
    if (temp != 'People' && temp != 'skills') {
        creatingJob(filteredJobs);
    }
    else {
        // console.log("else");
        // console.log(filteredJobs);
        user(filteredJobs, joblistingul);
    }
});

function creatingJob(arr) {
    arr.map((i) => {
        let li = document.createElement("li");
        li.setAttribute("onclick", `cardclick(${i.id})`)
        li.innerHTML = `<div class="job-listing-wrap">
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
        joblistingul.style.display = "block";
        joblistingul.appendChild(li);
    });
}

creatingJob(jobsArr);
function user(arr, div) {
    arr.map((i) => {
        div.innerHTML += `<div id="${i.id}" class="linkedin-card">
            <div id="card-header" class="profile-header">
                <img id="profile-avatar" src=${i.avatar}
                    class="profile-avatar">
                <div id="profile-info">
                    <h3 id="profile-name">${i.name}</h3>
                    <p id="profile-title" class="position">${i.headline}</p>
                </div>
            </div>
            <p id="connection-text" class="connection-hint">Based on Whole Network</p>
            <select class="select">
             <option>Skills</option>
              ${i.skills.map((skill) => {
            return `<option>${skill}</option>`
        })}
            </select>
            <p>Location:${i.location}</p>
            <button id="connect-btn" class="connect-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                        fill="currentColor" />
                </svg>
                Connect
            </button>
        </div>`
        joblistingul.style.display = "flex";
        joblistingul.style.flexWrap = "wrap",
            joblistingul.style.gap = "30px"
    });
}
// function typesearch() {
//     mainSearchInput.addEventListener("input", (e) => {
//         console.log(e.target.value);
//         joblistingul.innerHTML = "";
//         let text = e.target.value.toLowerCase().trim();
//         let suggested = users.filter((ele) => ele.name.toLowerCase().match(text));
//         suggested.forEach((e) => {
//             li = document.createElement("li");
//             li.innerHTML = e.title;
//             joblistingul.appendChild(li);
//         });;
//     });
// }
//  