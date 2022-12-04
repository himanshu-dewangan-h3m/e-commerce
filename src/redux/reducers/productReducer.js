import { PRODUCT_LIST } from "../constant";

export const productData = (data = [], action) => {

  switch (action.type) {
    case PRODUCT_LIST:
      console.warn("PRODUCT_LIST condition", action)
      return [action.data, ...data];
    
  default :
    return data
  }
}