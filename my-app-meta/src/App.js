
import './App.css';
import { Header } from './Componentes/header/Header';
import { CallToAction } from './Componentes/callToAction/CallToAction.jsx';
import { Specials } from './Componentes/specials/Specials.jsx';
import HomePage from './Componentes/homePage/HomePage.jsx';

function App() {
  return (
  <>
    <Header/>
    <HomePage />
    <Specials/>
    </>
  );
}

export default App;
