import {
  Box,
  Button,
  Container,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { CloseRounded as CloseIcon, SearchRounded } from '@mui/icons-material';
import { Fragment, FunctionComponent } from 'react';
import { SoloTextField } from '../components/SoloTextField';
import ProjectCard from '../components/ProjectCard';

interface IFormInputs {
  keyword: string;
}

const ExploreSearch: FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    setValue,
    setFocus,
    getValues,
    clearErrors,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <Box className='explore'>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <Typography variant='h2' component='h1' fontWeight={700} sx={{ mb: 2 }}>
          Search
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='keyword'
            control={control}
            defaultValue={''}
            render={({ field }) => {
              const ref = field.ref;
              const f = { ...field, ref: undefined };
              return (
                <SoloTextField
                  {...f}
                  fullWidth
                  autoFocus
                  inputRef={ref}
                  placeholder='Keyword'
                  startAdornment={
                    <InputAdornment position='start'>
                      <SearchRounded />
                    </InputAdornment>
                  }
                  endAdornment={
                    <Fragment>
                      {!getValues('keyword') ? null : (
                        <IconButton
                          sx={{ my: -0.5 }}
                          onClick={() => {
                            setValue('keyword', '');
                            setFocus('keyword');
                            clearErrors('keyword');
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      )}
                      <Button
                        sx={{ my: '-4.25px', px: 2, fontWeight: 600 }}
                        type='submit'
                      >
                        Search
                      </Button>
                    </Fragment>
                  }
                  baseId='search'
                />
              );
            }}
          />
        </form>
        <div>
          <Typography variant='h4' sx={{ mt: 4, mb: 2 }}>
            Recommended for you
          </Typography>
          <div>
            <ProjectCard
              id='innospace'
              title='InnoSpace'
              description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
              openPositions={5}
              tags={['Vue.js', 'React.js']}
            ></ProjectCard>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default ExploreSearch;
