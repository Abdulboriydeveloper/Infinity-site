import './Web.css';
import { Link } from 'react-router-dom';
import webImg1 from "../../assets/Webhome.svg";
import webImg2 from "../../assets/webImgaes2.svg";
import webImg3 from "../../assets/webImages3.svg";
import webBoy from "../../assets/webBoy.svg";
import webComputer from "../../assets/webComputer.svg";
import webGirl from "../../assets/webGirl.svg";


function Web() {

  return (
    <>
      <div>
        <div className="webWrapper">
          <div className="container">
            <p className='webImgAndName'>
              <span>
                <img className='homeIconWeb' src={webImg1} alt="Bu joyda rasm bor!" />
              </span>
              <span
                className='webTextName'>
                |  Dasturlash
              </span>
            </p>

            <div className="webFirstWrapperBody">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <img className='webSecondImg' src={webImg2} alt="Bu joyda rasm bor!" />
                  </div>
                  <div class="col">
                    <div className="container webFrontendSection">
                      <p className='webFoundation'>Foundation</p>
                      <p className='webNextFoundationText'>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</p>

                      <div className="webBtns">
                        <button type="button" class="btn btn-lg webFirstBtn"><Link className='batafsilBtnWeb' aria-current="page" to="/Foundation">Batafsil</Link></button>
                        <button type="button" class="btn btn-lg webSeconBtn"><a href="https://forms.gle/6YaRThkmL7UdAnUa7" className='kursgaRoyxatdanOtish'>Kursga yozilish</a></button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            <div className="webSecondWrapperBody" zindex={45}>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="container webFrontendSection webFrontendSection2">
                      <p className='webFoundationSecond'>Frontend</p>
                      <p className='webNextFoundationTextSecond'>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</p>

                      <div className="webBtnsSecond" zindex={55}>
                        <button type="button" class="btn btn-lg webFirstBtn"><Link className='batafsilBtnWeb' aria-current="page" to="/Frontend">Batafsil</Link></button>
                        <button type="button" class="btn btn-lg webSeconBtn"><a href="https://forms.gle/6YaRThkmL7UdAnUa7" className='kursgaRoyxatdanOtish'>Kursga yozilish</a></button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img className=' webThirdImg' src={webImg3} alt="Bu joyda rasm bor!" zindex={-55} />
                  </div>
                </div>
              </div>
            </div>



            <div className="webSecondWrapperBody">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="row webInsideImages">
                      <div class="col">
                        <img className='webSecondImg1' src={webBoy} alt="Bu joyda rasm bor!" />
                      </div>
                      <div class="col">
                        <img className='webSecondImg2' src={webComputer} alt="Bu joyda rasm bor!" />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="container webFrontendSection">
                      <p className='webFoundationThird'>Backend</p>
                      <p className='webNextFoundationText'>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</p>

                      <div className="webBtns">
                      <button type="button" class="btn btn-lg webFirstBtn"><Link className='batafsilBtnWeb' aria-current="page" to="/Backend">Batafsil</Link></button>
                        <button type="button" class="btn btn-lg webSeconBtn"><a href="https://forms.gle/6YaRThkmL7UdAnUa7" className='kursgaRoyxatdanOtish'>Kursga yozilish</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="webContactsPart">
              <div className="container">
                <p className='webContactsPartContact'>CONTACT</p>
                <p className='webContactsPartInterest'>Interested in Us?</p>
              </div>


              <div class="container">
                <div class="row webContctsBasicSection">
                  <div class="col">
                    <div className="webSquare">
                      <img className='webImgGirl' src={webGirl} alt="Bu yerda ram bor!" />
                    </div>
                  </div>
                  <div class="col">
                    <div className="webInputForm">
                      <form class="w3-container">

                        <br />
                        <input class="w3-input webInputsStyle" placeholder='Name:' type="text" />
                        <br />

                        <br />
                        <input class="w3-inpu webInputsStyle" placeholder='Number: +998 |' type="tel" />
                        <br />

                        <br />
                        <input class="w3-input webInputsStyle" placeholder='E-mail:' type="email" />
                        <br />

                        <button className='webSendButtonInsideContactPart'>Send</button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Web;