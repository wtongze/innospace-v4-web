import {
  PersonRounded as PersonIcon,
  LockRounded as LockIcon,
} from '@mui/icons-material';
import {
  Typography,
  Container,
  InputAdornment,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
  AlertTitle,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SoloTextField } from '../components/SoloTextField';

const Signin: FunctionComponent = () => {
  const theme = useTheme();
  const [query, setQuery] = useSearchParams();
  const [errorAlertMsg, setErrorAlertMsg] = useState(query.get('error'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className='signin'>
      <Container
        sx={{
          py: '24px',
          ...(isDesktop
            ? {
                border: '2px solid #f1f3f5',
                borderRadius: '8px',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                maxWidth: '450px !important',
              }
            : {}),
        }}
      >
        <Typography
          variant='h2'
          component={'h1'}
          fontWeight={700}
          sx={{ mb: '32px' }}
        >
          Sign In
        </Typography>
        {errorAlertMsg ? (
          <Alert
            severity='error'
            title='Error'
            sx={{ mb: '16px' }}
            onClose={() => {
              setQuery({});
              setErrorAlertMsg(null);
            }}
          >
            <AlertTitle>Error</AlertTitle>
            {errorAlertMsg}
          </Alert>
        ) : null}
        <div>
          <SoloTextField
            placeholder='ID'
            startAdornment={
              <InputAdornment position='start'>
                <PersonIcon />
              </InputAdornment>
            }
            fullWidth
            required
          />
          <SoloTextField
            placeholder='Password'
            startAdornment={
              <InputAdornment position='start'>
                <LockIcon />
              </InputAdornment>
            }
            fullWidth
            required
            type='password'
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Button
            fullWidth
            variant='contained'
            disableElevation
            sx={{ mb: '8px' }}
          >
            SIGN IN
          </Button>
          <Button fullWidth variant='text' disableElevation>
            Create new account
          </Button>
          <hr style={{ borderColor: '#0000001a', borderWidth: '0.5px' }} />
          <Button
            fullWidth
            variant='contained'
            color='gray'
            disableElevation
            sx={{ mt: '4px' }}
            startIcon={<img src='/asset/google.svg' alt='Google Logo' height={20} />}
            href={'http://localhost:4000/v4/auth/google'}
          >
            SIGN IN with Google
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Signin;
