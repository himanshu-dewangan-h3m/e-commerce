import { addToCart, removeFromCart, emptyCart } from '../redux/actions/cartAction';
import { productList } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux'

function Main() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.productData);
  console.warn('Data in Main: ',selector)

  const product = {
    name: 'IPhone',
    category: 'Mobile',
    price: 1000,
    color: 'Red'
  }

  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button> 
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
    </div>
  );
}

export default Main;
