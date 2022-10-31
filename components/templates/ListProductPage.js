import { Filter, ProductItem } from "../molecules";
import { Header, ListProducts } from "../organisms";

const ListProductPage = ({ products, categories }) => {
  return (
    <>
      <Header>
        <Filter categories={categories} />
      </Header>
      <ListProducts>
        {products.map((product) => {
          const { id, thumbnail, title, description, rating, price } = product;
          return (
            <ProductItem
              key={id}
              id={id}
              thumbnail={thumbnail}
              title={title}
              description={description}
              rating={rating}
              price={price}
            />
          );
        })}
      </ListProducts>
    </>
  );
};

export default ListProductPage;
