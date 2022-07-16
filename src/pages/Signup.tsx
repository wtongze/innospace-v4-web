import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import validator from 'validator';
import { SoloTextField } from '../components/SoloTextField';
import {
  PersonRounded as PersonIcon,
  LockRounded as LockIcon,
  EmailRounded as EmailIcon,
  VisibilityRounded as VisibilityIcon,
  VisibilityOffRounded as VisibilityOffIcon,
} from '@mui/icons-material';
import { Link, useSearchParams } from 'react-router-dom';
import CentricLayout from '../components/CentricLayout';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  id: string;
  email: string;
  password: string;
};

const Signup: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [query, setQuery] = useSearchParams();
  const [errorAlertMsg, setErrorAlertMsg] = useState(query.get('error'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className='signup'>
      <CentricLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant='h2'
            component={'h1'}
            fontWeight={700}
            sx={{ mb: '32px' }}
          >
            Sign Up
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
              baseId='id'
              placeholder='ID'
              aria-label='ID'
              autoComplete='username'
              startAdornment={
                <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              }
              fullWidth
              inputProps={register('id', {
                required: { value: true, message: 'ID is required.' },
                minLength: {
                  value: 5,
                  message: 'ID must be at least 5 characters long.',
                },
              })}
              fieldError={errors.id}
              helperText={
                errors.id
                  ? errors.id.message
                  : 'ID must be at least 5 characters long.'
              }
            />
            <SoloTextField
              baseId='email'
              placeholder='Email'
              aria-label='Email'
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
              inputMode='email'
              fieldError={errors.email}
              helperText='Email must be valid.'
            />
            <SoloTextField
              baseId='password'
              placeholder='Password'
              aria-label='Password'
              autoComplete='new-password'
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
              type={showPassword ? 'text' : 'password'}
              inputProps={register('password', {
                required: { value: true, message: 'Password is required.' },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long.',
                },
                validate: (val) =>
                  validator.isStrongPassword(val) ||
                  'Password is not strong enough.',
              })}
              fieldError={errors.password}
              helperText={
                errors.password
                  ? errors.password.message
                  : 'Password must be at least 8 characters long.'
              }
            />
          </div>
          <Typography
            variant='body2'
            fontWeight={500}
            sx={{ mt: '32px' }}
            fontStyle={'italic'}
          >
            By continuing, you are indicating that you are at least 18 years
            old, accept our <Link to='/terms'>Terms of Service</Link> and{' '}
            <Link to='/privacy'>Privacy Policy</Link>.
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <Button
              fullWidth
              variant='contained'
              disableElevation
              sx={{ mb: '8px' }}
              type='submit'
            >
              SIGN UP
            </Button>
          </div>
        </form>
      </CentricLayout>
    </div>
  );
};

export default Signup;
