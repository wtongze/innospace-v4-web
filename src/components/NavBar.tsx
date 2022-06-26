import { Fragment, FunctionComponent, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MenuRounded as MenuIcon } from '@mui/icons-material';
import { Link } from './Link';
import { AuthContext } from '../App';

export const NavBar: FunctionComponent = () => {
  const user = useContext(AuthContext);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <AppBar position='static' elevation={0}>
      <Toolbar>
        {isMobile && user ? (
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: '16px' }}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography
          variant='h4'
          component='div'
          fontWeight={500}
          sx={{ flexGrow: 1 }}
        >
          <Link to={'/'}>InnoSpace</Link>
        </Typography>
        {user || location.pathname === '/signin' ? null : (
          <Fragment>
            <Button color='inherit' sx={{ px: '16px' }}>
              <Link to={'/signin'}>SIGN IN</Link>
            </Button>
          </Fragment>
        )}
        {user ? (
          <Fragment>
            <Button color='inherit' sx={{ px: '16px' }}>
              <Link to={'/signout'}>SIGN OUT</Link>
            </Button>
          </Fragment>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};
