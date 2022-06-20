import { InputBase, InputBaseProps } from '@mui/material';
import { FunctionComponent } from 'react';

export const SoloTextField: FunctionComponent<InputBaseProps> = (props) => {
  return (
    <InputBase
      {...props}
      sx={{
        padding: '12px 16px',
        backgroundColor: '#f1f3f5',
        borderRadius: 2,
        transition: 'background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)',
        '&:hover': {
          backgroundColor: '#e1e3e5',
        },
        '&:focus-within': {
          backgroundColor: '#f1f3f5',
        },
      }}
    ></InputBase>
  );
};
