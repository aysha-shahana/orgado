import watch from "../assets/img/watch.webp";
import banana from "../assets/img/banana.webp";
import coffee from "../assets/img/coffee.webp";
import mug from "../assets/img/mug.webp";
import chips from "../assets/img/chips.webp";
import freshImg from "../assets/img/fresh-kisses.webp";

const products = [
  { id: 1, image: chips, name: "Triangular shaped chips", price: "$9.00" },
  { id: 2, image: mug, name: "Ceramic Coffee Mug", price: "$12.00" },
  { id: 3, image: coffee, name: "Artisan Cold Brew Coffee Concentrate", price: "$25.00" },
  { id: 4, image: watch, name: "Watch", price: "$1200.00" },
  { id: 5, image: banana, name: "Premium banana", price: "$40.00" },
];

const freshImgData = freshImg;

export { products, freshImgData };
