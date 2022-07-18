import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  SxProps,
  Theme,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { To } from 'react-router-dom';
import { Link } from './Link';

interface RoleProps {
  src: string;
  title: string;
  to: To;
  description: string;
  actionIcon: React.ReactNode;
  actionText: string;
  sx?: SxProps<Theme>;
}

export const RoleCard: FunctionComponent<RoleProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid
      container
      sx={{
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '2px solid #e9ecef',
        transition: 'box-shadow 0.3s ease-in-out',
        ...props.sx,
      }}
      alignItems='center'
    >
      <Grid item xs={12} md={5}>
        <img
          src={props.src}
          height='300'
          alt={props.title}
          style={{ margin: '-16px auto', display: 'block', width: '100%' }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{ padding: isMobile ? '0 32px 32px' : '32px' }}
      >
        <Typography variant='h3' fontWeight={600} sx={{ mb: '8px' }}>
          {props.title}
        </Typography>
        <Typography variant='body1'>{props.description}</Typography>
        <Button
          color='primary'
          variant='contained'
          disableElevation
          sx={{
            mt: '16px',
            padding: '4px 16px',
            width: isMobile ? undefined : '250px',
          }}
          size='large'
          startIcon={props.actionIcon}
          fullWidth={isMobile}
        >
          <Link to={props.to}>{props.actionText}</Link>
        </Button>
      </Grid>
    </Grid>
  );
};
