import {
  Typography,
  Alert,
  AlertTitle,
  LinearProgress,
  Button,
} from '@mui/material';
import {
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckRounded as CheckIcon } from '@mui/icons-material';
import { ResultStatus } from '../api/types';
import { Link } from '../components/Link';
import CentricLayout from '../components/CentricLayout';
import { API } from '../api/endpoint';
import { AuthContext } from '../App';

const Signout: FunctionComponent = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const [errorAlertMsg, setErrorAlertMsg] = useState<string>();
  const [status, setStatus] = useState<ResultStatus>();
  useEffect(() => {
    API.getAuthSignout()
      .then(() => {
        setStatus(ResultStatus.OK);
        updateUser();
      })
      .catch((e: Error) => {
        setStatus(ResultStatus.ERROR);
        setErrorAlertMsg(e.message);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <Link to={'/'}>
                    <Button
                      fullWidth
                      variant='contained'
                      disableElevation
                      sx={{ py: '8px', borderRadius: '4px' }}
                    >
                      Go to Home
                    </Button>
                  </Link>
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
