import { InputBase, InputBaseProps, Typography, useTheme } from '@mui/material';
import { Fragment, FunctionComponent } from 'react';

export const SoloTextField: FunctionComponent<
  InputBaseProps & { helperText?: string; label?: string }
> = (props) => {
  const theme = useTheme();
  const inputProps = { ...props };
  delete inputProps.helperText;
  return (
    <Fragment>
      {props.label ? (
        <Typography
          variant='subtitle2'
          sx={{ mb: '4px', display: 'block' }}
          component='label'
        >
          {props.label}
        </Typography>
      ) : null}
      <InputBase
        {...inputProps}
        sx={{
          mb: props.helperText ? '4px' : '16px',
          padding: '12px 16px',
          backgroundColor: theme.palette.gray.main,
          borderRadius: '8px',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)',
          outline: props.error
            ? `2px solid ${theme.palette.error.main}`
            : undefined,
          '&:hover': {
            backgroundColor: theme.palette.gray.dark,
          },
          '&:focus-within': {
            backgroundColor: theme.palette.gray.main,
          },
          '&:focus-within .MuiInputAdornment-root': {
            color: props.error
              ? theme.palette.error.main
              : `${props.color || 'primary'}.main`,
          },
        }}
      ></InputBase>
      {props.helperText ? (
        <Typography
          variant='subtitle3'
          sx={{
            mb: '12px',
            color: props.error ? theme.palette.error.main : undefined,
          }}
          variantMapping={{ subtitle3: 'h6' }}
        >
          {props.helperText}
        </Typography>
      ) : null}
    </Fragment>
  );
};
