import HeroImage from "";
import HeroImage1 from "/assets/hero-1.webp";
import HeroImage2 from "/assets/hero-2.webp";
import HeroImage3 from "/assets/hero-3.webp";

import Pembicara1 from "/assets/pembicara-1.webp";
import Pembicara2 from "/assets/pembicara-2.webp";

import Sponsor1 from "/assets/kominfo.webp";
import Sponsor2 from "/assets/google.webp";
import Sponsor3 from "/assets/facebook.webp";
import Sponsor4 from "/assets/discord.webp";

import portfolio1 from "/assets/portfolio1.png";
import portfolio2 from "/assets/portfolio2.png";
import portfolio3 from "/assets/portfolio3.png";

export const Image = {
  HeroImage,
  HeroImage1,
  HeroImage2,
  HeroImage3,
  Pembicara1,
  Pembicara2,
  Sponsor1,
  Sponsor2,
  Sponsor3,
  Sponsor4,
  portfolio1,
  portfolio2,
  portfolio3,
};

export const SekilasAcara = [
  {
    id: 1,
    icon: "ri-lightbulb-flash-fill",
    Judul: "Inovator",
    text: "individu yang membawa ide-ide baru yang revolusioner, para pemimpin pemikiran yang berani menawarkan solusi kreatif untuk masalah yang kompleks.",
  },
  {
    id: 2,
    icon: "ri-heart-fill",
    Judul: "Penampilan",
    text: "Tidak hanya presentasi yang dibawakan oleh Inovator atau Pengembang, pada event kali ini juga kita akan menampilkan sebuah pertunjukan.",
  },
  {
    id: 3,
    icon: "ri-star-fill",
    Judul: "Hadiah",
    text: "Pada event kali ini bagi peserta yang beruntung akan mendapatkan hadiah dari Inovator danjuga Sponsor yang mensponsori event kali ini.",
  },
];

import mc1 from "/assets/mc-1.webp";
import mc2 from "/assets/mc-2.webp";
import Penyanyi from "/assets/penyanyi.webp";

export const DataPembicara = [
  {
    id: 1,
    img: Pembicara1,
    nama: "Ms. Jessica",
    job: "CEO Perusahaan Jaya",
  },
  {
    id: 2,
    img: Pembicara2,
    nama: "Mr. Jajang",
    job: "CEO Perusahaan Techno",
  },
  {
    id: 3,
    img: mc1,
    nama: "Mr. Wellington",
    job: "Pembawa Acara",
  },
  {
    id: 4,
    img: mc2,
    nama: "Ms. Daisey",
    job: "Pembawa Acara",
  },
  {
    id: 5,
    img: Penyanyi,
    nama: "Mr. Davey",
    job: "Penyanyi",
  },
];

export const PortfolioData = [
  {
    title: "Website Company A",
    description: "Modern corporate website with responsive design.",
    img: portfolio1,
  },
  {
    title: "E-commerce Store B",
    description: "Full-featured online store with smooth checkout flow.",
    img: portfolio2,
  },
  {
    title: "Landing Page C",
    description: "High-converting landing page with animation.",
    img: portfolio3,
  },
];
