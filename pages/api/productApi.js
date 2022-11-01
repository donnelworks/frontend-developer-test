import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

// Get All Products
async function getAllProducts() {
  const res = await axios.get(`${BASE_URL}`);
  return { data: res.data.products };
}

// Get Product
async function getProduct(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return { data: res.data };
}

// Get All Caegories
async function getAllCategories() {
  const res = await axios.get(`${BASE_URL}/categories`);
  return { data: res.data };
}

// Get Category
async function getCategory(category) {
  const res = await axios.get(`${BASE_URL}/category/${category}`);
  return { data: res.data.products };
}

// Search Product
async function searchProduct(key) {
  const res = await axios.get(`${BASE_URL}/search?q=${key}`);
  return { data: res.data.products };
}

export {
  getAllProducts,
  getAllCategories,
  getProduct,
  getCategory,
  searchProduct,
};
