import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

// Get All Products
async function getAllProducts() {
  const res = await axios.get(`${BASE_URL}`);
  return { data: res.data.products };
}

export { getAllProducts };
