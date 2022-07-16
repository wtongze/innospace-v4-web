import { createContext, FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { useAuth } from './components/useAuth';
import Signout from './pages/Signout';
import Signup from './pages/Signup';
import { BasicUser } from './api/endpoint';

export const AuthContext = createContext<{
  user: BasicUser | undefined;
  updateUser: () => Promise<void>;
}>({
  user: undefined,
  updateUser: async () => {},
});

const App: FunctionComponent = () => {
  const [user, updateUser] = useAuth();
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContext.Provider value={{ user, updateUser }}>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signout' element={<Signout />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </main>
        </AuthContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
