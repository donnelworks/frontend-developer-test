import { useEffect, useState } from "react";
import { ListProduct } from "../components/templates";
import { getAllProducts } from "./api/productApi";
const Home = () => {
  // State
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  // Load All Products
  const loadAllProducts = async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  };

  return (
    <>
      <ListProduct products={products} />
    </>
  );
};

export default Home;
