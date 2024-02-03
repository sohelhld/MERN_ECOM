import { TypeAnimation } from 'react-type-animation';
import useWindowDimensions from '../../../utils/dimensions';
// import  from '../../../utils/dimentions';

const ExampleComponent = () => {
   
const {width} = useWindowDimensions()

  return (
    <TypeAnimation
      sequence={ [
        'Welcome to our Ecommerce Website',
        1000, // wait 1s before replacing the title
        'Explore a variety of products for your pets',
        1000,
        'Quality Product for happy Hamsters',
        1000,
        'Nutritious meals for your beloved Guinea Pigs',
        1000,
        'Special treats for playful Chinchillas',
        1000
      ]
      }
      wrapper="span"
      speed={50}
      style={{ fontSize: `${width/20}px`, display: 'inline-block' , color: 'black', }}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;