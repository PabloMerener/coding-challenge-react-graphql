// Here we put queries. Remove next line
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`query {
    products {
      totalItems
      items {
        id
        name
        description
        featuredAsset {
          source
        }
        variants {
          id
          name
          price
        }
      }
    }
  }`;
