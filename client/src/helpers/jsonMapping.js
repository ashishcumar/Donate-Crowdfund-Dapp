import treePlanted from "../assets/treesPlanted.png";
import treeRestored from "../assets/treesRestored.png";
import livesChanged from "../assets/livesChanged.png";
import animalsSaved from "../assets/animalsSaved.png";
import co2Restored from "../assets/c02Restored.png";
import waterCleaned from "../assets/waterCleaned.png";
import googleIcon from "../assets/googleIcon.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtubeLogo.svg";
import pintrest from "../assets/pintrest.svg";
import twitch from "../assets/twitchLogo.svg";
import webflow from "../assets/webflowLogo.svg";
import congoRainforest from "../assets/congoRainforest.jpg";
import amazonforest from "../assets/amazonForest.jpg";
import lacandonJungle from "../assets/lacandonJungle.jpg";
import treesRestored from "../assets/treesRestored.png";
import animalSaved from "../assets/animalsSaved.png";
import waterCleaning from "../assets/waterCleaned.png";
import communityHelp from "../assets/communityHelp.png";
import treeIconGreenBg from "../assets/treesIconGreenBg.svg";
import heart from "../assets/heart.svg";
import heartOutline from "../assets/heartOutline.svg";
import treeIcon from "../assets/treeIcon.svg";
import donate100 from "../assets/donate100.png";
import donate500 from "../assets/donate500.png";
import donateCustom from "../assets/donateCustom.png";
import donate300 from "../assets/donate300.png";

export const achievements = [
  {
    count: "500mm+",
    text: "Trees planted",
    icon: treePlanted,
  },
  {
    count: "28,000k+",
    text: "Acres restored",
    icon: treeRestored,
  },
  {
    count: "75,000+",
    text: "Lives changed",
    icon: livesChanged,
  },
  {
    count: "300,000+",
    text: "Animals saved",
    icon: animalsSaved,
  },
  {
    count: "475,000+",
    text: "CO2 tons restored",
    icon: co2Restored,
  },
  {
    count: "100,000+",
    text: "Kl of water cleaned",
    icon: waterCleaned,
  },
];

export const partners = [
  googleIcon,
  facebook,
  youtube,
  pintrest,
  twitch,
  webflow,
  twitch,
  pintrest,
  googleIcon,
  youtube,
];

export const projects = [
  {
    icon: amazonforest,
    title: "Amazon Forest",
    text: "Preserved and restored thousands of hectares, safeguarding biodiversity.",
    treeIcon: treeIcon,
    heartOutline: heartOutline,
    treeCount: "25M",
    moneyRaised: "900 Eth",
  },
  {
    title: "Congo Rainforest",
    text: "Implemented sustainable practices, preserving wildlife habitats .",
    icon: congoRainforest,
    treeIcon: treeIcon,
    heartOutline: heartOutline,
    treeCount: "100M",
    moneyRaised: "6000 Eht",
  },
  {
    icon: lacandonJungle,
    title: "Lacandon Jungle",
    text: "Promoted conservation efforts, protecting endemic species.",
    treeIcon: treeIcon,
    heartOutline: heartOutline,
    treeCount: "75M",
    moneyRaised: "23k Eth",
  },
  {
    icon: amazonforest,
    title: "Amazon Forest",
    text: "Preserved and restored thousands of hectares, safeguarding biodiversity.",
    treeIcon: treeIcon,
    heartOutline: heartOutline,
    treeCount: "25M",
    moneyRaised: "900 Eth",
  },
  {
    title: "Congo Rainforest",
    text: "Implemented sustainable practices, preserving wildlife habitats.",
    icon: congoRainforest,
    treeIcon: treeIcon,
    heartOutline: heartOutline,
    treeCount: "75M",
    moneyRaised: "21k Eth",
  },
  {
    icon: lacandonJungle,
    title: "Lacandon Jungle",
    text: "Promoted conservation efforts, protecting endemic species.",
    treeIcon: treeIcon,
    heartOutline: heartOutline,
    treeCount: "100M",
    moneyRaised: "30k Eth",
  },
];

export const whatBeDo = [
  {
    icon: treesRestored,
    title: "Tree Reforestation",
    text: "We plant native trees in deforested areas, revitalizing ecosystems and promoting biodiversity.",
  },
  {
    icon: animalSaved,
    title: "Habitat Protection",
    text: "We safeguard natural habitats, ensuring endangered species thrive and ecosystems remain balanced.",
  },
  {
    icon: waterCleaning,
    title: "River & Lake Cleaning",
    text: "We clean water bodies, removing pollutants to preserve aquatic life and provide clean water.",
  },
  {
    icon: communityHelp,
    title: "Community Help",
    text: "We empower local communities through education, jobs, and sustainable practices, fostering resilience and prosperity.",
  },
];

export const whyUsPointer = [
  "100+ succesful reforestation projects",
  "Over 200M trees planted since our foundation 2006",
  "A total of over 50K global volunteers",
];

export const whyUsImgPointer = [
  {
    icon: treeIconGreenBg,
    count: "200,000,000+",
    text: "Trees planted by since 2006",
  },
  {
    icon: heart,
    count: "50,000+",
    text: "Volunteers worldwide",
  },
];

export const donateCards = [
  {
    money: "5 Eth",
    text: "Donate 5 Eth to support global reforestation efforts.",
    icon: donate100,
    value: 0.1,
  },
  {
    money: "10 Eth",
    text: "Contribute 10 Eth to protect forests and biodiversity.",
    icon: donate300,
    value: 0.1,
  },
  {
    money: "50 Eth",
    text: "Support our mission with a donation of 50 Eth.",
    icon: donate500,
    value: 0.1,
  },
  {
    money: "Custom",
    text: "Choose your donation amount to help reforest the world.",
    icon: donateCustom,
    value: 0,
  },
];

export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";