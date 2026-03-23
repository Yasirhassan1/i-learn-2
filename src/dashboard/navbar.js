import arrowIcon from "../assets/arrow1.svg";
import assignmentIcon from "../assets/assignments.svg"
import libraryIcon from "../assets/library.svg"
import quizIcon from "../assets/quiz-02.svg"
import teachingIcon from "../assets/teaching.svg"
import studentIcon from "../assets/student.svg"
import awardIcon from "../assets/award-01.svg"
import settingIcon from "../assets/account-setting-01.svg"


export const navItems = [
  {
    icon: assignmentIcon,
    title: "Learning Hub",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "Assignment Help", 
        href: "/assignment-help"
      },
         {
        title: "Superpower", 
        href: "/superpower"
      },

      {
        title: "Interactive Lessons", 
        href: "/interactive-lessons"
      },


    ],
   

  },

  {
    icon: libraryIcon,
    title: "Study Materials",
    arrowIcon: arrowIcon,
    subLinksArr:[
      {
        title:  "Little Learners",
        href: "/little-learners"
      },

      {
        title:  "Worksheets",
        href: "/worksheets"
      },

       {
        title:  "Visual Learning",
        href: "/visual-learning"
      },

      {
        title:  "Language Worksheets",
        href: "/language-worksheets"
      },

      {
        title:  "Practice Exercises",
        href: "/practice-exercises"
      },

        {
        title:  "Study Materials",
        href: "/study-materials"
      },


       {
        title:  "Reading",
        href: "/reading"
      },


    ],
  },

  {
    icon: quizIcon,
    title: "Gamification",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "Games",
        href: "/games"
      }
    ],
  },

  {
    icon: teachingIcon,
    title: "Live Tutoring",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },

  {
    icon: studentIcon,
    title: "Student Tools",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },

  {
    icon: awardIcon,
    title: "Leaderboard",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },

  {
    icon: settingIcon,
    title: "Account & Billing",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },
];