import { Link } from 'react-router-dom';
import useCurrentPath from '../hooks/useCurrentPath';

const Navbar = () => {
  const currentPath = useCurrentPath();

  const handleSignOut = () => {
    localStorage.removeItem('token');
  };

  return (
    <nav className='navbar'>
      <span className='logo' >Find Am</span>
      <div className="navbar-items">
        {currentPath !== '/login' && currentPath !== '/' && currentPath !== '/signup' && (
          <>
            <Link className="navbar-item" to="/items">Feed</Link>
            <Link className="navbar-item" to="/my-listings">My Listings</Link>
            <Link className="navbar-item" to="/post-item">Post Item</Link>
            <Link className="navbar-item" to="/login" onClick={handleSignOut}>Sign Out</Link>
          </>
        )}
        {currentPath === '/login' && <Link className="navbar-item" to="/signup">Signup</Link>}
        {currentPath === '/' && <Link className="navbar-item" to="/signup">Signup</Link>}
        {currentPath === '/signup' && <Link className="navbar-item" to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;



