import { Fragment, FunctionComponent } from 'react';
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
import { useAuth } from './useAuth';

export const NavBar: FunctionComponent = () => {
  const isSignedIn = useAuth();
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <AppBar position='static' elevation={0}>
      <Toolbar>
        {isMobile && isSignedIn ? (
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
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link to={'/'}>InnoSpace</Link>
        </Typography>
        {isSignedIn || location.pathname === '/signin' ? null : (
          <Fragment>
            <Button color='inherit' sx={{ px: '16px' }}>
              <Link to={'/signin'}>SIGN IN</Link>
            </Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};
