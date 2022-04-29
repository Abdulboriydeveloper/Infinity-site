import './Navbar.css';
import {Link} from 'react-router-dom';
import InfinityLogo from '../../assets/logo.svg';


function Navbar () {

return(
  <>

    <div className="container">
       <div className="menu">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid navbarHeader">
                <div className="col-5">
                  <div className="group10472">
                    <div className="infinitySymbol1">
                      <div className="group">
                        <Link className="nav-title-link nav-link-dropdown active active-nav" aria-current="page" to="/">
                          <img src={InfinityLogo} alt="" className="infinityLogo" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="navbar-toggler navbarTogler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="navbar-collapse navbarMedia collapse show" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarMain">
                      <li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle headerText coursesHeader" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kurslar</a>
                        <ul className="dropdown-menu headerDropUl" aria-labelledby="navbarDropdown">
                          <li>
                            <a className="dropdown-item headerText dropdownText" href="">
                              <Link className="nav-title-link nav-link-dropdown active active-nav dropdownText" aria-current="page" to="/Ielts">IELTS</Link>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item headerText dropdownText" href="">
                              <Link className="nav-title-link nav-link-dropdown active active-nav dropdownText" aria-current="page" to="/Web">Web Dasturlash</Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a class="nav-link headerText aboutUsHeader" href="">
                          <Link className="nav-title-link nav-link-dropdown active active-nav aboutUsHeaderLink" aria-current="page" to="/About">Biz haqimizda</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a class="nav-link headerText contactUsHeader" href="">
                          <Link className="nav-title-link nav-link-dropdown active active-nav contactUsHeaderLink" aria-current="page" to="/Contact">Aloqa</Link>
                        </a>
                      </li>
                      <li className="applyBtnLi">
                        <button class="applyBtn" type="submit">
                          <Link className="nav-title-link nav-link-dropdown active active-nav applyBtnLink" aria-current="page" to="/Registration">Ro'yxatdan o'tish</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
              </div>
            </nav>
          </div>
    </div>

  </>
)
}

export default Navbar;