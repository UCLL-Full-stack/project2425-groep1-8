import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
      <a className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-black-50 text-decoration-none">
        {' '}
        Kot Planner
      </a>
      <nav className="nav justify-content-center">
        <Link href="/" className="nav-link px-4 fs-5 text-white">
          Home
        </Link>
        <Link href="/gebouwen" className='nav-link px-4 fs-5 text-white'>
          Gebouwen
        </Link>
      </nav>
    </header>
  );
};

export default Header;
