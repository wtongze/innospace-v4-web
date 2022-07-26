import {
  LockRounded as LockIcon,
  VisibilityRounded as VisibilityIcon,
  VisibilityOffRounded as VisibilityOffIcon,
  EmailRounded as EmailIcon,
} from '@mui/icons-material';
import {
  Typography,
  InputAdornment,
  Button,
  Alert,
  AlertTitle,
  IconButton,
} from '@mui/material';
import { FunctionComponent, useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from '../components/Link';
import { SoloTextField } from '../components/SoloTextField';
import CentricLayout from '../components/CentricLayout';
import { AuthContext } from '../App';
import { API } from '../api/endpoint';
import { ENDPOINT } from '../api/const';
import validator from 'validator';

type Inputs = {
  email: string;
  password: string;
};

const Signin: FunctionComponent = () => {
  const { updateUser } = useContext(AuthContext);
  const [query, setQuery] = useSearchParams();
  const [errorAlertMsg, setErrorAlertMsg] = useState(query.get('error'));
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    API.postAuthSignin(data)
      .then(() => {
        updateUser();
        navigate('/dashboard');
      })
      .catch((e: Error) => setErrorAlertMsg(e.message));

  return (
    <div className='signin'>
      <CentricLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              aria-label='Email'
              placeholder='Email'
              baseId='email'
              autoComplete='email'
              startAdornment={
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              }
              fullWidth
              inputProps={register('email', {
                required: { value: true, message: 'Email is required.' },
                validate: (val) =>
                  validator.isEmail(val) || 'Email must be valid.',
              })}
              fieldError={errors.email}
              helperText={errors.email?.message}
            />
            <SoloTextField
              aria-label='Password'
              placeholder='Password'
              baseId='password'
              autoComplete='current-password'
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
              inputProps={register('password', {
                required: { value: true, message: 'Password is required.' },
              })}
              fieldError={errors.password}
              helperText={errors.password?.message}
              type={showPassword ? 'text' : 'password'}
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Button
              fullWidth
              variant='contained'
              disableElevation
              sx={{ mb: '8px' }}
              type='submit'
            >
              SIGN IN
            </Button>
            <Link to='/signup'>
              <Button fullWidth variant='text' disableElevation>
                Create new account
              </Button>
            </Link>

            <hr style={{ borderColor: '#0000001a', borderWidth: '0.5px' }} />
            <Button
              fullWidth
              variant='contained'
              color='gray'
              disableElevation
              sx={{ mt: '4px' }}
              startIcon={
                <img src='/asset/google.svg' alt='Google Logo' height={20} />
              }
              href={`${ENDPOINT}/v4/auth/google`}
            >
              SIGN IN with Google
            </Button>
          </div>
        </form>
      </CentricLayout>
    </div>
  );
};

export default Signin;
