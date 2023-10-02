import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
