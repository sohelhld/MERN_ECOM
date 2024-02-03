import { Center, Box } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";
import useWindowDimensions from "../../../utils/dimensions";
const images = [
  { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/739ed527dbf977fe.jpg?q=20" },
  { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/BAU/Feb/Clearance/store/Desktop_Hero_3000x1200_1_2x._CB583551426_.jpg" },
  { url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702044593/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Deals%20Corner/2023/Dec/Rotating/HP/HP_DealsCorner_GIF_Compressed_8Dec2023_gazl4l.gif?tr=w-2048" },
  { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11d1a426d766442c.jpg?q=20" },
];

const ImageCrusal = () => {
  const {width} = useWindowDimensions();
  return (
    <Center mt={10}>
      <Box width={width}>
        <SimpleImageSlider
          width={width}
          height={250}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
        />
      </Box>
    </Center>
  );
}

export default ImageCrusal;
