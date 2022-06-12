import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
          <img src="https://i.imgur.com/4n6NYJL.png?1" alt=""/>
        </div>
      </Link>
    </nav>
  );
}
