import './Header.css';
import undrowInterface from '../../assets/undraw_voice_interface_eckp1.svg';

import AOS from 'aos';
import "aos/dist/aos.css";



function Header () {

  AOS.init({
    duration:1200
  });

return(
  <>

    <div className="homePage ">
        <div className="container headerContainer">

          <div className="mainPageHeader">
            <div className="row">
              <div  className="col-6 headerCarousel ">
                <div  id="carouselExampleDark" className="carousel carousel-dark slide carouselHeaderText" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        
                        <li>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="dot active carouselDot" aria-current="true" aria-label="Slide 1"></button>
                        </li>

                        <li>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="dot carouselDot" aria-label="Slide 2"></button>
                        </li>

                        <li>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="dot carouselDot" aria-label="Slide 3"></button>
                        </li>

                        <li>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="dot carouselDot" aria-label="Slide 4"></button>
                        </li>
                      
                    </div>
                  
                  <div  className="carousel-inner carouselInner ">
                    <div className="carousel-item active carousell" data-bs-interval="10000">
                      <div className="carousel-caption d-none d-md-block">
                        <p className="pHeader sec" id="home">Zamonaviy kasblarni biz bilan o'rganing</p>
                      </div>
                    </div>
                    <div className="carousel-item carousell" data-bs-interval="2000">
                      <div className="carousel-caption d-none d-md-block">
                        <p className="pHeader sec" id="home2" >We change lives through education</p>
                      </div>
                    </div>
                    <div className="carousel-item carousell">
                      <div className="carousel-caption d-none d-md-block">
                        <p className="pHeader sec" id="home3">Hayotingizni ta'lim orqali o'zgartiramiz</p>
                      </div>
                    </div>
                    <div className="carousel-item carousell">
                      <div className="carousel-caption d-none d-md-block">
                        <p className="pHeader sec" id="home4">Study modern subjects <br /> with us</p>
                      </div>
                    </div>
                    <button className='mainPageBtnHeader'>Batafsil</button>
                  </div>
                </div>
              </div>

              <div  className="col-6 mainPageImage">
                <div className="imgBgVector">
                  <img src={undrowInterface} alt="" className='imgHomePage'/>
                </div>
              </div>
            </div>
           
          </div>
        </div>

    </div>
      
  </>
)
}

export default Header;