import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { Link } from './Link';

interface ProjectCardProps {
  id: string;
  title: string;
  tags?: string[];
  description: string;
  openPositions: number;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box
      className='project-card'
      sx={{ px: isDesktop ? 4 : 3, py: 3, borderRadius: 2, border: '2px solid #e9ecef' }}
    >
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <Avatar sx={{ width: 48, height: 48, fontSize: '1.5rem' }}>
            {props.title[0]}
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant='h4' fontWeight={600}>
            {props.title}
          </Typography>
        </Grid>
      </Grid>
      {props.tags ? (
        <Grid container sx={{ mt: 1 }} spacing={1}>
          {props.tags.map((i) => (
            <Grid item key={i}>
              <Chip
                label={i}
                sx={(theme) => ({
                  borderRadius: 1,
                  fontWeight: 500,
                  backgroundColor: theme.palette.gray.main,
                })}
              ></Chip>
            </Grid>
          ))}
        </Grid>
      ) : null}
      <Box sx={{ mt: 2 }}>
        <Typography>{props.description}</Typography>
      </Box>
      <Grid
        container
        sx={{ mt: 2 }}
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item>
          <Typography fontWeight={500}>
            {props.openPositions.toString() +
              ' Open Position' +
              (props.openPositions > 1 ? 's' : '')}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color='gray'
            variant='contained'
            disableElevation
            sx={{ px: 2 }}
          >
            <Link to={`/project/${props.id}`}>LEARN MORE</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
