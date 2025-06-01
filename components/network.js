let Nav1ul = document.getElementById("Nav1-ul");
let dbLIst = document.getElementById("drop-down-list");
let MainDivScrollUl=document.getElementById("Main-Div-scroll-ul");
let NavUl = document.getElementById("Nav-ul");
let tempArr=JSON.parse(localStorage.getItem("tempArr"));
let Profileimage=document.getElementById("Profileimage");
let search=document.getElementById("search");
let matching=document.getElementById("matching");
let id=tempArr[0].id;

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
if(window.location.href=="http://127.0.0.1:5500/components/network.html#")
{
    document.getElementById("Network").style.borderBottom="5px solid black";
    document.getElementById("Network").style.color="black";
}
let index = tempArr[0].id;
let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let renderArr = [userDetails[index]];
let navimg=document.getElementById("navimg");
navimg.src=`${renderArr[0].userimage}`;
const users = [
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
    "skills": ["Enterprise Sales", "Negotiation","css"],
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
    "skills": ["Python", "TensorFlow","java"],
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
    "skills": ["Distributed Systems","c++", "Scalability"],
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
    "skills": ["Distributed Systems", "Scalability","python"],
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
let mainDiv=document.getElementById("main-div");
let networkdiv=document.getElementById("networkdiv");
function user(arr,div) {
  arr.map((i)=>{
    div.innerHTML+=`<div id="${i.id}" class="linkedin-card">
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
              ${i.skills.map((skill)=>{
                return`<option>${skill}</option>`
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
});
}
let p=document.getElementById("p");
let n =document.getElementById("n");
let x = 0;
let y = 4;
function next(){
  if (y >= users.length) return;
  x += 4;
  y += 4;
  let req = users.slice(x, y);
  networkdiv.innerHTML = "";
  user(req,networkdiv);
}
function prev(){
  if (x <= 0) return;
  x -= 4;
  y -= 4;
  let req = users.slice(x, y);
  networkdiv.innerHTML = "";
  user(req,networkdiv);
}
let a = users.slice(0, 4);
user(a,networkdiv);
function matcingskill(){
  let filtered = [];
  if(userDetails[id].skills){
    filtered = users.filter((ele) => {
      for(let i =0; i< ele.skills.length; i++){
        if(userDetails[id].skills.includes(ele.skills[i])){
          return true;
        }
      }
    });
  }
  user(filtered,matching)
}
matcingskill();
let matchingloc=document.getElementById("matchingloc");
function matchingLoc(){
  let filtered = [];
  if(userDetails[id].locations){
    filtered=users.filter((ele)=>{
      if(ele.location.toLowerCase()==userDetails[id].locations.toLowerCase()){
        return true;
      }
    })
  }
  user(filtered,matchingloc);
}
matchingLoc();
let upskill=document.getElementById("upskill");
function upskills(){
  let filtered = [];
  if(userDetails[id].reqSkills){
   filtered = users.filter((ele) => {
      for(let i=0; i< ele.skills.length; i++){
        if(userDetails[id].reqSkills.includes(ele.skills[i])){
          return true;
        }
      }
    });
  }
  console.log(filtered);
  user(filtered,upskill);
}
upskills()