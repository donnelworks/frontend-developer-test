import { useEffect, useState } from "react";
import { Loader } from "../components/atoms";
import { Filter } from "../components/molecules";
import { Header } from "../components/organisms";
import { ListProductPage } from "../components/templates";
import {
  getAllProducts,
  getAllCategories,
  getCategory,
  searchProduct,
} from "./api/productApi";

const Home = () => {
  // State
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryVal, setCategoryVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  // Search Product
  const handlerSearch = async (key) => {
    setSearchVal(key);
    setCategoryVal("");
    setIsLoading(true);
    if (key === "") {
      const { data } = await getAllProducts();
      setProducts(data);
      setIsLoading(false);
    } else {
      const { data } = await searchProduct(key);
      setProducts(data);
      setIsLoading(false);
    }
  };

  // Change Category
  const handlerCategory = async (category) => {
    setCategoryVal(category);
    setSearchVal("");
    setIsLoading(true);
    if (category === "") {
      const { data } = await getAllProducts();
      setProducts(data);
      setIsLoading(false);
    } else {
      const { data } = await getCategory(category);
      setProducts(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      await loadAllProducts();
      await loadAllCategories();
      setIsLoading(false);
    };
    load();
  }, []);

  return (
    <>
      <Header>
        <Filter
          categories={categories}
          searchValue={searchVal}
          categoryValue={categoryVal}
          onChangeText={(val) => handlerSearch(val)}
          onChangeSelect={(val) => handlerCategory(val)}
        />
      </Header>
      {isLoading ? <Loader /> : <ListProductPage products={products} />}
    </>
  );
};

export default Home;
