import { useEffect, useState } from "react";
import { ListProductPage } from "../components/templates";
import { getAllProducts, getAllCategories } from "./api/productApi";
const Home = () => {
  // State
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadAllProducts();
    loadAllCategories();
  }, []);

  // Load All Products
  const loadAllProducts = async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  };

  // Load All Categories
  const loadAllCategories = async () => {
    const { data } = await getAllCategories();
    setCategories(data);
  };

  return (
    <>
      <ListProductPage products={products} categories={categories} />
    </>
  );
};

export default Home;
