import {
  PersonRounded as PersonIcon,
  LockRounded as LockIcon,
} from '@mui/icons-material';
import {
  Typography,
  InputAdornment,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from '../components/Link';
import { SoloTextField } from '../components/SoloTextField';
import CentricLayout from '../components/CentricLayout';

type Inputs = {
  id: string;
  password: string;
};

const Signin: FunctionComponent = () => {
  const [query, setQuery] = useSearchParams();
  const [errorAlertMsg, setErrorAlertMsg] = useState(query.get('error'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
              placeholder='ID'
              startAdornment={
                <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              }
              fullWidth
              inputProps={register('id', {
                required: { value: true, message: 'ID is required.' },
              })}
              error={errors.id !== undefined}
              helperText={errors.id?.message}
            />
            <SoloTextField
              placeholder='Password'
              startAdornment={
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              }
              fullWidth
              inputProps={register('password', {
                required: { value: true, message: 'Password is required.' },
              })}
              error={errors.password !== undefined}
              helperText={errors.password?.message}
              type='password'
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
            <Button fullWidth variant='text' disableElevation>
              <Link to='/signup'>Create new account</Link>
            </Button>
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
              href={'http://localhost:4000/v4/auth/google'}
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
