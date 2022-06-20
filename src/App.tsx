import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Signin from './pages/Signin';

const App: FunctionComponent = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
