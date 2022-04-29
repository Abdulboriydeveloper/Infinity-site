import React from "react";
import './Gallereya.css';

import firstPic from '../../assets/sport2.jpg'
import secondPic from '../../assets/infinity1.jpg'
import thirdPic from '../../assets/dreamTicket.jpg'
import fourthPic from '../../assets/infinity3.jpg'
import fifthPic from '../../assets/infinityNotebook.jpg'

import AOS from 'aos';
import "aos/dist/aos.css";

function Gallereya() {

  AOS.init();

  return (

    <div className="ourGallery">
        <div className="container">
          <p className='toGallerySize'>Bizning Gallery</p>
          <div className="row row-cols-2 row-cols-lg-3 rowGalleryCards">

            <div data-aos="fade-down" className="col-12 col-lg-8 exraPadding cardGallery cardGallery1" >
                <img className='firstPicture' src={firstPic} alt="Bu joyda rasm bor!" />
                <div class="infoGalleryFirst">
                  <p className="infoGalleryFirstText">Bizda siz yangi kasbni o'rganishingiz yoki yangi ko'nikmalarga ega bo'lishingiz mumkin. 
                  Bizning dasturlarimiz amaliyotga yo'naltirilgan, biz materialning dolzarbligini 
                  kuzatib boramiz va ish va amaliyotda yordam beramiz.</p>
              </div>
            </div>

            <div data-aos="fade-down" className="col-6 col-lg-4 exraPadding cardGallery">
              <img className='secondPic' src={secondPic} alt="Bu joyda rasm bor!" />
              <div class="infoGallery">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
              </div>
            </div>

            <div data-aos="fade-up" className="col-6 col-lg-4 exraPadding cardGallery">
              <img className='thirdPic ' src={thirdPic} alt="Bu joyda rasm bor!" />
              <div class="infoGallery">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
              </div>
            </div>

            <div data-aos="fade-up" className="col-6 col-lg-4 exraPadding cardGallery">
              <img className='fourthPic ' src={fourthPic} alt="Bu joyda rasm bor!" />
              <div class="infoGallery">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
              </div>
            </div>

            <div data-aos="fade-up" className="col-6 col-lg-4 exraPadding cardGallery">
              <img className='fifthPic ' src={fifthPic} alt="Bu joyda rasm bor!" />
              <div class="infoGallery">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Gallereya;