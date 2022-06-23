import { InputBase, InputBaseProps, useTheme } from '@mui/material';
import { FunctionComponent } from 'react';

export const SoloTextField: FunctionComponent<InputBaseProps> = (props) => {
  const theme = useTheme();
  return (
    <InputBase
      {...props}
      sx={{
        mb: '16px',
        padding: '12px 16px',
        backgroundColor: theme.palette.gray.main,
        borderRadius: '8px',
        transition: 'background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)',
        '&:hover': {
          backgroundColor: theme.palette.gray.dark,
        },
        '&:focus-within': {
          backgroundColor: theme.palette.gray.main,
        },
        '&:focus-within .MuiInputAdornment-root': {
          color: `${props.color || 'primary'}.main`,
        },
      }}
    ></InputBase>
  );
};
