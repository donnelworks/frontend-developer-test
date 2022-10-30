import { Filter } from "../molecules";
import { Header, Products } from "../organisms";

const ListProduct = ({ products }) => {
  return (
    <>
      <Header>
        <Filter />
      </Header>
      <Products products={products} />
    </>
  );
};

export default ListProduct;
