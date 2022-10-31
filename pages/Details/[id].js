import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetailsPage } from "../../components/templates";
import { getProduct } from "../api/productApi";

const Details = () => {
  // Router
  const router = useRouter();
  const id = router.query.id;

  // State
  const [product, setProduct] = useState({});

  useEffect(() => {
    loadProduct();
  }, []);

  // Get Product
  const loadProduct = async () => {
    console.log(id);
    // const { data } = await getProduct(id);
    // setProduct(data);
  };

  return <DetailsPage product={product} />;
};

export default Details;
