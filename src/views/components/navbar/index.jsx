import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img width={"53px"} className="logo" src="/images/Myntra-icon-logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME & LIVING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BEAUTY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">STUDIO</a>
                            </li>
                        </ul>
                        <div className="d-flex searchBar px-2 py-2" role="search">
                            <div className='d-flex align-items-center px-2 searchicon pointer'>
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </div>
                            <input className="py-1 me-2 inputbar" type="search" placeholder="Search for products, brands and more" aria-label="Search" />
                        </div>
                        <div className='d-flex gap-3 ms-3'>
                            <Link className='text-center profile' to={'/login'}>
                                <FontAwesomeIcon icon="fa-regular fa-user" />
                                <div className='navtabs'>Profile</div>
                            </Link>
                            <div className='text-center'>
                                <FontAwesomeIcon icon="fa-regular fa-heart" />
                                <div className='navtabs'>Wishlist</div>
                            </div>
                            <div className='text-center'>
                                <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                                <div className='navtabs'>Bag</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;