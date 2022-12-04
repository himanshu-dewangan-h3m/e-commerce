import './HeaderStyle.css';
import { useSelector } from 'react-redux'

const Header = () => {
  const selector = useSelector((state) => state.cartData);
  console.warn(selector);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{ selector.length }</span>
        <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" alt="cart icon" />
      </div>
    </div>
  )
}

export default Header;