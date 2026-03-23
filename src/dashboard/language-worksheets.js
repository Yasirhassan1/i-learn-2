import frenchFlag from "../assets/french-flag.svg";
import spanishFlag from "../assets/spanish-flag.svg";
import englishFlag from "../assets/english-flag.svg";
import arabicFlag from "../assets/arabic-flag.svg";
import aiIdea from "../assets/ai-idea.svg";
import cloudUpload from "../assets/cloud-upload.svg";

export const data = [
  {
    id: "card-34f",
    cardColor: "#D3F9D8",
    img: frenchFlag,
    title: {
      text: "French",
      color: "#287C74",
    },
    date: "Oct 7, 2025",
    btns: [
      { logo: aiIdea, text: "AI Hint" },
      { logo: cloudUpload, text: "Upload" },
    ],
  },
  {
    id: "card-kh2",
    cardColor: "#F9ECFF",
    img: spanishFlag,
    title: {
      text: "Spanish",
      color: "#A168BE",
    },
    date: "Due: Oct 7, 2025",
    btns: [
      { logo: aiIdea, text: "AI Hint" },
      { logo: cloudUpload, text: "Upload" },
    ],
  },
  {
    id: "card-3kh",
    cardColor: "#EAF5FF",
    img: englishFlag,
    title: {
      text: "English",
      color: "#3685C7",
    },
    date: "Due: Oct 7, 2025",
    btns: [
      { logo: aiIdea, text: "AI Hint" },
      { logo: cloudUpload, text: "Upload" },
    ],
  },
  {
    id: "card-4klj",
    cardColor: "#FEEFE1",
    img: arabicFlag,
    title: {
      text: "Arabic",
      color: "#FF9F01",
    },
    date: "Due: Oct 7, 2025",
    btns: [
      { logo: aiIdea, text: "AI Hint" },
      { logo: cloudUpload, text: "Upload" },
    ],
  },
];