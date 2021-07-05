//import logo from './logo.svg';
//import './App.css';
import PersistentDrawerRight from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <PersistentDrawerRight />
      <Home/>
    </div>
  );
}

export default App;
