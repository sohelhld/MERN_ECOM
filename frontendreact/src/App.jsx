import { Center, Flex } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  console.log(process.env.REACT_APP_API_LOCALHOST)
  return (
    <Flex gap={10} flexDirection={"column"} className="App" alignItems={"center"} textAlign={"center"}>
    <Center>
    <Navbar />
    <AllRoutes />
    
    </Center>
      <Footer/>
    </Flex>
  );
}

export default App;
