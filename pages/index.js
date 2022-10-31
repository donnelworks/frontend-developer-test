import { useEffect, useState } from "react";
import { Filter } from "../components/molecules";
import { Header } from "../components/organisms";
import { ListProductPage } from "../components/templates";
import { getAllProducts, getAllCategories } from "./api/productApi";
const Home = () => {
  // State
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    loadAllProducts();
    loadAllCategories();
    setLoading(false);
  }, []);

  return (
    <>
      <Header>
        <Filter categories={categories} />
      </Header>
      {!loading && <ListProductPage products={products} />}
    </>
  );
};

export default Home;
