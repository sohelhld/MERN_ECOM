import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <h1>Rocky App</h1>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
