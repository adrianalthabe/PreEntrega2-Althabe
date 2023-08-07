import NovaStarImage from "./img/NovaStar-VX400s-.jpg";
import FuenteImage from "./img/fuente-5v-60a-metalica.jpg";
import LamparaImage from "./img/lamparaosram.jpg";

const products = [
  {
    id: "1",
    name: "Escalador NovaStar",
    price: 890000,
    category: "Escaladores",
    img: NovaStarImage,
    stock: 25,
    description: "Escalador para pantallas Led"
  },
  {
    id: "2",
    name: "Fuentes Switching",
    price: 60000,
    category: "Fuentes",
    img: FuenteImage,
    stock: 10,
    description: "Fuentes de alimentación Switching"
  },
  {
    id: "3",
    name: "Lámparas Cabezales",
    price: 40000,
    category: "Lámparas",
    img: LamparaImage,
    stock: 30,
    description: "Lámparas para cabezales móviles"
  }
];

export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
