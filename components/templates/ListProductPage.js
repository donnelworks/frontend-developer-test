import { ProductItem } from "../molecules";
import { ListProducts } from "../organisms";

const ListProductPage = ({ products }) => {
  return (
    <>
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
