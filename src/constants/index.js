import blackImg from '../assets/images/black.jpg';
import blueImg from '../assets/images/blue.jpg';
import highlightFirstVideo from '../assets/videos/highlight-first.mp4';
import highlightSecondVideo from '../assets/videos/hightlight-sec.mp4';
import highlightThirdVideo from '../assets/videos/hightlight-third.mp4';
import highlightFourthVideo from '../assets/videos/hightlight-fourth.mp4';
import whiteImg from '../assets/images/white.jpg';
import yellowImg from '../assets/images/yellow.jpg';

const navLinks = ["Store", "Mac", "iPhone", "Support"]

const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightSecondVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export default { navLinks, hightlightsSlides, models, sizes, footerLinks }