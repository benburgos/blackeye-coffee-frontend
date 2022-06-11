import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
          <h1>black eye coffee app</h1>
        </div>
      </Link>
    </nav>
  );
}
