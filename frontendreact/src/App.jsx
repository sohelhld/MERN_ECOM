import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  console.log(process.env.REACT_APP_API_LOCALHOST)
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
