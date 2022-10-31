import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetailsPage } from "../../components/templates";
import { getProduct } from "../api/productApi";

const DetailsWrapper = () => {
  const router = useRouter();
  const id = router.query.id;

  return <Details id={id} />;
};

const Details = ({ id }) => {
  const router = useRouter();
  // State
  const [idProduct, setIdProduct] = useState(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id === undefined) {
      setIdProduct(router.query.id);
    }
    loadProduct();
  }, []);

  // Get Product
  const loadProduct = async () => {
    console.log(idProduct);
    // const { data } = await getProduct(id);
    // setProduct(data);
  };

  return <DetailsPage product={product} />;
};

export default DetailsWrapper;
