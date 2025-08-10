import {
    techEvents, 
    nonTechEvents,
    pyIt,
    itQuiz,
    codathon,
    aiQuiz,
    techTussle,
    cyberSiege,
    webWave,
    aiMemes,
    logoHunt,
    bugBuzz
} from '../constants/eventNames'

import {
  LogoAiMemes,
  LogoAiQuiz,
  LogoBugBuzz,
  LogoCodathon,
  LogoCyber,
  LogoItQuiz,
  LogoLogoHunt,
  LogoPYIT,
  LogoTechTussal,
  LogoWebWave
} from "../assets";

export const EventListing = {
  [pyIt]: {
    name: "PyIt",
    slug: pyIt,
    image: LogoPYIT,
    slogan: "Unleash Python Power!",
  },
  [itQuiz]: {
    name: "IT Quiz",
    slug: itQuiz,
    image: LogoItQuiz,
    slogan: "Think. Quiz. Win.",
  },
  [codathon]: {
    name: "Codathon",
    slug: codathon,
    image: LogoCodathon,
    slogan: "Code Till You Drop!",
  },
  [aiQuiz]: {
    name: "AI Quiz",
    slug: aiQuiz,
    image: LogoAiQuiz,
    slogan: "Test Your AI Acumen!",
  },
  [techTussle]: {
    name: "Tech Tussle",
    slug: techTussle,
    image: LogoTechTussal,
    slogan: "Clash of Coders!",
  },
  [cyberSiege]: {
    name: "Cyber Siege",
    slug: cyberSiege,
    image: LogoCyber,
    slogan: "Secure or Be Conquered!",
  },
  [webWave]: {
    name: "Web Wave",
    slug: webWave,
    image: LogoWebWave,
    slogan: "Surf the Code!",
  },
  [aiMemes]: {
    name: "AI Memes",
    slug: aiMemes,
    image: LogoAiMemes,
    slogan: "Laugh with Logic!",
  },
  [logoHunt]: {
    name: "Logo Hunt",
    slug: logoHunt,
    image: LogoLogoHunt,
    slogan: "Spot the Brand!",
  },
  [bugBuzz]: {
    name: "Bug Buzz",
    slug: bugBuzz,
    image: LogoBugBuzz,
    slogan: "Catch the Bugs!",
  },
};
