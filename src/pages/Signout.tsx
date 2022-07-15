import {
  Typography,
  Alert,
  AlertTitle,
  LinearProgress,
  Button,
} from '@mui/material';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckRounded as CheckIcon } from '@mui/icons-material';
import { ResultStatus } from '../types';
import { Link } from '../components/Link';
import CentricLayout from '../components/CentricLayout';

const Signout: FunctionComponent = () => {
  const navigate = useNavigate();
  const [errorAlertMsg, setErrorAlertMsg] = useState<string>();
  const [status, setStatus] = useState<ResultStatus>();
  useEffect(() => {
    fetch('http://localhost:4000/v4/auth/signout', { credentials: 'include' })
      .then((res) => res.json())
      .then((data: { status: ResultStatus; error?: string }) => {
        setStatus(data.status);
        setErrorAlertMsg(data.error);
      });
  }, []);
  return (
    <div className='signout'>
      <CentricLayout>
        <Typography
          variant='h4'
          component={'h1'}
          fontWeight={700}
          sx={{ mb: '16px' }}
        >
          Sign Out
        </Typography>
        {errorAlertMsg ? (
          <Alert severity='error' title='Error' sx={{ mb: '16px' }}>
            <AlertTitle>Error</AlertTitle>
            {errorAlertMsg}
          </Alert>
        ) : null}
        {(() => {
          switch (status) {
            case undefined:
              return <LinearProgress sx={{ mt: '64px' }} />;
            case ResultStatus.OK:
              return (
                <Fragment>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <CheckIcon
                        sx={{
                          fontSize: 80,
                          margin: '0 auto',
                          display: 'block',
                        }}
                        color='success'
                      />
                      <Typography variant='subtitle2'>
                        You just signed out
                      </Typography>
                    </div>
                  </div>

                  <Button
                    fullWidth
                    variant='contained'
                    disableElevation
                    sx={{ py: '8px', borderRadius: '4px' }}
                  >
                    <Link to={'/'}>Go to Home</Link>
                  </Button>
                </Fragment>
              );
            case ResultStatus.ERROR:
              return (
                <Button
                  fullWidth
                  variant='contained'
                  disableElevation
                  sx={{ py: '8px', borderRadius: '4px' }}
                  color='gray'
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </Button>
              );
          }
        })()}
      </CentricLayout>
    </div>
  );
};

export default Signout;
