let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let MainDivScrollUl = document.getElementById("Main-Div-scroll-ul");
let NavUl = document.getElementById("Nav-ul");
let tempArr = JSON.parse(localStorage.getItem("tempArr"));
let Profileimage = document.getElementById("Profileimage");
let search = document.getElementById("search")
search.addEventListener("click", () => {
    window.location.href = 'http://127.0.0.1:5500/components/serch.html'
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
if (window.location.href == "http://127.0.0.1:5500/components/feed.html") {
    document.getElementById("Home").style.borderBottom = "5px solid black";
    document.getElementById("Home").style.color = "black";
}
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let MainDivProfilecollage = document.getElementById("div Main-Div-Profile-collage").innerText = `${userDetails[0].jobtitle}`
let index = tempArr[0].id;
let renderArr = [userDetails[index]];
Profileimage.src = `${renderArr[0].userimage}`;
let navimg = document.getElementById("navimg");
navimg.src = `${renderArr[0].userimage}`;
let MainDivProfileName = document.getElementById("Main-Div-Profile-education");
MainDivProfileName.innerText = `${renderArr[0].fullname}`

let feed = [
    {
        "id": "post-1",
        "author": {
            "name": "Sumit D.",
            "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&auto=format&fit=crop",
            "headline": "13k+ Followers | Tech Enthusiast | Front End Developer",
            "connection": "2nd"
        },
        "time": "2h ago",
        "content": {
            "text": "Struggling to Find Remote Jobs? Not Anymore! Remote work is more accessible than ever...",
            "media": {
                "type": "carousel",
                "title": "10 Signs of Maturity ✔",
                "current": 1,
                "total": 9,
                "image": "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
            }
        },
        "stats": {
            "likes": 104,
            "comments": 6
        }
    },
    {
        "id": "post-2",
        "author": {
            "name": "Priya K.",
            "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop",
            "headline": "Senior UX Designer at Microsoft",
            "connection": "1st"
        },
        "time": "5h ago",
        "content": {
            "text": "Just launched our new design system! After 6 months of hard work...",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg"
                
            }
        },
        "stats": {
            "likes": 342,
            "comments": 28
        }
    },
    {
        "id": "post-3",
        "author": {
            "name": "James Wilson",
            "avatar": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&auto=format&fit=crop",
            "headline": "Engineering Manager at Tesla",
            "connection": "3rd"
        },
        "time": "1d ago",
        "content": {
            "text": "Autonomous vehicle tech breakthroughs this quarter: Improved object detection by 40%...",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg",
                "duration": "2:45"
            }
        },
        "stats": {
            "likes": 521,
            "comments": 43
        }
    },
    {
        "id": "post-4",
        "author": {
            "name": "Emma Rodriguez",
            "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop",
            "headline": "Product Manager at Google | AI Enthusiast",
            "connection": "1st"
        },
        "time": "3h ago",
        "content": {
            "text": "How AI is transforming healthcare diagnostics - our latest research shows 30% improvement in early detection...",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg"
            }
        },
        "stats": {
            "likes": 287,
            "comments": 34
        }
    },
    {
        "id": "post-5",
        "author": {
            "name": "Carlos Mendez",
            "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
            "headline": "Startup Founder | Fintech Innovator",
            "connection": "2nd"
        },
        "time": "6h ago",
        "content": {
            "text": "Just closed our Series B funding round! $25M to revolutionize digital payments in emerging markets...",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
            }
        },
        "stats": {
            "likes": 412,
            "comments": 52
        }
    },
    {
        "id": "post-6",
        "author": {
            "name": "Aisha Johnson",
            "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop",
            "headline": "HR Director | Diversity & Inclusion Advocate",
            "connection": "3rd"
        },
        "time": "8h ago",
        "content": {
            "text": "The future of work is flexible! Our remote-first policy increased employee satisfaction by 40%...",
            "media": {
                "type": "carousel",
                "title": "Remote Work Benefits",
                "current": 1,
                "total": 5,
                "image": "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
            }
        },
        "stats": {
            "likes": 198,
            "comments": 29
        }
    },
    {
        "id": "post-7",
        "author": {
            "name": "David Kim",
            "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
            "headline": "Data Scientist | Machine Learning Specialist",
            "connection": "1st"
        },
        "time": "10h ago",
        "content": {
            "text": "Just published my research on neural networks optimization - achieving 15% faster training times...",
            "media": {
                "type": "document",
                "title": "Neural Network Optimization.pdf",
                "image": "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
            }
        },
        "stats": {
            "likes": 376,
            "comments": 47
        }
    },
    {
        "id": "post-8",
        "author": {
            "name": "Sophia Chen",
            "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&auto=format&fit=crop",
            "headline": "Marketing Director | Brand Strategist",
            "connection": "2nd"
        },
        "time": "12h ago",
        "content": {
            "text": "Our viral campaign reached 10M impressions in just 3 days! Here's how we did it...",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/269399/pexels-photo-269399.jpeg",
                "duration": "1:30"
            }
        },
        "stats": {
            "likes": 523,
            "comments": 68
        }
    },
    {
        "id": "post-9",
        "author": {
            "name": "Michael Brown",
            "avatar": "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&auto=format&fit=crop",
            "headline": "Cybersecurity Expert | Ethical Hacker",
            "connection": "3rd"
        },
        "time": "1d ago",
        "content": {
            "text": "Critical security vulnerability discovered in popular CMS platforms - patch immediately!",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
            }
        },
        "stats": {
            "likes": 289,
            "comments": 42
        }
    },
    {
        "id": "post-10",
        "author": {
            "name": "Lisa Wong",
            "avatar": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&auto=format&fit=crop",
            "headline": "UX Researcher | Human-Centered Design",
            "connection": "1st"
        },
        "time": "1d ago",
        "content": {
            "text": "New case study: How we improved checkout conversion by 22% through better UX design...",
            "media": {
                "type": "carousel",
                "title": "UX Case Study",
                "current": 1,
                "total": 7,
                "image": "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg"
            }
        },
        "stats": {
            "likes": 187,
            "comments": 23
        }
    },
    {
        "id": "post-11",
        "author": {
            "name": "Raj Patel",
            "avatar": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&auto=format&fit=crop",
            "headline": "Cloud Architect | AWS Certified",
            "connection": "2nd"
        },
        "time": "2d ago",
        "content": {
            "text": "Migrated enterprise infrastructure to cloud with zero downtime - here's our playbook...",
            "media": {
                "type": "document",
                "title": "Cloud Migration Guide.pdf",
                "image": "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
            }
        },
        "stats": {
            "likes": 312,
            "comments": 39
        }
    },
    {
        "id": "post-12",
        "author": {
            "name": "Olivia Martinez",
            "avatar": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=200&h=200&auto=format&fit=crop",
            "headline": "Sustainability Consultant | Green Tech",
            "connection": "3rd"
        },
        "time": "2d ago",
        "content": {
            "text": "How we reduced our carbon footprint by 65% through smart office design and renewable energy...",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg"
            }
        },
        "stats": {
            "likes": 421,
            "comments": 57
        }
    },
    {
        "id": "post-13",
        "author": {
            "name": "Daniel Lee",
            "avatar": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&auto=format&fit=crop",
            "headline": "Blockchain Developer | Web3 Enthusiast",
            "connection": "1st"
        },
        "time": "3d ago",
        "content": {
            "text": "Just deployed our first smart contract on Ethereum - revolutionizing supply chain transparency...",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
                "duration": "3:15"
            }
        },
        "stats": {
            "likes": 298,
            "comments": 41
        }
    },
    {
        "id": "post-14",
        "author": {
            "name": "Natalie Chen",
            "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&auto=format&fit=crop",
            "headline": "Growth Hacker | Digital Marketing",
            "connection": "2nd"
        },
        "time": "3d ago",
        "content": {
            "text": "Our A/B testing framework increased conversion rates by 18% - sharing our methodology...",
            "media": {
                "type": "carousel",
                "title": "Growth Framework",
                "current": 1,
                "total": 6,
                "image": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            }
        },
        "stats": {
            "likes": 267,
            "comments": 33
        }
    },
    {
        "id": "post-15",
        "author": {
            "name": "Thomas Wilson",
            "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop",
            "headline": "CTO | Tech Startup Advisor",
            "connection": "3rd"
        },
        "time": "4d ago",
        "content": {
            "text": "After 5 years as CTO, here are my top lessons for scaling engineering teams...",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
            }
        },
        "stats": {
            "likes": 512,
            "comments": 79
        }
    },
    {
        "id": "post-16",
        "author": {
            "name": "Elena Rodriguez",
            "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop",
            "headline": "AI Researcher | Natural Language Processing",
            "connection": "1st"
        },
        "time": "4d ago",
        "content": {
            "text": "Breakthrough in multilingual NLP models - achieving human parity in 10 languages...",
            "media": {
                "type": "document",
                "title": "NLP Research Paper.pdf",
                "image": "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg"
            }
        },
        "stats": {
            "likes": 387,
            "comments": 52
        }
    },
    {
        "id": "post-17",
        "author": {
            "name": "Kevin Zhang",
            "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
            "headline": "Mobile Developer | Flutter Expert",
            "connection": "2nd"
        },
        "time": "5d ago",
        "content": {
            "text": "Our Flutter app reached 1M downloads in 3 months - sharing our performance optimization tricks...",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
                "duration": "4:20"
            }
        },
        "stats": {
            "likes": 234,
            "comments": 31
        }
    },
    {
        "id": "post-18",
        "author": {
            "name": "Sarah Johnson",
            "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
            "headline": "Product Manager | Agile Practitioner",
            "connection": "3rd"
        },
        "time": "5d ago",
        "content": {
            "text": "How we reduced our sprint cycle time by 30% through better backlog grooming...",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
            }
        },
        "stats": {
            "likes": 176,
            "comments": 28
        }
    },
    {
        "id": "post-19",
        "author": {
            "name": "Marcus Lee",
            "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&auto=format&fit=crop",
            "headline": "DevOps Engineer | CI/CD Specialist",
            "connection": "1st"
        },
        "time": "6d ago",
        "content": {
            "text": "Implemented fully automated deployment pipeline - reducing release time from 2 hours to 15 minutes...",
            "media": {
                "type": "carousel",
                "title": "CI/CD Pipeline",
                "current": 1,
                "total": 4,
                "image": "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
            }
        },
        "stats": {
            "likes": 302,
            "comments": 45
        }
    },
    {
        "id": "post-20",
        "author": {
            "name": "Aisha Brown",
            "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop",
            "headline": "Data Analyst | Business Intelligence",
            "connection": "2nd"
        },
        "time": "6d ago",
        "content": {
            "text": "Our predictive analytics model forecasts sales with 92% accuracy - transforming inventory management...",
            "media": {
                "type": "document",
                "title": "Analytics Report.pdf",
                "image": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
            }
        },
        "stats": {
            "likes": 278,
            "comments": 37
        }
    },
    {
        "id": "post-21",
        "author": {
            "name": "Arjun Patel",
            "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
            "headline": "DevOps Engineer | AWS Certified",
            "connection": "1st"
        },
        "time": "1h ago",
        "content": {
            "text": "Automated our CI/CD pipeline reducing deployment time from 2 hours to 15 minutes!",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
            }
        },
        "stats": {
            "likes": 87,
            "comments": 12
        }
    },
    {
        "id": "post-22",
        "author": {
            "name": "Sophia Nguyen",
            "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&auto=format&fit=crop",
            "headline": "UX Researcher | Human-Centered Design",
            "connection": "2nd"
        },
        "time": "3h ago",
        "content": {
            "text": "Our new accessibility features increased user retention by 22% among differently-abled users",
            "media": {
                "type": "carousel",
                "title": "Accessibility Case Study",
                "current": 1,
                "total": 4,
                "image": "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg"
            }
        },
        "stats": {
            "likes": 134,
            "comments": 28
        }
    },
    {
        "id": "post-23",
        "author": {
            "name": "Marcus Johnson",
            "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&auto=format&fit=crop",
            "headline": "Blockchain Architect | Web3",
            "connection": "3rd"
        },
        "time": "5h ago",
        "content": {
            "text": "Built a decentralized identity solution that's being adopted by 3 major banks",
            "media": {
                "type": "document",
                "title": "DID Whitepaper.pdf",
                "image": "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg"
            }
        },
        "stats": {
            "likes": 201,
            "comments": 35
        }
    },
    {
        "id": "post-24",
        "author": {
            "name": "Elena Rodriguez",
            "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop",
            "headline": "AI Ethics Researcher",
            "connection": "1st"
        },
        "time": "7h ago",
        "content": {
            "text": "Published framework for detecting bias in machine learning models - adopted by IEEE",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            }
        },
        "stats": {
            "likes": 312,
            "comments": 47
        }
    },
    {
        "id": "post-25",
        "author": {
            "name": "Kofi Mensah",
            "avatar": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&auto=format&fit=crop",
            "headline": "Renewable Energy Engineer",
            "connection": "2nd"
        },
        "time": "9h ago",
        "content": {
            "text": "Designed solar microgrids bringing electricity to 10 remote villages in Africa",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg",
                "duration": "3:15"
            }
        },
        "stats": {
            "likes": 421,
            "comments": 63
        }
    },
    {
        "id": "post-26",
        "author": {
            "name": "Priya Kapoor",
            "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop",
            "headline": "Neurotechnology Researcher",
            "connection": "3rd"
        },
        "time": "11h ago",
        "content": {
            "text": "Breakthrough in non-invasive brain-computer interfaces - clinical trials starting next month",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg"
            }
        },
        "stats": {
            "likes": 287,
            "comments": 39
        }
    },
    {
        "id": "post-27",
        "author": {
            "name": "Omar Hassan",
            "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
            "headline": "Quantum Computing Scientist",
            "connection": "1st"
        },
        "time": "1d ago",
        "content": {
            "text": "Achieved quantum supremacy with our new 128-qubit processor - details in Nature next week",
            "media": {
                "type": "document",
                "title": "Quantum Research Preview.pdf",
                "image": "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg"
            }
        },
        "stats": {
            "likes": 498,
            "comments": 72
        }
    },
    {
        "id": "post-28",
        "author": {
            "name": "Yuki Tanaka",
            "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
            "headline": "Robotics Engineer",
            "connection": "2nd"
        },
        "time": "1d ago",
        "content": {
            "text": "Our disaster response robots just helped locate survivors after the Taiwan earthquake",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
                "duration": "4:20"
            }
        },
        "stats": {
            "likes": 587,
            "comments": 94
        }
    },
    {
        "id": "post-29",
        "author": {
            "name": "Kwame Nkrumah",
            "avatar": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&auto=format&fit=crop",
            "headline": "Agricultural Tech Innovator",
            "connection": "3rd"
        },
        "time": "2d ago",
        "content": {
            "text": "AI-powered vertical farms now producing 10x yield per square foot vs traditional methods",
            "media": {
                "type": "carousel",
                "title": "Smart Farming Tech",
                "current": 1,
                "total": 6,
                "image": "https://images.pexels.com/photos/6203372/pexels-photo-6203372.jpeg"
            }
        },
        "stats": {
            "likes": 321,
            "comments": 45
        }
    },
    {
        "id": "post-30",
        "author": {
            "name": "Aisha Bah",
            "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&auto=format&fit=crop",
            "headline": "Telemedicine Pioneer",
            "connection": "1st"
        },
        "time": "2d ago",
        "content": {
            "text": "Our mobile clinic platform just served its 1 millionth patient in rural areas",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg"
            }
        },
        "stats": {
            "likes": 412,
            "comments": 58
        }
    },
    {
        "id": "post-31",
        "author": {
            "name": "Carlos Mendez",
            "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
            "headline": "Space Systems Engineer",
            "connection": "2nd"
        },
        "time": "3d ago",
        "content": {
            "text": "Lead engineer on the Mars sample return mission - launch scheduled for Q3 2024",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg",
                "duration": "5:10"
            }
        },
        "stats": {
            "likes": 723,
            "comments": 112
        }
    },
    {
        "id": "post-32",
        "author": {
            "name": "Nadia Petrova",
            "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop",
            "headline": "Cryptography Expert",
            "connection": "3rd"
        },
        "time": "3d ago",
        "content": {
            "text": "Developed post-quantum encryption standard now adopted by 3 governments",
            "media": {
                "type": "document",
                "title": "Crypto Standards.pdf",
                "image": "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg"
            }
        },
        "stats": {
            "likes": 298,
            "comments": 41
        }
    },
    {
        "id": "post-33",
        "author": {
            "name": "Jamal Williams",
            "avatar": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&auto=format&fit=crop",
            "headline": "EdTech Founder",
            "connection": "1st"
        },
        "time": "4d ago",
        "content": {
            "text": "Our AI tutor platform is now helping 500,000 students learn math and science",
            "media": {
                "type": "carousel",
                "title": "EdTech Impact",
                "current": 1,
                "total": 5,
                "image": "https://images.pexels.com/photos/590544/pexels-photo-590544.jpeg"
            }
        },
        "stats": {
            "likes": 387,
            "comments": 52
        }
    },
    {
        "id": "post-34",
        "author": {
            "name": "Linh Tran",
            "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop",
            "headline": "Biomedical Engineer",
            "connection": "2nd"
        },
        "time": "4d ago",
        "content": {
            "text": "Developed low-cost prosthetic hand with 90% functionality of premium models",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg"
            }
        },
        "stats": {
            "likes": 512,
            "comments": 78
        }
    },
    {
        "id": "post-35",
        "author": {
            "name": "Rafael Silva",
            "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
            "headline": "Ocean Cleanup Technologist",
            "connection": "3rd"
        },
        "time": "5d ago",
        "content": {
            "text": "Our autonomous drones removed 10 tons of plastic from the Pacific Garbage Patch this month",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg",
                "duration": "2:45"
            }
        },
        "stats": {
            "likes": 876,
            "comments": 134
        }
    },
    {
        "id": "post-36",
        "author": {
            "name": "Ananya Desai",
            "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
            "headline": "Climate Data Scientist",
            "connection": "1st"
        },
        "time": "5d ago",
        "content": {
            "text": "New climate models predict 20% faster warming than previous estimates - urgent action needed",
            "media": {
                "type": "document",
                "title": "Climate Report.pdf",
                "image": "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg"
            }
        },
        "stats": {
            "likes": 654,
            "comments": 98
        }
    },
    {
        "id": "post-37",
        "author": {
            "name": "Tomasz Kowalski",
            "avatar": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&auto=format&fit=crop",
            "headline": "Nuclear Fusion Researcher",
            "connection": "2nd"
        },
        "time": "6d ago",
        "content": {
            "text": "Achieved net energy gain in our compact fusion reactor prototype - breakthrough!",
            "media": {
                "type": "image",
                "image": "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg"
            }
        },
        "stats": {
            "likes": 1023,
            "comments": 187
        }
    },
    {
        "id": "post-38",
        "author": {
            "name": "Fatima Al-Mansoori",
            "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&auto=format&fit=crop",
            "headline": "Smart City Architect",
            "connection": "3rd"
        },
        "time": "6d ago",
        "content": {
            "text": "Designed traffic system that reduced congestion by 35% in Dubai using AI",
            "media": {
                "type": "carousel",
                "title": "Urban Innovation",
                "current": 1,
                "total": 7,
                "image": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
            }
        },
        "stats": {
            "likes": 432,
            "comments": 63
        }
    },
    {
        "id": "post-39",
        "author": {
            "name": "Kwame Asante",
            "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
            "headline": "Digital Health Innovator",
            "connection": "1st"
        },
        "time": "1w ago",
        "content": {
            "text": "Our malaria detection app now covers 15 African countries with 92% accuracy",
            "media": {
                "type": "video",
                "thumbnail": "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg",
                "duration": "3:50"
            }
        },
        "stats": {
            "likes": 587,
            "comments": 89
        }
    },
    {
        "id": "post-40",
        "author": {
            "name": "Mei Ling",
            "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop",
            "headline": "Quantum AI Researcher",
            "connection": "2nd"
        },
        "time": "1w ago",
        "content": {
            "text": "Developed hybrid quantum-classical algorithm that solves optimization problems 1000x faster",
            "media": {
                "type": "document",
                "title": "Quantum AI Paper.pdf",
                "image": "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg"
            }
        },
        "stats": {
            "likes": 498,
            "comments": 76
        }
    }
];
feed.map((i) => {
    MainDivScrollUl.innerHTML += `<li>
                    <div class="linkedin-post">
                        <!-- Post Header -->
                        <div class="post-header">
                            <img src="${i.author.avatar}" alt="Sumit D."
                                class="profile-img">
                            <div class="user-info">
                                <div class="name-container">
                                    <h3>${i.author.name}.</h3>
                                    <span class="connection-badge">2nd</span>
                                </div>
                                <p class="headline">${i.author.headline}</p>
                                <p class="post-time">${i.time} • <span class="visibility">🌐</span></p>
                            </div>
                        </div>
                        <!-- Post Content -->
                        <div class="post-content">
                            <p class="post-text" title="${i.content.text}">${i.content.text.length > 10 ? `${i.content.text.slice(0, 50)}....` : `${i.content.text}`}</p>
                            <p class="post-text-expanded"> <span class="see-more">more</span></p>
                        </div>
                        <!-- Post Carousel -->
                            <div class="post-carousel">
                            <div class="carousel-header">
                                <span class="carousel-title">${i.content.text} ✔</span>
                                <span class="carousel-pages"></span>
                            </div>
                            <img src="${i.content.media.image?`${i.content.media.image}`:`${i.content.media.thumbnail}`}" 
                                alt="${i.content.media.title}"
                                class="carousel-image">
                            </div>
                        <!-- Post Stats -->
                        <div class="post-stats">
                            <span class="likes">Likes :${i.stats.likes}</span>
                            <span class="comments">${i.stats.comments} comments</span>
                        </div>

                        <!-- Post Actions -->
                        <div class="post-actions">
                            <button class="action-btn">
                                <span class="action-icon">👍</span> Like
                            </button>
                            <button class="action-btn">
                                <span class="action-icon">💬</span> Comment
                            </button>
                            <button class="action-btn">
                                <span class="action-icon">🔄</span> Repost
                            </button>
                            <button class="action-btn">
                                <span class="action-icon">✉️</span> Send
                            </button>
                        </div>
                    </div>
                </li>`
});

// Use these reliable placeholder images
const ads = [
  {
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Tech Conference 2023",
    path: "techconf.example.com"
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Developer Tools Sale",
    path: "devtools.example.com"
  }
];

let currentAdIndex = 0;
const adsContainer = document.getElementById("Main-Div-Ads");

function showAd() {
  const ad = ads[currentAdIndex];
  
  // Create new image element to handle loading
  const img = new Image();
  img.src = ad.img;
  img.className = "rounded-3";
  img.style.width = "120px";
  img.alt = ad.title;
  
  img.onload = function() {
    adsContainer.innerHTML = `
      <div class="ads-div">
        <a href="https://www.${ad.path}" target="_blank" 
           class="text-black text-decoration-none d-flex flex-column">
          <div class="d-flex align-items-center w-75 gap-3 inner">
            ${img.outerHTML}
            <div>
              <h5>${ad.title}</h5>
              <p class="opacity-75">${ad.path}</p>
            </div>
          </div>
        </a>
      </div>
    `;
  };
  
  img.onerror = function() {
    console.error("Failed to load ad image:", ad.img);
    adsContainer.innerHTML = `
      <div class="ads-div">
        <a href="https://www.${ad.path}" target="_blank" 
           class="text-black text-decoration-none d-flex flex-column">
          <div class="d-flex align-items-center w-75 gap-3 inner">
            <div class="bg-light rounded-3" style="width:120px;height:80px;display:flex;align-items:center;justify-content:center;">
              <i class="fas fa-ad"></i>
            </div>
            <div>
              <h5>${ad.title}</h5>
              <p class="opacity-75">${ad.path}</p>
            </div>
          </div>
        </a>
      </div>
    `;
  };
  
  currentAdIndex = (currentAdIndex + 1) % ads.length;
}

// Start rotation (3 seconds)
const adInterval = setInterval(showAd, 3000);

// Show first ad immediately
showAd();

// Cleanup when page closes
window.addEventListener("beforeunload", () => {
  clearInterval(adInterval);
});