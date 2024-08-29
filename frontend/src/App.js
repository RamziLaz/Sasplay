import logo from "./logo.svg";
import "./App.css";
import Navbare from "./component/navbar/Navbare";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import FeaturesSection from "./component/How/PlayWinEarn";
import Why from "./component/Why/Why";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
         <Header /> 
        <About /> 
        <FeaturesSection />
        <Why />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
