import { PersonRounded as PersonIcon } from '@mui/icons-material';
import { Typography, Container, InputAdornment } from '@mui/material';
import { FunctionComponent } from 'react';
import { SoloTextField } from '../components/SoloTextField';

const Signin: FunctionComponent = () => {
  return (
    <div className='signin'>
      <Container sx={{ py: 3 }} maxWidth='sm'>
        <Typography
          variant='h4'
          component={'h1'}
          fontWeight={700}
          sx={{ mb: 2 }}
        >
          Sign In
        </Typography>
        <SoloTextField
          placeholder='ID'
          startAdornment={
            <InputAdornment position='start'>
              <PersonIcon />
            </InputAdornment>
          }
          fullWidth
        />
      </Container>
    </div>
  );
};

export default Signin;
