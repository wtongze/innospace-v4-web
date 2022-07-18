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
import {
  MenuRounded as MenuIcon,
  DashboardRounded as DashboardIcon,
  LogoutRounded as LogoutIcon,
  LoginRounded as LoginIcon,
} from '@mui/icons-material';
import { Link } from './Link';
import { AuthContext, showDrawerPathList } from '../App';

export const NavBar: FunctionComponent<{
  onToggleDrawer: () => void;
  showDrawerPathList: string[];
}> = (props) => {
  const { user } = useContext(AuthContext);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {isMobile &&
        user &&
        props.showDrawerPathList.includes(location.pathname) ? (
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: '16px' }}
            onClick={props.onToggleDrawer}
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
        {user || location.pathname.startsWith('/sign') ? null : (
          <Fragment>
            <Button
              color='inherit'
              sx={{ px: '16px' }}
              startIcon={<LoginIcon />}
            >
              <Link to={'/signin'}>SIGN IN</Link>
            </Button>
          </Fragment>
        )}
        {user && location.pathname !== '/signout' ? (
          <Fragment>
            {!showDrawerPathList.includes(location.pathname) ? (
              <Link to={'/dashboard'}>
                {isMobile ? (
                  <IconButton color='inherit' aria-label='Dashboard'>
                    <DashboardIcon />
                  </IconButton>
                ) : (
                  <Button
                    color='inherit'
                    sx={{ px: '16px' }}
                    startIcon={<DashboardIcon />}
                  >
                    DASHBOARD
                  </Button>
                )}
              </Link>
            ) : null}

            <Link to={'/signout'}>
              {isMobile ? (
                <IconButton color='inherit' aria-label='Sign Out'>
                  <LogoutIcon />
                </IconButton>
              ) : (
                <Button
                  color='inherit'
                  sx={{ px: '16px' }}
                  startIcon={<LogoutIcon />}
                >
                  SIGN OUT
                </Button>
              )}
            </Link>
          </Fragment>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};
