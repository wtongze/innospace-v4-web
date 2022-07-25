import { createContext, FunctionComponent, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from './theme';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { useAuth } from './components/useAuth';
import Signout from './pages/Signout';
import Signup from './pages/Signup';
import { BasicUser } from './api/endpoint';
import Dashboard from './pages/Dashboard';
import {
  DashboardRounded as DashboardIcon,
  ExploreRounded as ExploreIcon,
  InboxRounded as InboxIcon,
} from '@mui/icons-material';
import { Link } from './components/Link';
import CubeIcon from './components/CubeIcon';
import Explore from './pages/Explore';
import ExploreSearch from './pages/ExploreSearch';

export const AuthContext = createContext<{
  user: BasicUser | undefined;
  updateUser: () => Promise<void>;
}>({
  user: undefined,
  updateUser: async () => {},
});

const navDrawerList = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    name: 'Explore',
    icon: <ExploreIcon />,
    path: '/explore',
  },
  {
    name: 'Project',
    icon: <CubeIcon />,
    path: '/project',
  },
  {
    name: 'Application',
    icon: <InboxIcon />,
    path: '/application',
  },
  // {
  //   name: 'Profile',
  //   icon: <PersonIcon />,
  //   path: '/profile',
  // },
];
export const showDrawerPathList = navDrawerList.map((i) => i.path);

const App: FunctionComponent = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawer, setDrawer] = useState(false);
  const [user, updateUser] = useAuth();
  const drawerWidth = isDesktop ? '300px' : '80vw';
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ user, updateUser }}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar
              onToggleDrawer={() => {
                setDrawer(!drawer);
              }}
              showDrawerPathList={showDrawerPathList}
            />
            {showDrawerPathList.some((i) => location.pathname.startsWith(i)) ? (
              <Drawer
                anchor='left'
                open={drawer}
                onClose={() => setDrawer(false)}
                variant={isDesktop ? 'permanent' : 'temporary'}
                elevation={0}
                sx={{
                  flexShrink: 0,
                  width: drawerWidth,
                  [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    ...(isDesktop
                      ? { backgroundColor: '#fafafa', borderRight: 0 }
                      : {}),
                  },
                }}
              >
                <Toolbar />
                <Box>
                  <List disablePadding>
                    <ListItem sx={{ px: 3, py: 1 }}>
                      <ListItemAvatar>
                        <Avatar>{user?.name[0]}</Avatar>
                      </ListItemAvatar>
                      <ListItemText sx={{ my: 1.5 }}>
                        <Typography variant='body1' fontWeight={700}>
                          {user?.name}
                        </Typography>
                        <Typography variant='body2'>{user?.email}</Typography>
                      </ListItemText>
                    </ListItem>
                    <Divider sx={{ mb: 1.75 }} />
                    {navDrawerList.map(({ name, path, icon }) => {
                      const active = location.pathname.startsWith(path);
                      return (
                        <Link to={path} key={name}>
                          <ListItem
                            disablePadding
                            sx={{
                              px: 2,
                              mb: 0.5,
                            }}
                          >
                            <ListItemButton
                              sx={{
                                borderRadius: 1,
                                py: 0,
                                ...(active
                                  ? {
                                      backgroundColor: theme.palette.grey[300],
                                      '&:hover': {
                                        backgroundColor:
                                          theme.palette.grey[300],
                                      },
                                    }
                                  : {}),
                              }}
                              onClick={() => setDrawer(!drawer)}
                            >
                              <ListItemIcon>{icon}</ListItemIcon>
                              <ListItemText sx={{ my: 1 }}>
                                <Typography fontWeight={500} component='div'>
                                  {name}
                                </Typography>
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      );
                    })}
                  </List>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box sx={{ mb: 1.5, px: 4, py: 1 }}>
                  <Link to={'/terms'}>
                    <Typography variant='body2' color={theme.palette.grey[700]}>
                      Terms and Conditions
                    </Typography>
                  </Link>
                  <Link to={'/privacy'}>
                    <Typography variant='body2' color={theme.palette.grey[700]}>
                      Privacy Policy
                    </Typography>
                  </Link>
                  <Link to={'/cookie'}>
                    <Typography variant='body2' color={theme.palette.grey[700]}>
                      Cookie Policy
                    </Typography>
                  </Link>
                  <Typography
                    variant='body2'
                    color={theme.palette.grey[700]}
                    fontWeight={500}
                    sx={{ mt: 2 }}
                  >
                    All Rights Reserved
                    <br />© 2022 InnoSpace.io
                  </Typography>
                </Box>
              </Drawer>
            ) : null}

            <Box
              component='main'
              sx={{
                flexGrow: 1,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Toolbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signout' element={<Signout />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/explore/search' element={<ExploreSearch />} />
              </Routes>
            </Box>
          </Box>
        </AuthContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
