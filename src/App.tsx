import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Exposition } from './pages/Exposition';
import { Project } from './pages/Project';
import { BehindTheScenes } from './pages/BehindTheScenes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exposicao" element={<Exposition />} />
        <Route path="/projeto" element={<Project />} />
        <Route path="/bastidores" element={<BehindTheScenes />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
