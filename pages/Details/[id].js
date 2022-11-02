import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../../components/atoms";
import { Back } from "../../components/molecules";
import { Header } from "../../components/organisms";
import { DetailsPage } from "../../components/templates";
import { getProduct } from "../api/productApi";

const Details = () => {
  // Router
  const { query, isReady } = useRouter();

  // State
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Get Product
  const loadProduct = async (id) => {
    const { data } = await getProduct(id);
    setProduct(data);
  };

  useEffect(() => {
    if (isReady) {
      const load = async () => {
        await loadProduct(query.id);
        setIsLoading(false);
      };

      load();
    }
  }, [isReady]);

  return (
    <>
      <Header>
        <Back href="/" text="Back to products" />
      </Header>
      {isLoading ? <Loader /> : <DetailsPage product={product} />}
    </>
  );
};

export default Details;
