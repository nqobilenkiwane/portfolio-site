/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nqobile Nkiwane",
  title: "Hi, I'm Nqobile",
  subTitle: emoji(
    "A BSc Information Technology graduate specializing in Computer Science and Informatics 🚀.  Led the development of a 3-tier system for a real-world client, including a website, database, and mobile app. Skilled in mobile app development and API design, with a passion for solving business challenges through technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SQASty7I82Mev4AxUu8_1OEtvMZgjnvW/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nqobilenkiwane",
  linkedin: "https://www.linkedin.com/in/nqobilenkiwane",
  gmail: "nqobilenkiwane01@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "WHAT I DO",
  subTitle: "FULL STACK DEVELOPER WHO BUILDS WEB, MOBILE & API SOLUTIONS FOR REAL-WORLD BUSINESS NEEDS",
  skills: [
    emoji("⚡ Build responsive websites using HTML, CSS, and JavaScript"),
    emoji("⚡ Develop mobile applications using Java and Kotlin"),
    emoji("⚡ Design and implement RESTful APIs using FastAPI"),
    emoji("⚡ Manage and query relational databases using PostgreSQL"),
    emoji("⚡ Integrate third-party services like Firebase"),
    emoji("⚡ Lead or collaborate on full systems including frontend, backend, and deployment")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-mobile-alt" // Kotlin doesn't have a FontAwesome icon, so this is a placeholder
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fab fa-plug" // No direct icon, but this is a suitable alternative
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Johannesburg",
      logo: require("./assets/images/UJlogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "March 2021 – June 2025",
      desc: "Specialized in Computer Science and Informatics. Gained hands-on experience through real-world projects and advanced coursework.",
      descBullets: [
        "Advanced Software Engineering",
        "Database Management",
        "Computer Networking",
        "Web Development",
        "Data Structures and Algorithms",
        "Introduction to Object-Orienteded Programming"
      ]
    }
  ]
};

// Your top 4 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile App Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Developer",
      company: "Big Jim's Grills (Client Project)",
      companylogo: require("./assets/images/bigjimgrills.png"),
      date: "February 2024 – October 2024",
      desc: "Led a team of four in designing and developing a complete digital system for a real-world client, including a website, mobile app, and database.",
      descBullets: [
        "Developed the mobile application using Java and Kotlin",
        "Designed and implemented RESTful APIs for app-server communication",
        "Managed the PostgreSQL database for data storage and retrieval",
        "Streamlined record-keeping and stock tracking, reducing expenses by 30%",
        "Integrated online ordering features that boosted client sales by 50%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bigjimgrillsLogo.webp"),
      projectName: "Big Jim's Grills",
      projectDesc: "A complete 3-tier system for a real-world restaurant client. Includes a mobile app, PostgreSQL database, and a website with online ordering, stock tracking, and reporting functionality.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        },
        {
          name: "Visit GitHub",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/BlockchainManufaturing.webp"),
      projectName: "Blockchain Factory Simulator",
      projectDesc: "Built a blockchain-based system that simulated a smartphone assembly factory. Tracked components like screens and batteries, monitored worker activity, and maintained data on a decentralized ledger with a JavaFX GUI.",
      footerLink: [
        {
          name: "Coming Soon",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  //achievementsCards: [
    //{
    //  title: "Google Code-In Finalist",
    //  subtitle:
    //    "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //  image: require("./assets/images/codeInLogo.webp"),
    //  imageAlt: "Google Code-In Logo",
    //  footerLink: [
    //    {
    //      name: "Certification",
    //      url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //    },
    //    {
    //      name: "Award Letter",
    //      url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //    },
    //    {
    //      name: "Google Code-in Blog",
    //      url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //    }
    //  ]
    //},
    //{
    //  title: "Google Assistant Action",
    //  subtitle:
    //    "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //  image: require("./assets/images/googleAssistantLogo.webp"),
    //  imageAlt: "Google Assistant Action Logo",
    //  footerLink: [
    //    {
    //      name: "View Google Assistant Action",
    //      url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //    }
    //  ]
    //},
    //{
    //  title: "PWA Web App Developer",
    //  subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //  image: require("./assets/images/pwaLogo.webp"),
    //  imageAlt: "PWA Logo",
    //  footerLink: [
    //    {name: "Certification", url: ""},
    //    {
    //      name: "Final Project",
    //      url: "https://pakistan-olx-1.firebaseapp.com/"
    //    }
    //  ]
//    }
//  ],
//  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO LISTEN TO OTHER PEOPLE TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Nqobile Nkiwane's Resume",
  subtitle: "Feel free to download my resume",
  resumeUrl: "https://drive.google.com/file/d/1SQASty7I82Mev4AxUu8_1OEtvMZgjnvW/view", // Set to empty to hide the button

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27835765413", // Add your phone number
  email_address: "nqobilenkiwane01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
