import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { SoloTextField } from '../components/SoloTextField';
import {
  PersonRounded as PersonIcon,
  LockRounded as LockIcon,
  EmailRounded as EmailIcon,
  VisibilityRounded as VisibilityIcon,
  VisibilityOffRounded as VisibilityOffIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Signup: FunctionComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='signup'>
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
          Sign Up
        </Typography>
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
            helperText='Must be at lease 5 characters long.'
          />
          <SoloTextField
            placeholder='Email'
            startAdornment={
              <InputAdornment position='start'>
                <EmailIcon />
              </InputAdornment>
            }
            fullWidth
            required
            helperText='Example: john@example.com'
          />
          <SoloTextField
            placeholder='Password'
            startAdornment={
              <InputAdornment position='start'>
                <LockIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label='show password'
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            required
            type={showPassword ? 'text' : 'password'}
            helperText='Must be at lease 8 characters long.'
          />
        </div>
        <Typography variant='body2' fontWeight={500} sx={{ mt: '32px' }} fontStyle={'italic'}>
          By continuing, you are indicating that you are at least 18 years old,
          accept our <Link to='/terms'>Terms of Service</Link> and{' '}
          <Link to='/privacy'>Privacy Policy</Link>.
        </Typography>
        <div style={{ marginTop: '16px' }}>
          <Button
            fullWidth
            variant='contained'
            disableElevation
            sx={{ mb: '8px' }}
          >
            SIGN UP
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Signup;