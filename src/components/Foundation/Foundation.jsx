import './Foundation.css';
import imgFoundation from '../../assets/foundationImg.svg';
import Clock from '../../assets/time.svg';
import Pen from '../../assets/pen.svg';
import Plus from '../../assets/math-plus.svg'

function Foundation () {

return(
  <>
    <div className='container'>
      <div data-aos="zoom-out-up" className='foundation'>
        <div className="row">
          <div className='col-6 foundationText'>
            <h1 className='textFoundation'>Foundation</h1>
            <p className='pFoundation'>
              It is a long established fact that a reader will be distracted by the readable content of
              a page when looking at its layout. The point of using is that it has a more-or-less normal distribution 
            </p>
            <button className='buttonFoundation'>Kursga yozilish</button>
          </div>
          <div className='col-6 foundationImg'>
            <img className='imgFoundation' src={imgFoundation} alt="Rasm bor" />
            <img className='imgFoundationBack' src={imgFoundation} alt="Rasm bor" />
          </div>
        </div>
      </div>

      <div className='iconsFoundation'>
        <div className="row ">
          <div data-aos="zoom-out" className="col-4 timeCol ">
              <img className='timeImg' src={Clock} alt="Time img" />
              <span className='timeText'>6 oy</span>
          </div>
          <div data-aos="zoom-out" className="col-4 penCol">
              <img className='penImg' src={Pen} alt="Time img" />
              <span className='timeText'>online/offline</span>
          </div>
          <div data-aos="zoom-out" className="col-4 plusCol">
              <img className='plusImg' src={Plus} alt="Time img" />
              <span className='timeText'>1 oy praktika</span>
          </div>
        </div>
      </div>

      <div className='kursKimlarUchun'>
        <h1 className='textKurs'>Kurs kimlar uchun?</h1>
        <div className="row">
          <div data-aos="zoom-out" className="col-4 interyerFirst">
            <div className='ineryerDiv'>
              <h1 className='interyer'>Interyerning uslubiy kontsptsiyasini yaratishni</h1>
              <p className='textKursP'>Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-4 interyerFirst">
            <div className='ineryerDiv '>
              <h1 className='interyer'>Interyerning uslubiy kontsptsiyasini yaratishni</h1>
              <p className='textKursP'>Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-4 interyerFirst">
            <div className='ineryerDiv '>
              <h1 className='interyer'>Interyerning uslubiy kontsptsiyasini yaratishni</h1>
              <p className='textKursP'>Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div data-aos="zoom-out" className="col-4 interyer2Col">
            <div className='ineryerDiv2'>
              <h1 className='interyer'>Interyerning uslubiy kontsptsiyasini yaratishni</h1>
              <p className='textKursP'>Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-4 interyer2Col">
            <div className='ineryerDiv2'>
              <h1 className='interyer'>Interyerning uslubiy kontsptsiyasini yaratishni</h1>
              <p className='textKursP'>Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-4 interyer2Col">
            <div className='ineryerDiv2'>
              <h1 className='interyer'>Interyerning uslubiy kontsptsiyasini yaratishni</h1>
              <p className='textKursP'>Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
            </div>
          </div>
        </div>
      </div>

    </div>  
  </>
)
}

export default Foundation;