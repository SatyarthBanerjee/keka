import LandingPage from "./LandingPage";
import Shop from "./Shop";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
