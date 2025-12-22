import sedanImg from '../assets/sedan.png';
import coupeImg from '../assets/coupe.png';
import suvImg from '../assets/suv.png';

// Using the same images for variety in mock data, normally would have distinct images
export const cars = [
  {
    id: 1,
    name: "MZ Model S",
    category: "sedan",
    price: "$45,000",
    image: sedanImg,
    description: "The ultimate electric sedan with unparalleled range and comfort.",
    externalUrl: "https://example.com/buy/model-s"
  },
  {
    id: 2,
    name: "MZ GT Coupe",
    category: "coupe",
    price: "$65,000",
    image: coupeImg,
    description: "Sporty, aggressive, and built for speed. Experience the thrill.",
    externalUrl: "https://example.com/buy/gt-coupe"
  },
  {
    id: 3,
    name: "MZ Terrain X",
    category: "suv",
    price: "$55,000",
    image: suvImg,
    description: "Conquer any terrain with luxury and power combined.",
    externalUrl: "https://example.com/buy/terrain-x"
  },
  {
    id: 4,
    name: "MZ Executive",
    category: "sedan",
    price: "$50,000",
    image: sedanImg,
    description: "Business class travel on the road. Sophisticated and smart.",
    externalUrl: "https://example.com/buy/executive"
  },
  {
    id: 5,
    name: "MZ Spider",
    category: "coupe",
    price: "$70,000",
    image: coupeImg,
    description: "Open top freedom with racing DNA.",
    externalUrl: "https://example.com/buy/spider"
  },
  {
    id: 6,
    name: "MZ Family",
    category: "suv",
    price: "$48,000",
    image: suvImg,
    description: "Safety and space for the whole family without compromising style.",
    externalUrl: "https://example.com/buy/family"
  }
];
