import React from 'react';
import Card from '../../assets/cup.svg';
import Location from '../../assets/pin.svg';
import Like from '../../assets/like.svg';
import Stars from '../../assets/stars.svg';
import ImageGirle from '../../assets/imageGirle.svg';
import './NegaAynanBiz.css'


function NegaAynanBiz() {
    return (
        <>
            <div className="wrapperForWhyExactlyUs">
                <div className="container">
                    <h1 className="basicNameForWhyExactlyUsFile">Nega aynan biz?</h1>

                    <div className="row colForWhyExactlyUs">
                        <div data-aos="fade-right" className="col-sm-4 col-md-12 col-lg-4 ">
                            <div>
                                <span>
                                    <img className='iconsNegaAynanBiz' src={Card} alt="Bu joyda rasm bor!" /> 
                                    <span className="whyExactlyUsCup">Ishonchli metod</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img className='iconsNegaAynanBiz' src={Like} alt="Bu joyda rasm bor!" /> 
                                    <span className="whyExactlyUsCup">Malakali ustozlar</span>
                                </span>
                            </div>
                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img className='iconsNegaAynanBiz' src={Stars} alt="Bu joyda rasm bor!" /> 
                                    <span className="whyExactlyUsCup">Qo'shimcha darslar</span>
                                </span>
                            </div>

                            

                        </div>

                        <div data-aos="fade-left" className="col-sm-4 col-md-12 col-lg-4 seconGridWgyExactlyUs">

                            <div>
                                <span>
                                    <img className='iconsNegaAynanBiz' src={Location} alt="Bu joyda rasm bor!" /> 
                                    <span className="whyExactlyUsCup">Shahar markazida</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img className='iconsNegaAynanBiz' src={Like} alt="Bu joyda rasm bor!" /> 
                                    <span className="whyExactlyUsCup">Amaliy darslar</span>
                                </span>
                            </div>
                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img className='iconsNegaAynanBiz' src={Stars} alt="Bu joyda rasm bor!" /> 
                                    <span className="whyExactlyUsCup">STEAM darslari</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <button type="button" className="btn whyExactlyUsButton">Batafsil</button>
                            </div>

                        </div>
                        <div data-aos="fade-left" className="col-sm-4 col-md-12 col-lg-4 circleOutWhyExactlyUsWrapperForResponsive">

                            <div className="circ circleOutWhyExactlyUsForResponsive">
                                <img className="imgGirlWhyExactlyUs imgGirlWhyExactlyUsResponsive" src={ImageGirle} alt="Bu joyda rasm bor!" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NegaAynanBiz;