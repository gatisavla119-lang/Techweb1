
/* =========================================================
   NEXORA — TECHNOLOGY & AI HUB
   Complete JavaScript
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION MENU
   ========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu when a link is clicked */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   2. AI CARD INTERACTION — MODAL
   ========================================================= */

const aiCards = document.querySelectorAll(".ai-card");

const infoModal = document.getElementById("infoModal");

const modalClose = document.getElementById("modalClose");

const modalTag = document.getElementById("modalTag");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalFeatures =
    document.getElementById("modalFeatures");


/* AI Information */

const aiInformation = {

    "Machine Learning": {
        description:
            "Machine Learning allows computers to learn patterns from data and improve their performance without being explicitly programmed for every task.",

        features: [
            "Data-driven learning",
            "Pattern recognition",
            "Predictive systems",
            "Automation"
        ]
    },

    "Generative AI": {
        description:
            "Generative AI can create new content such as text, images, audio and code by learning patterns from large datasets.",

        features: [
            "Text generation",
            "Image generation",
            "Code generation",
            "Creative assistance"
        ]
    },

    "Computer Vision": {
        description:
            "Computer Vision enables computers to interpret and understand visual information from images and videos.",

        features: [
            "Image recognition",
            "Object detection",
            "Face analysis",
            "Video understanding"
        ]
    },

    "Natural Language Processing": {
        description:
            "Natural Language Processing helps computers understand, process and generate human language.",

        features: [
            "Language understanding",
            "Text analysis",
            "Translation",
            "Chatbots"
        ]
    },

    "Robotics": {
        description:
            "AI-powered robotics combines intelligent software with machines that can sense their environment and perform tasks.",

        features: [
            "Autonomous systems",
            "Sensors",
            "Decision making",
            "Task automation"
        ]
    },

    "AI Creativity": {
        description:
            "AI creativity uses artificial intelligence to assist people in exploring ideas and producing creative digital content.",

        features: [
            "Idea generation",
            "Creative assistance",
            "Content creation",
            "Human-AI collaboration"
        ]
    }

};


/* Open Modal */

aiCards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.querySelector("h3").textContent.trim();

        const data =
            aiInformation[title];

        if (!data) return;

        modalTag.textContent =
            "ARTIFICIAL INTELLIGENCE";

        modalTitle.textContent =
            title;

        modalDescription.textContent =
            data.description;

        modalFeatures.innerHTML = "";

        data.features.forEach(feature => {

            const featureElement =
                document.createElement("div");

            featureElement.classList.add(
                "modal-feature"
            );

            featureElement.textContent =
                feature;

            modalFeatures.appendChild(
                featureElement
            );

        });

        infoModal.classList.add("active");

    });

});


/* Close Modal */

modalClose.addEventListener("click", () => {

    infoModal.classList.remove("active");

});


/* Close when clicking outside */

infoModal.addEventListener("click", (event) => {

    if (event.target === infoModal) {

        infoModal.classList.remove("active");

    }

});


/* Close with Escape key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        infoModal.classList.remove("active");

    }

});

/* =========================================================
   3. TECHNOLOGY CARD INTERACTION
   ========================================================= */

const technologyCards = document.querySelectorAll(".technology-card");

technologyCards.forEach(card => {

    card.addEventListener("click", () => {

        const technologyName =
            card.querySelector("h3").textContent;

        alert(
            `Technology: ${technologyName}\n\nKeep exploring NEXORA to learn more about this technology!`
        );

    });

});


/* =========================================================
   4. AI TOOL INTERACTION
   ========================================================= */

const toolCards = document.querySelectorAll(".tool-card");

toolCards.forEach(card => {

    card.addEventListener("click", () => {

        const toolCategory =
            card.querySelector("h3").textContent;

        alert(
            `AI Toolbox\n\nCategory: ${toolCategory}\n\nExplore this category to discover how AI can help you.`
        );

    });

});


/* =========================================================
   PROFESSIONAL QUIZ SYSTEM
   ========================================================= */

const startQuizBtn =
    document.getElementById("startQuizBtn");

const quizIntro =
    document.getElementById("quizIntro");

const quizBox =
    document.getElementById("quizBox");

const quizResult =
    document.getElementById("quizResult");

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answerButtons");

const nextBtn =
    document.getElementById("nextBtn");

const questionNumber =
    document.getElementById("questionNumber");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const progressBar =
    document.getElementById("progressBar");

const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");

const restartQuizBtn =
    document.getElementById("restartQuizBtn");


/* Questions */

const quizQuestions = [

    {
        question:
            "Which programming language is widely used in AI and data science?",

        answers: [
            "HTML",
            "Python",
            "CSS",
            "XML"
        ],

        correct: 1
    },

    {
        question:
            "What does AI stand for?",

        answers: [
            "Automated Internet",
            "Artificial Intelligence",
            "Advanced Interface",
            "Automatic Information"
        ],

        correct: 1
    },

    {
        question:
            "Which technology allows computers to learn from data?",

        answers: [
            "Machine Learning",
            "HTML",
            "Bluetooth",
            "GPS"
        ],

        correct: 0
    },

    {
        question:
            "What does IoT stand for?",

        answers: [
            "Internet of Things",
            "Input of Technology",
            "Information of Tools",
            "Internet of Technology"
        ],

        correct: 0
    },

    {
        question:
            "Which technology is associated with immersive virtual environments?",

        answers: [
            "VR",
            "CPU",
            "HTML",
            "SQL"
        ],

        correct: 0
    }

];


let currentQuestion = 0;
let score = 0;


/* Start Quiz */

startQuizBtn.addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    quizIntro.style.display = "none";

    quizResult.style.display = "none";

    quizBox.style.display = "block";

    scoreDisplay.textContent = "Score: 0";

    showQuestion();

});


/* Display Question */

function showQuestion() {

    resetAnswers();

    const question =
        quizQuestions[currentQuestion];

    questionElement.textContent =
        question.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;


    const progress =
        ((currentQuestion + 1) /
        quizQuestions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.classList.add("answer-btn");

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            answerButtons.appendChild(button);

        }
    );

}


/* Remove old answers */

function resetAnswers() {

    answerButtons.innerHTML = "";

    nextBtn.style.display = "none";

}


/* Select Answer */

function selectAnswer(selectedIndex) {

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        answerButtons.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (
        selectedIndex === question.correct
    ) {

        buttons[selectedIndex]
            .classList.add("correct");

        score++;

        scoreDisplay.textContent =
            `Score: ${score}`;

    }

    else {

        buttons[selectedIndex]
            .classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

    }


    nextBtn.style.display =
        "inline-block";


    if (
        currentQuestion ===
        quizQuestions.length - 1
    ) {

        nextBtn.textContent =
            "See Result 🏆";

    }

}


/* Next Question */

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (
        currentQuestion <
        quizQuestions.length
    ) {

        showQuestion();

    }

    else {

        showResult();

    }

});


/* Show Result */

function showResult() {

    quizBox.style.display = "none";

    quizResult.style.display = "block";


    finalScore.textContent =
        `${score} / ${quizQuestions.length}`;


    if (score === quizQuestions.length) {

        resultMessage.textContent =
            "🌟 Perfect! You're a true Tech Master!";

    }

    else if (score >= 4) {

        resultMessage.textContent =
            "🚀 Excellent! You have impressive technology knowledge.";

    }

    else if (score >= 3) {

        resultMessage.textContent =
            "💡 Great job! Keep exploring technology.";

    }

    else if (score >= 1) {

        resultMessage.textContent =
            "🔭 Good start! There is a whole universe of technology to explore.";

    }

    else {

        resultMessage.textContent =
            "🌌 Start exploring NEXORA and discover something new!";

    }

}


/* Restart Quiz */

restartQuizBtn.addEventListener("click", () => {

    quizResult.style.display = "none";

    quizIntro.style.display = "block";

});

/* =========================================================
   7. FUTURE TIMELINE INTERACTION
   ========================================================= */

const futureItems = document.querySelectorAll(".future-item");

futureItems.forEach(item => {

    item.addEventListener("click", () => {

        const title =
            item.querySelector("h3").textContent;

        const description =
            item.querySelector("p").textContent;

        alert(
            `${title}\n\n${description}`
        );

    });

});


/* =========================================================
   8. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".ai-card, .technology-card, .tool-card, .future-item"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================================
   9. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active-link");


        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active-link");

        }

    });

});


/* =========================================================
   10. WELCOME MESSAGE
   ========================================================= */

console.log(
    "🚀 Welcome to NEXORA — Explore. Learn. Innovate."
);

/* ================= PROJECT RECOMMENDATION SYSTEM ================= */

const recommendBtn = document.getElementById("recommendBtn");

const interestSelect = document.getElementById("interest");
const skillSelect = document.getElementById("skill");
const goalSelect = document.getElementById("goal");

const projectResult = document.getElementById("projectResult");
const projectTitle = document.getElementById("projectTitle");
const projectDescription =
    document.getElementById("projectDescription");
const projectDetails =
    document.getElementById("projectDetails");


const projectRecommendations = {

    ai: {
        beginner: {
            title: "AI Study Assistant",
            description:
                "Build a simple study assistant that helps students organize topics, generate study questions and manage their learning.",
            technologies: [
                "Python",
                "Artificial Intelligence",
                "Basic Web Development",
                "Data Handling"
            ]
        },

        intermediate: {
            title: "AI Chatbot",
            description:
                "Create an intelligent chatbot that can answer questions and guide users through a specific topic.",
            technologies: [
                "Python",
                "NLP",
                "JavaScript",
                "APIs"
            ]
        },

        advanced: {
            title: "AI Recommendation Engine",
            description:
                "Build a system that analyzes user preferences and recommends useful content, projects or learning resources.",
            technologies: [
                "Python",
                "Machine Learning",
                "Data Processing",
                "Web Development"
            ]
        }
    },


    web: {
        beginner: {
            title: "Personal Portfolio Website",
            description:
                "Create a responsive portfolio website to showcase your skills, projects and achievements.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Responsive Design"
            ]
        },

        intermediate: {
            title: "Student Productivity Dashboard",
            description:
                "Build a web dashboard where students can manage tasks, notes and study goals.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Local Storage"
            ]
        },

        advanced: {
            title: "Smart Web Application",
            description:
                "Create a feature-rich web application with dynamic data, user interaction and intelligent features.",
            technologies: [
                "JavaScript",
                "APIs",
                "Advanced CSS",
                "Web Architecture"
            ]
        }
    },


    app: {
        beginner: {
            title: "Student To-Do App",
            description:
                "Build a simple application that allows students to create, manage and complete daily tasks.",
            technologies: [
                "App Development",
                "UI Design",
                "JavaScript",
                "Data Storage"
            ]
        },

        intermediate: {
            title: "Campus Companion App",
            description:
                "Create an application that helps students manage schedules, events, notes and useful campus information.",
            technologies: [
                "App Development",
                "UI/UX",
                "APIs",
                "Database Concepts"
            ]
        },

        advanced: {
            title: "Smart Learning App",
            description:
                "Develop an intelligent learning application that adapts content according to user interaction.",
            technologies: [
                "App Development",
                "AI",
                "APIs",
                "Data Analysis"
            ]
        }
    },


    cyber: {
        beginner: {
            title: "Cybersecurity Awareness Hub",
            description:
                "Create an educational platform that teaches users about passwords, phishing, privacy and safe online practices.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Cybersecurity Concepts"
            ]
        },

        intermediate: {
            title: "Password Security Analyzer",
            description:
                "Build an educational tool that evaluates password characteristics and explains how to create stronger passwords.",
            technologies: [
                "JavaScript",
                "Web Development",
                "Security Concepts",
                "UI Design"
            ]
        },

        advanced: {
            title: "Security Monitoring Dashboard",
            description:
                "Create a dashboard that presents simulated security events and helps users understand basic monitoring concepts.",
            technologies: [
                "JavaScript",
                "Data Visualization",
                "Cybersecurity",
                "Web Development"
            ]
        }
    },


    data: {
        beginner: {
            title: "Student Data Dashboard",
            description:
                "Create a dashboard that displays student information and simple statistics using charts and visualizations.",
            technologies: [
                "Python",
                "Data Analysis",
                "Charts",
                "Data Visualization"
            ]
        },

        intermediate: {
            title: "Student Performance Analyzer",
            description:
                "Build a system that analyzes academic data and identifies useful patterns and trends.",
            technologies: [
                "Python",
                "Pandas",
                "Data Visualization",
                "Statistics"
            ]
        },

        advanced: {
            title: "Predictive Analytics System",
            description:
                "Develop a machine-learning based system that analyzes historical data and produces predictions.",
            technologies: [
                "Python",
                "Machine Learning",
                "Statistics",
                "Data Processing"
            ]
        }
    }

};


recommendBtn.addEventListener("click", () => {

    const interest = interestSelect.value;
    const skill = skillSelect.value;
    const goal = goalSelect.value;


    if (!interest || !skill || !goal) {

        alert("Please select all options before getting a recommendation.");

        return;
    }


    let recommendation =
        projectRecommendations[interest][skill];

        /* Adjust recommendation according to user's goal */

if (goal === "portfolio") {

    recommendation = {
        ...recommendation,
        title: "Portfolio Project: " + recommendation.title
    };

}

else if (goal === "college") {

    recommendation = {
        ...recommendation,
        title: "College Project: " + recommendation.title
    };

}

else if (goal === "problem") {

    recommendation = {
        ...recommendation,
        title: "Real-World Solution: " + recommendation.title
    };

}


    projectTitle.textContent =
        recommendation.title;

    projectDescription.textContent =
        recommendation.description;


    projectDetails.innerHTML = "";


    recommendation.technologies.forEach(technology => {

        const detail =
            document.createElement("div");

        detail.classList.add("project-detail");

        detail.textContent =
            `✦ ${technology}`;

        projectDetails.appendChild(detail);

    });


    projectResult.style.display = "block";


    projectResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
/* ================= TECH PROBLEM SOLVER ================= */

const problemCategory =
    document.getElementById("problemCategory");

const problemType =
    document.getElementById("problemType");

const solveBtn =
    document.getElementById("solveBtn");

const solverResult =
    document.getElementById("solverResult");

const solutionTitle =
    document.getElementById("solutionTitle");

const solutionDescription =
    document.getElementById("solutionDescription");

const solutionDetails =
    document.getElementById("solutionDetails");


const problemSolutions = {

    website: {
        title: "Build a Structured Website",
        description:
            "Start by creating a clear HTML structure, style the interface with CSS and add JavaScript only where interaction is required.",
        details: [
            "HTML for structure",
            "CSS for design",
            "JavaScript for interaction",
            "Test the website in a browser"
        ]
    },


    responsive: {
        title: "Use Responsive Web Design",
        description:
            "Make the website adapt to different screen sizes by using flexible layouts, CSS Grid or Flexbox and responsive media queries.",
        details: [
            "Use flexible layouts",
            "Add CSS media queries",
            "Avoid fixed-width layouts",
            "Test on mobile and desktop"
        ]
    },


    javascriptBug: {
        title: "Debug Your JavaScript",
        description:
            "Check the browser console for errors, verify element IDs and inspect whether your event listeners and variables are working correctly.",
        details: [
            "Open browser console",
            "Check error messages",
            "Verify element IDs",
            "Test your JavaScript step by step"
        ]
    },


    chatbot: {
        title: "Build an AI Chatbot",
        description:
            "Start with a simple conversational interface and connect it to an appropriate AI service when you are ready to move beyond a frontend-only project.",
        details: [
            "Create the chat interface",
            "Handle user input",
            "Connect an AI service",
            "Display responses dynamically"
        ]
    },


    security: {
        title: "Improve Web Security",
        description:
            "Follow secure development practices such as validating user input, protecting sensitive information and avoiding unsafe handling of user-generated content.",
        details: [
            "Validate user input",
            "Protect sensitive data",
            "Use secure authentication",
            "Keep dependencies updated"
        ]
    },


    iotProject: {
        title: "Build an IoT Project",
        description:
            "Connect sensors to a microcontroller, collect sensor readings and create a system that responds to those readings.",
        details: [
            "Choose suitable sensors",
            "Connect the hardware",
            "Read sensor data",
            "Create an appropriate response"
        ]
    },


    dataAnalysis: {
        title: "Start a Data Analysis Project",
        description:
            "Collect or use a suitable dataset, clean the data, analyze patterns and communicate the results through useful visualizations.",
        details: [
            "Find a suitable dataset",
            "Clean the data",
            "Analyze patterns",
            "Create visualizations"
        ]
    }

};


solveBtn.addEventListener("click", () => {

    const category =
        problemCategory.value;

    const type =
        problemType.value;


    if (!category || !type) {

        alert(
            "Please select both the technology area and problem."
        );

        return;
    }


    let solution =
        problemSolutions[type];

        /* Check whether the selected problem
   matches the selected technology area */

const validProblems = {

    web: [
        "website",
        "responsive"
    ],

    javascript: [
        "javascriptBug"
    ],

    ai: [
        "chatbot"
    ],

    cyber: [
        "security"
    ],

    iot: [
        "iotProject"
    ],

    data: [
        "dataAnalysis"
    ]

};


if (!validProblems[category].includes(type)) {

    solution = {
        title: "Let's Match the Problem First",
        description:
            "The selected problem does not belong to this technology area. Try choosing a problem that matches your selected category.",
        details: [
            `Selected area: ${category}`,
            `Selected problem: ${type}`,
            "Choose a matching combination",
            "Then try again"
        ]
    };

}

    if (!solution) {

        alert(
            "Sorry, a solution is not available yet."
        );

        return;
    }


    solutionTitle.textContent =
        solution.title;


    solutionDescription.textContent =
        solution.description;


    solutionDetails.innerHTML = "";


    solution.details.forEach(detail => {

        const detailElement =
            document.createElement("div");

        detailElement.classList.add(
            "solution-detail"
        );

        detailElement.textContent =
            `✦ ${detail}`;

        solutionDetails.appendChild(
            detailElement
        );

    });


    solverResult.style.display =
        "block";


    solverResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});