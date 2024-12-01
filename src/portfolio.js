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
  username: "Nebulous Research inc.",
  title: "Welcome to Nebulous Research",
  subTitle:
  "We are a nonprofit organization devoted to advancing innovation in space and defense through cutting-edge research, strategic partnerships, and transformative technologies, all while prioritizing mission-driven collaboration and societal impact.",
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What We Do",
  subTitle: "From conception to completion, Nebulous delivers support on all phases of the research and development lifecycle by :",
  skills: [
    emoji(
      "Providing expertise in literature reviews, theoretical backgrounds, and proposal writing."
    ),
    emoji(
      "Facilitating collaborations to bridge academia and industry in space and defense by strategically aligning funding opportunities with institutional goals through targeted grant matching."
    ),
    emoji(
      "Organizing workshops and professional programs to empower growth and foster knowledge transfer."
    ),
    emoji(
      "Building partnerships to solve national defense challenges using advanced technologies like Artificial Intellignece and the cloud."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  // schools: [
  //   {
  //     schoolName: "Harvard University",
  //     logo: require("./assets/images/harvardLogo.png"),
  //     subHeader: "Master of Science in Computer Science",
  //     duration: "September 2017 - April 2019",
  //     desc: "Participated in the research of XXX and published 3 papers.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //     ]
  //   },
  //   {
  //     schoolName: "Stanford University",
  //     logo: require("./assets/images/stanfordLogo.png"),
  //     subHeader: "Bachelor of Science in Computer Science",
  //     duration: "September 2013 - April 2017",
  //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  //   }
  // ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }
  // ],
  // displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research and Development Services",
      company: "Project Management",
      companylogo: require("./assets/images/ProjectManagment.png"),
      desc: "We specialize in research-driven project management, leveraging agile methodologies to guide initiatives from conception to completion with strategic alignment, data-informed decision-making, and impactful results in space and defense"
    },
    {
      role: "Writing, Management, and Matching",
      company: "Grants",
      companylogo: require("./assets/images/GrantWrite.png"),
      desc: "We excel in precision grant writing by crafting tailored, strategic proposals that align with funding priorities, maximizing your chances of securing grants and advancing your goals."
    },
    {
      role: "Technical Training",
      company: "Workshops",
      companylogo: require("./assets/images/TechTrain.png"),
      desc: "We offer AI labs, cloud solution labs, and software engineering expertise, complemented by hands-on workshops to drive innovation and empower teams in space and defense technology."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Who we partner with",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Who We Are "),
  subtitle:
    "Founded by",
  achievementsCards: [
    {
      title: "Hasan Qureshi, managing partner",
      subtitle:
        "With a B.S. in Computer Science and a passion for innovation, currently Software Engineer and a member of the United States Air Force. Currently pursuing a Master’s degree at Texas A&M, I specialize in merging technical expertise with leadership to tackle complex challenges in technology and defense.",
      image: require("./assets/images/hq.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/hasanaq/"        }
      ]
    },
    {
      title: "Melissa Thompson, managing partner",
      subtitle:
        "As a former Multi-Disciplined Language Analyst with the U.S. Air Force and a graduate of the University of Texas at San Antonio with a B.S. in Psychology, I currently specialize in human resources, industrial technological research and business integration.",
      image: require("./assets/images/mt.png"),
      imageAlt: "Melissa Thompson picture",
      footerLink: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/melissa-t-42b2b281/"
        }
      ]
    },

    {
      title: "Ed Mikus, managing partner",
      subtitle:
        "Accomplished Senior Cyber Defense Leader with expertise in team building, driving innovation, and securing electronic assets. Proven track record of leading high-performing teams to deliver cutting-edge cybersecurity solutions.",
      image: require("./assets/images/em.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Linkedin", url: "https://www.linkedin.com/in/ed-mikus/"},

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Insights",
  subtitle: "Sharing knowledge and expertise through articles that inspire, educate, and drive innovation.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.spaceforce.mil/News/Article-Display/Article/3630536/ussf-accepting-proposals-for-third-research-opportunity-under-the-ussf-universi/",
      title: "USSF Accepting Proposals for Third Research Opportunity",
      description:
        "Explore the latest opportunity to collaborate with the U.S. Space Force under the University Consortium Research Initiative. Submit your proposal today!"
    },
    {
      url: "https://www.afrl.af.mil/News/Article-Display/Article/3875021/strategic-improvements-unveiled-for-afwerxs-open-topic-program/",
      title: "Strategic Improvements Unveiled for AFWERX's Open Topic Program",
      description:
        "Discover the latest enhancements to AFWERX's Open Topic Program, designed to streamline innovation and collaboration with industry and academia.",
    },
    {
      url: "https://aws.amazon.com/what-is/devsecops/",
      title: "What is DevSecOps?",
      description:
        "Learn how DevSecOps integrates security into every phase of the software development lifecycle, enabling faster and more secure deployments.",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {

  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
 
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch"),
  subtitle: "Looking to discuss a project or explore collaboration opportunities? We're here to help. Reach out today.",
  number: "832-619-9135",
  email_address: "hqureshi@nebulousresearch.com",
};

// Twitter Section

const twitterDetails = {
  display: false // Set true to display this section, defaults to false
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
