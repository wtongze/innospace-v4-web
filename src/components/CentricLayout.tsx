import { Container, useMediaQuery, useTheme } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

const CentricLayout: FunctionComponent<{ children: ReactNode }> = (props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const heightEnough = useMediaQuery('(min-height: 720px)');
  return (
    <Container
      sx={{
        py: '24px',
        ...(isDesktop
          ? {
              border: '2px solid #f1f3f5',
              borderRadius: '8px',
              ...(heightEnough
                ? {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                  }
                : { margin: '16px auto' }),
              maxWidth: '450px !important',
            }
          : {}),
      }}
    >
      {props.children}
    </Container>
  );
};

export default CentricLayout;
