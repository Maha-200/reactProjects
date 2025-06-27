import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/logo.png';


function Header({ heartIconCount , cartIconCount}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault(); 
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img src={logo} alt="" width="90" height="50" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item ps-5">
                <Link className="nav-link text-white hover-underline-animation" to="#">Home</Link>
              </li>
              <li className="nav-item ps-5">
                <Link className="nav-link text-white hover-underline-animation" to="/product">Product</Link>
              </li>
              <li className="nav-item ps-5">
                <Link className="nav-link text-white hover-underline-animation" to="#" onClick={toggleDropdown}>
                  Pricing
                  {/* Add angle icon */}
                  <i className={`fas ${isDropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                </Link>
                <div className={`pricing-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                  <div className="row justify-content-center">
                    <div className="col-3">
                      <h6>Basic</h6>
                      <ul>
                        <li><Link to="/basic" className='text-light'>Dairy Milk Silk</Link></li>
                        {/* <li>Dairy Milk Duo</li> */}
                      </ul>
                    </div>
                    <div className="col-3">
                      <h6>Standard</h6>
                      <ul>
                        <li><Link to="/standard" className='text-light'>Dairy Milk Crunchies</Link></li>
                        {/* <li>Dairy Milk Twirl</li> */}
                      </ul>
                    </div>
                    <div className="col-3">
                      <h6>Premium</h6>
                      <ul>
                        {/* <li>Dairy Milk White Oreo</li> */}
                        <li>Dairy Milk Caramel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="nav-item dropdown me-3 me-lg-0 ps-5">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/action">Action</Link>
                  <Link className="dropdown-item" to="/another-action">Another action</Link>
                  <Link className="dropdown-item" to="/something-else">Something else here</Link>
                </div>
              </li> */}
               <li className="nav-item ps-5">
                <Link className="nav-link text-white hover-underline-animation" to="/contact">Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link text-white" to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge">{cartIconCount}</span>
                </Link>
              </li>
            </ul>
            
            <ul className="navbar-nav">
              <li className="nav-item me-3 me-lg-0"> 
                <Link className="nav-link text-white" to="/favourite">
                  <i className="fas fa-heart"></i>
                  <span className="badge">{heartIconCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Header;
