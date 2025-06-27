import footImg from '../src/images/foot_img.svg';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <>
  
<footer className="footer">

  <div className="py-3 py-md-5 py-xl-8 border-top border-light-subtle">
    <div className="container overflow-hidden">
      <div className="row gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
        <div className="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
          <div className="footer-logo-wrapper text-center text-sm-start">
            <Link to="#!">
              <img src={footImg} alt="BootstrapBrain Logo" width="175" height="57"/>
            </Link>
          </div>
        </div>

        <div className="col-xs-12 col-xl-6 order-2 order-xl-1">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link link-secondary px-2 px-md-3  text-white" to="#!">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary px-2 px-md-3 text-white" to="#!">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary px-2 px-md-3 text-white" to="#!">Advertise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary px-2 px-md-3 text-white" to="#!">Terms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary px-2 px-md-3 text-white" to="#!">Privacy</Link>
            </li>
          </ul>
        </div>

        <div className="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
          <div className="social-media-wrapper">
            <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-sm-end">
              <li className="me-3">
                <Link to="#!" className="link-dark link-opacity-75-hover">
                <i className="fab fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="me-3">
                <Link to="#!" className="link-dark link-opacity-75-hover">
                <i className="fab fa-youtube" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="me-3">
                <Link to="#!" className="link-dark link-opacity-75-hover">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="me-3">
                <Link to="#!" className="link-dark link-opacity-75-hover">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="py-3 py-md-5 border-top border-light-subtle">
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col">
          <div className="footer-copyright-wrapper text-center text-secondary">
            &copy; 2025. All Rights Reserved.
          </div>
          {/* <div className="credits text-secondary text-center mt-2 fs-8">
            Built by <Link to="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">BootstrapBrain</Link> with <span className="text-primary">&#9829;</span>
          </div> */}
        </div>
      </div>
    </div>
  </div>

</footer>
        </>
    );
}
export default Footer;