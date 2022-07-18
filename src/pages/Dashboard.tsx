import { Container, Grid, Typography, Box } from '@mui/material';
import { FunctionComponent } from 'react';
import { useAuth } from '../components/useAuth';

const Dashboard: FunctionComponent = () => {
  const [user] = useAuth();
  return (
    <Box
      className='dashboard'
      sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
    >
      <Container maxWidth='lg'>
        <Grid container alignItems={'center'}>
          <Grid item xs={12} lg={5}>
            <img
              src='asset/dashboard-holder.svg'
              alt='Dashboard'
              style={{ width: '100%' }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ px: 1 }}>
            <Typography variant='h3' component='h1' fontWeight={700}>
              Hi {user?.name},
            </Typography>
            <Typography variant='body1' sx={{ my: 1.5 }}>
              Nothing new here yet. You can check the navigation bar on the left
              to explore other projects on InnoSpace or track applications
              status. For project-owners, you can also edit your project
              information and review the applications you received.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
