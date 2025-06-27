import background_1 from '../src/images/background_1.jpg';
import background_2 from '../src/images/dairyMilk.webp';
import background_3 from '../src/images/dairyMilk.webp';
import banner_iamge from '../src/images/Cameos__6_.webp';
function Banner(){
    return(
        <>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 bimg" src={background_1} alt="First slide"/>
      <p className='word'>Cadbury Dairy Milk</p>
    </div>
    <div className="carousel-item">
      <img class="d-block w-100 bimg" src={background_2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 bimg" src={background_3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<div className='container-fluid about'>
<div className="row">
  <div className='col-6'>
<img className="banner-image" src={banner_iamge} alt="Third slide"/>
</div>
<div className='col-6'>
<h1>CADBURY DAIRY MILK</h1>
<h3>Made with a glass and a half of fresh milk… It’s the classic creamy taste that’s unmistakably Cadbury.</h3>
<button className='shop'>SHOP NOW</button>

</div>
</div>
</div>
        </>
    );
}
export default Banner; 