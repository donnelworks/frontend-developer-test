import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

// Get All Products
async function getAllProducts() {
  const res = await axios.get(`${BASE_URL}`);
  return { data: res.data.products };
}

// Get All Caegories
async function getAllCategories() {
  const res = await axios.get(`${BASE_URL}/categories`);
  return { data: res.data };
}

// Get Product
async function getProduct(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return { data: res.data };
}

export { getAllProducts, getAllCategories, getProduct };
