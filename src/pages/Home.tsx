import {
  Alert,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Container } from '@mui/system';
import lottie from 'lottie-web';
import { FunctionComponent, useEffect } from 'react';
import { EmojiEventsRounded as AwardIcon } from '@mui/icons-material';

const Home: FunctionComponent = () => {
  useEffect(() => {
    const el = document.getElementById('cover');
    if (el) {
      el.innerHTML = '';
      lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/asset/cover.json',
      });
    }
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className='home'>
      <Container maxWidth='lg'>
        <Grid container sx={{ my: '32px' }} alignItems='center'>
          <Grid item xs={12} md={6} sx={{ zIndex: 10, mt: '-8px' }}>
            <Typography variant='h1' fontWeight={700} sx={{ mb: '8px' }}>
              InnoSpace,
            </Typography>
            <Typography
              variant='h3'
              fontWeight={500}
              lineHeight={'32px'}
              component='h2'
            >
              where{' '}
              <Typography variant='marker1' color='primary'>
                talented students
              </Typography>{' '}
              meet with{' '}
              <Typography variant='marker1' color='primary'>
                project owners
              </Typography>{' '}
              and build great things together.
            </Typography>
            <Alert
              icon={<AwardIcon sx={{ color: '#0000008a' }} />}
              sx={{
                mt: '16px',
                mb: '24px',
                backgroundColor: '#f5f9fc',
                color: theme.palette.common.black,
              }}
            >
              <Typography variant='body1'>
                2019 UCSC Springboard Award Winner
              </Typography>
            </Alert>
            <Typography variant='subtitle1'>Sponsored By</Typography>
            <a
              href='https://officeofresearch.ucsc.edu/iatc/'
              target='_blank'
              rel='noreferrer'
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  marginTop: '-4px',
                }}
              >
                <img
                  src='/asset/ucsc.jpg'
                  height={50}
                  alt='UCSC Logo'
                  style={{ marginLeft: '-12px', marginRight: '8px' }}
                />
                <img
                  src='/asset/iatc.png'
                  height={50}
                  alt='IATC Logo'
                  style={{ marginLeft: '-4px' }}
                />
              </div>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={isMobile ? { overflow: 'hidden', my: '32px' } : null}
          >
            <div
              id='cover'
              style={isMobile ? { transform: 'scale(1.25)' } : undefined}
            ></div>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{ backgroundColor: '#f5f9fc', py: '32px', px: '0 !important' }}
        maxWidth={false}
      >
        <Container maxWidth='lg'>
          <Typography
            variant='h4'
            component='h3'
            fontWeight={500}
            align='center'
          >
            What's your role?
          </Typography>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
