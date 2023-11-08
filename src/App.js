import LandingPage from "./LandingPage";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
