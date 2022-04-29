import React from "react";
import './AsosiyYunalishlar.css';
import AOS from 'aos';
import "aos/dist/aos.css";

function AsosiyYunalishlar() {

    AOS.init();

    return (
        <>
            <div className="container wrapperForMainLine">
                <h1 className="mainLineBasicTheme">Asosiy yo'nalishlar</h1>

                <div className="mainLineCardSection">

                    <div className="row asosiyYunalishRow">
                        <div className="col-sm-4 col-md-12 col-lg-4 noneBorderMainLine  mainLineFirstCardFirst mainLineFirstCard">
                            <div data-aos="fade-down" className="mainLineFirstCard">
                                <p className="mainLineProgramming">Dasturlash</p>
                                <p className="mainLineCourses">Foundation, Frontend, Backend</p> <br />
                                <p className="mainLineView mainLineViewView">Ko'rish</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 noneBorderMainLine  mainLineSecondCard mainLineFirstCard">
                            <div data-aos="fade-up" className="mainLineFirstCard">
                                <p className="mainLineProgramming">Ingiliz tili</p>
                                <p className="mainLineCourses">Kids, General, IELTS</p> <br />
                                <p className="mainLineView">Ko'rish</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 noneBorderMainLine  mainLineThirdCard mainLineFirstCard">
                            <div data-aos="fade-down" className="mainLineFirstCard">

                                <p className="mainLineProgramming mainLineProgrammingMath">Matematika</p>
                                <p className="mainLineCourses">Kichik va Katta yoshdagilar uchun</p> <br />
                                <p className="mainLineView">Ko'rish</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsosiyYunalishlar;