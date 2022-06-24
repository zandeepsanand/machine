import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import {Container} from "react-bootstrap";
import HomeScreen from './screens/homeScreen/HomeScreen';
import "./_app.scss"

function App() {
  return (
    <div>
      <Header/>
      <div className='app__container border'>
        <Sidebar/>
        <Container fluid className="app__main border ">
          <HomeScreen/>
        </Container>
      </div>

    </div>
  );
}

export default App;
