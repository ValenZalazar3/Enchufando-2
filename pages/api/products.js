import { products } from "../../data/products";

const productsAPI = (req, res) => {
  res.status(200).json(products);
};

export default productsAPI;
