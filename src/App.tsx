import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Exposition } from './pages/Exposition';
import { Project } from './pages/Project';
import { BehindTheScenes } from './pages/BehindTheScenes';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Open Sauce', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exposicao" element={<Exposition />} />
        <Route path="/projeto" element={<Project />} />
        <Route path="/bastidores" element={<BehindTheScenes />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
