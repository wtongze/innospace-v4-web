import { createContext, FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { BasicUser, useAuth } from './components/useAuth';
import Signout from './pages/Signout';

export const AuthContext = createContext<BasicUser | undefined>(undefined);

const App: FunctionComponent = () => {
  const user = useAuth();
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContext.Provider value={user}>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signout' element={<Signout />} />
            </Routes>
          </main>
        </AuthContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
