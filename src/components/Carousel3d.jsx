import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from '3d-react-carousal';

import Boletines from '../assets/boletines.jpg'
import Industrial1 from '../assets/industrial1.jpeg'
import Industrial2 from '../assets/industrial2.jpg'


export const Carousel3d = () => {
    let slides = [
        <img  src={Boletines} alt="1" />  ,
        <img  src={Industrial1} alt="2" />  ,
        <img  src={Industrial2} alt="3" />  ];
      return (
        <div className="containerCarousel3d">
          
            <Carousel slides={slides} autoplay={true} interval={4000}/>
    
        </div>
      );
    }

export default Carousel3d

/* Dentro del CSS:

.slider-single img{
  width: 100%;
}

Dentro del index.html:
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

Instalar Paquete:
npm i 3d-react-carousal

*/