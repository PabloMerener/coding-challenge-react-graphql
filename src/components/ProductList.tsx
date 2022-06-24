import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.products.items.map(
    (e: {
      id: number;
      name: string;
      description: string;
      featuredAsset: {
        source: string;
      };
      variants: {
        id: number;
        price: number;
      }[];
    }) =>
      <div key={e.id}>
        <p>
          {e.name}
        </p>
        <p>
          {e.description}
        </p>
        <img src={e.featuredAsset?.source} alt="" />
        {e.variants.map(v => <p key={"" + e.id + v.id}>{v.price}</p>)}
      </div>
  );
}
