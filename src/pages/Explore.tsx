import { Box, Container, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { RoleCard } from '../components/RoleCard';
import {
  SearchRounded as SearchIcon,
  AddRounded as AddIcon,
} from '@mui/icons-material';

const Explore: FunctionComponent = () => {
  return (
    <Box className='explore'>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <Typography variant='h2' component='h1' fontWeight={700}>
          Explore
        </Typography>
        <Typography variant='h4' component='h2'>
          What's your role?
        </Typography>
        <RoleCard
          src='/asset/talented-student.svg'
          title='Talented Student'
          description='who want to have more job-related exprience before graduating?'
          actionIcon={<SearchIcon />}
          actionText='Search for project'
          to='/explore/search'
          sx={{ my: 4 }}
        />
        <RoleCard
          src='/asset/project-owner.svg'
          title='Project Owner'
          description='who want to get more talented students to help builing your awesome project?'
          actionIcon={<AddIcon />}
          actionText='Submit your project'
          to='/explore/new'
          sx={{ my: 4 }}
        />
      </Container>
    </Box>
  );
};

export default Explore;
