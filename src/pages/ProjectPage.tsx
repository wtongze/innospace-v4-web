import { SearchRounded } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Pagination,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { SoloTextField } from '../components/SoloTextField';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  prefix: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, prefix, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`${prefix}-tabpanel-${index}`}
      aria-labelledby={`${prefix}-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number, prefix: string) {
  return {
    id: `${prefix}-tab-${index}`,
    'aria-controls': `${prefix}-tabpanel-${index}`,
  };
}

const ID_PREFIX = 'project';

const ProjectPage: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className='explore'>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <Typography variant='h2' component='h1' fontWeight={700} sx={{ mb: 1 }}>
          Project
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Grid container alignItems='center' spacing={2}>
              <Grid item xs={12} md={9}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab label='Joined' {...a11yProps(0, ID_PREFIX)} />
                  <Tab label='Posted' {...a11yProps(1, ID_PREFIX)} />
                </Tabs>
              </Grid>
              <Grid item xs={12} md={3}>
                <SoloTextField
                  baseId='search'
                  clearable
                  startAdornment={
                    <InputAdornment position='start'>
                      <SearchRounded />
                    </InputAdornment>
                  }
                  fullWidth
                  sx={{ py: 0.5, mb: 0 }}
                ></SoloTextField>
              </Grid>
            </Grid>
          </Box>
          <TabPanel value={value} index={0} prefix={ID_PREFIX}>
            <Box className='project-card-list' sx={{ my: 3 }}>
              <ProjectCard
                id='innospace'
                title='InnoSpace'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                openPositions={5}
                tags={['Vue.js', 'React.js']}
              ></ProjectCard>
            </Box>
            <Pagination
              count={3}
              sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }}
            />
          </TabPanel>
          <TabPanel value={value} index={1} prefix={ID_PREFIX}>
            <Box className='project-card-list' sx={{ my: 3 }}>
              <ProjectCard
                id='Vue.js'
                title='vuejs'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                openPositions={3}
                tags={['TypeScript', 'React.js']}
              ></ProjectCard>
            </Box>
            <Pagination
              count={1}
              sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }}
            />
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectPage;
