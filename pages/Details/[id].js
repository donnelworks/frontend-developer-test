import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Back } from "../../components/molecules";
import { Header } from "../../components/organisms";
import { DetailsPage } from "../../components/templates";
import { DetailsProvider } from "../../contexts/DetailsContext";
import { getProduct } from "../api/productApi";

const Details = () => {
  // Router
  const { query, isReady } = useRouter();

  // State
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // Get Product
  const loadProduct = async (id) => {
    const { data } = await getProduct(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isReady) {
      loadProduct(query.id);
    }
  }, [isReady]);

  return (
    <DetailsProvider value={product}>
      <Header>
        <Back href="/" text="Back to products" />
      </Header>
      {!loading && <DetailsPage />}
    </DetailsProvider>
  );
};

export default Details;
