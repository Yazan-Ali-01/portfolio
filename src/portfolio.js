/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yazan's Portfolio",
  description:
    "As a MERN stack developer, I am able to leverage the power of React and Node.js to create dynamic, responsive web applications that are both user-friendly and scalable. With a focus on clean, efficient code, I am committed to delivering top-notch results to clients.",
  og: {
    title: "Yazan Ali Portfolio",
    type: "website",
    url: "http://yazan-ali.com/",
  },
};

//Home Page
const greeting = {
  title: "Yazan Ali",
  logo_name: "Yazan Ali",
  // nickname: "Mr.Z",
  subTitle:
    "As a MERN stack developer, I am able to leverage the power of React and Node.js to create dynamic, responsive web applications that are both user-friendly and scalable. With a focus on clean, efficient code, I am committed to delivering top-notch results to clients.",
  resumeLink:
    "https://docs.google.com/document/d/1C9QymwC5gX83Wxe0wjwxH0TnFR7PDWar/view?usp=sharing",
  portfolio_repository: "https://github.com/Yazan-Ali-01",
  githubProfile: "https://github.com/Yazan-Ali-01",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Yazan-Ali-01",
  // linkedin: "https://www.linkedin.com/in/yazan-ali/",
  // gmail: "yazan.ali.dev@gmail.com",

  {
    name: "Github",
    link: "https://github.com/Yazan-Ali-01",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yazan-ali/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yazan.ali.dev@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Responsive UIs",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Specialize in creating responsive user interfaces that are optimized for various devices, including desktop computers, tablets, and smartphones.",
        "⚡ Ensure adaptability and user-friendliness across all screen sizes through meticulous UI design.",
        "⚡ Focus on delivering an optimal viewing and interaction experience for users on any device.",
      ],
      softwareSkills: [
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "skill-icons:tailwindcss-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MUI",
          fontAwesomeClassname: "skill-icons:materialui-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "skill-icons:bootstrap",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "skill-icons:css",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Next.js, Typescript, Shadecn UI and Tailwind CSS",
        "⚡ Creating application backend in Node.js, Typescript, Express & Nest.js ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "devicon:html5",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "skill-icons:css",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "skill-icons:git",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "skill-icons:tailwindcss-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon-round",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "skill-icons:kubernetes",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-light",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "devicon:nextjs",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Postgress",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/YazanAli",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@yazanali",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Frontend and Backend Developer and Designer. I have also worked with some well established companies mostly as Full Stack Developer. I love attending events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Royal Class Group",
          company_url: "https://royalclass.group/",
          logo_path: "rc_logo.jpeg",
          duration: "Apr 2024 - Present",
          location: "Dubai,UAE",
          description: "Led the development and maintenance of scalable codebases using Next.js 14 and React, integrated React Query for efficient data fetching, transformed Figma designs into responsive applications, modernized legacy code with best practices, and mentored junior developers and interns to enhance their skills and productivity.",
          color: "#000000",
        },
        {
          title: "Full-stack Developer ",
          company: "BeInMedia - Nmo AI.",
          company_url: "https://nmo.ai/",
          logo_path: "nmoai_logo.png",
          duration: "Jul 2022 - Jan 2024",
          location: "Kuwait City,Kuwait",
          description:
            "Contributed to scalable full-stack solutions using React, Next.js, Node.js, Tailwind CSS, and DaisyUI, enhancing application robustness and user experience. Integrated ElasticSearch with Docker and Kubernetes, improving deployment and search functionality. Streamlined test case prioritization and developed automation tools, optimizing release quality and development efficiency.",
          color: "#000000",
        },
        {
          title: "Front-end Web Developer",
          company: "Osous Technology",
          company_url: "https://www.osoustech.com/",
          logo_path: "osous_logo.png",
          duration: "Aug 2021 - June 2022",
          location: "Remote",
          description:
            "engineered user-friendly, responsive web interfaces using React, Material-UI, and Tailwind CSS, improving aesthetics and user interaction, which led to higher user engagement. I optimized React applications for maximum performance, scalability, and maintainability, ensuring seamless integration with backend systems to enhance overall system efficiency. Additionally, I diagnosed and resolved front-end issues, significantly enhancing user experience and solidifying application reliability and user satisfaction.",
          color: "#0879bf",
        },
        {
          title: "Web Development Instructor",
          company: "Syrian Computer Society",
          company_url: "https://www.scs.org.sy/",
          logo_path: "scs_logo.png",
          duration: "June 2020 - June 2021",
          location: "Latakia, Syria",
          description:
            "I taught and mentored students in various MERN stack courses and collaborated with other trainers to develop new training programs or improve existing ones. I provided individual feedback and support to students, aiming to empower them with the skills needed for the dynamic world of web development, ensuring they were well-versed in both traditional technologies and the latest advancements, including AI.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In my web development projects, I utilize a diverse range of the latest technology tools. My primary expertise is in developing dynamic and scalable web applications, ensuring they perform optimally across various platforms and devices.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Demos, Projects contributed to.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ok-menu",
      name: "Ok-Menu",
      createdAt: "2017-07-02T00:00:00Z",
      description: "World's Easiest Contactless Menu to Use",
      url: "https://oktabletmenu.com/",
    },
    {
      id: "osus-tech",
      name: "Golden line website",
      createdAt: "2022-09-19T00:00:00Z",
      description: "Golden Line Productions - a leading television production and distribution company. ",
      url: "https://goldenline-production.com/",
    },
    {
      id: "royal-class",
      name: "Royal Class Portfolio",
      createdAt: "2024-7-12T00:00:00Z",
      description: "Robust clean portfolio with a huge focus on SEO",
      url: "https://royalclass.group/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yazan-avatar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Next.js, React, Basic Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Al A'amal Street, Business Bay, Dubai, UAE",
    locality: "Business Bay",
    country: "UAE",
    region: "Dubai",
    postalCode: "00000",
    streetAddress: "Al A'amal Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/PncGe444EggFjiaN9",
  },
  phoneSection: {
    title: "Call Me",
    subtitle: "+971585342724",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
