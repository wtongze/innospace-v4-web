import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container sx={{ backgroundColor: '#121314', py: '4px' }} maxWidth={false}>
      <Container maxWidth='lg'>
        <Typography
          variant='body2'
          color='white'
          fontWeight={500}
          align={isMobile ? 'center' : undefined}
        >
          © 2022 InnoSpace.io - All Rights Reserverd
        </Typography>
      </Container>
    </Container>
  );
};
