// Here we put mutations. Remove next line
import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($id: ID!) {
    addItemToOrder(
      productVariantId: $id,
      quantity: 1,
    ) {
      __typename
    }
  }`;