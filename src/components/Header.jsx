import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
          <img src="https://i.imgur.com/4n6NYJL.png?1" alt="" />
        </div>
      </Link>
      <div className="cart-link">
        <Link to="drinks/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
      </div>
    </nav>
  );
}
