import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetailsPage } from "../../components/templates";
import { getProduct } from "../api/productApi";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  //   useEffect(() => {
  //     console.log(router.query);
  //   }, [router.query]);

  // State
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(router.query);
    loadProduct();
  }, []);

  // Get Product
  const loadProduct = async () => {
    const { data } = await getProduct(id);
    setProduct(data);
  };

  return <DetailsPage product={product} />;
};

export default Details;
