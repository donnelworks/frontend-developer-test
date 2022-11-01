import { useEffect, useState } from "react";
import { Filter } from "../components/molecules";
import { Header } from "../components/organisms";
import { ListProductPage } from "../components/templates";
import {
  getAllProducts,
  getAllCategories,
  getCategory,
} from "./api/productApi";
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

  // Change Category
  const handlerCategory = async (category) => {
    if (category === "") {
      const { data } = await getAllProducts();
      setProducts(data);
    } else {
      const { data } = await getCategory(category);
      setProducts(data);
    }
  };

  useEffect(() => {
    loadAllProducts();
    loadAllCategories();
    setLoading(false);
  }, []);

  return (
    <>
      <Header>
        <Filter
          categories={categories}
          onChange={(val) => handlerCategory(val)}
        />
      </Header>
      {!loading && <ListProductPage products={products} />}
    </>
  );
};

export default Home;
