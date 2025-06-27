const projects = [
  {
    title: "Real Estate API",
    images: ["Realmg1.jpg", "Realmg2.jpg"],
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Postman"],
    description: "The Real Estate API is a robust and scalable RESTful backend system built to handle real estate listings with speed, reliability, and clarity in mind. Designed using Node.js and Express, and backed by MongoDB, this API allows users and real estate agents to seamlessly create, read, update, and delete (CRUD) property listings.It features advanced filtering, search by location or price range, and pagination support to ensure efficient data access — even at scale.Authentication is powered by JWT (JSON Web Tokens) for secure and role-based access, ensuring that only authorized users can make changes to listings. Error handling and data validation are thoroughly implemented to ensure reliability and developer-friendly interactions.",
    keyFeatures: [
      "CRUD Functionality for listings",
      "Advanced filtering (location, price, etc.)",
      "JWT Authentication & Role-based Access",
      "Pagination and sorting support",
      "Clean modular code structure"
    ]
  },
  {
    title: "Hospital Management System",
    images: [
      "Hospital1.png",
      "Hospital2.png"
    ],
    tags: ["Fullstack", "MySQL", "Node.js"],
    description: "The Hospital Management System is an all-in-one web-based solution built to manage hospital workflows digitally and efficiently. It automates key operations such as patient registration, OPD queue handling, bed allocation, doctor scheduling, and medicine stock tracking. Designed with real-time responsiveness and modular structure, the system enables both administrative staff and medical professionals to deliver better care with less friction.A comprehensive and scalable platform built to streamline core hospital operations — from patient registration to inventory tracking. Designed during the Smart India Hackathon, this system ensures efficient management of hospital resources and smooth patient experiences.",
    keyFeatures: [
      "Patient registration & appointment system",
      "Bed availability dashboard",
      "Admin module for hospital staff",
      "Medicine stock tracking",
      "Team collaboration support"
    ]
  }
];

let current = 0;

function updateProject() {
  const proj = projects[current];
  const display = document.getElementById("projectDisplay");
  display.innerHTML = `
    <div class="project-images">
      <img src="${proj.images[0]}" alt="Project Image 1" />
      <img src="${proj.images[1]}" alt="Project Image 2" />
    </div>
    <div class="tags">
      ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
    </div>
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>

    <h3 class="features-title">Key Features</h3>
    <ul class="feature-list">
      ${proj.keyFeatures.map(feature => `<li>✅ ${feature}</li>`).join('')}
    </ul>
  `;
}

function nextProject() {
  current = (current + 1) % projects.length;
  updateProject();
}

function prevProject() {
  current = (current - 1 + projects.length) % projects.length;
  updateProject();
}

window.onload = updateProject;

let isDark = false;

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
//   isDark = !isDark;
  const endermanImg = document.getElementById('endermanImg');
  const isDark = document.body.classList.contains("dark-mode");
  endermanImg.src = isDark ? 'WhiteEnder.png' : 'BlackEnder.png';
}

/*For mobile header*/
function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
  }

/*Mobile project section*/
const mobileProjects = [...projects]; // reuse same array

let currentMobile = 0;

function updateMobileProject() {
  const proj = mobileProjects[currentMobile];
  const display = document.getElementById("mobileProjectDisplay");
  display.innerHTML = `
    <div class="project-images">
      <img src="${proj.images[0]}" alt="Project Image 1" />
      <img src="${proj.images[1]}" alt="Project Image 2" />
    </div>
    <div class="tags">
      ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
    </div>
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <h4 class="features-title">Key Features</h4>
    <ul>
      ${proj.keyFeatures.map(f => `<li>✅ ${f}</li>`).join('')}
    </ul>
  `;
}

function nextMobileProject() {
  currentMobile = (currentMobile + 1) % mobileProjects.length;
  updateMobileProject();
}

function prevMobileProject() {
  currentMobile = (currentMobile - 1 + mobileProjects.length) % mobileProjects.length;
  updateMobileProject();
}

window.onload = () => {
  updateProject();        // for desktop
  updateMobileProject();  // for mobile
};