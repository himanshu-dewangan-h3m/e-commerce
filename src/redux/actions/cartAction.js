import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../constant";

export const addToCart = (data) => {
  console.warn('Add to cart action is called',data);
  return {
    type: ADD_TO_CART,
    data
  };
}

export const removeFromCart = (data) => {
  console.warn('Remove from cart action is called', data);
  return {
    type: REMOVE_FROM_CART,
    data
  }
}

export const emptyCart = () => {
  console.warn('Empty cart action is called');
  return {
    type: EMPTY_CART,
  }
}