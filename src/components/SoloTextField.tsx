import { InputBase, InputBaseProps, Typography, useTheme } from '@mui/material';
import { Fragment, FunctionComponent } from 'react';
import type { FieldError } from 'react-hook-form';

export const SoloTextField: FunctionComponent<
  InputBaseProps & {
    helperText?: string;
    label?: string;
    error?: boolean;
    fieldError?: FieldError;
    baseId: string;
  }
> = (props) => {
  const theme = useTheme();
  const inputProps = { ...props };
  const inputError = props.error || props.fieldError !== undefined;
  delete inputProps.helperText;
  delete inputProps.fieldError;
  delete inputProps.label;
  delete inputProps.error;
  delete inputProps.inputMode;
  // @ts-ignore
  delete inputProps.baseId;

  return (
    <Fragment>
      {props.label ? (
        <label htmlFor={`${props.baseId}-input`}>
          <Typography
            variant='subtitle2'
            sx={{ mb: '4px', display: 'block' }}
            component='span'
          >
            {props.label}
          </Typography>
        </label>
      ) : null}
      <InputBase
        {...inputProps}
        id={`${props.baseId}-input`}
        sx={{
          mb: props.helperText ? '4px' : '16px',
          padding: '12px 16px',
          backgroundColor: theme.palette.gray.main,
          borderRadius: '8px',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)',
          outline: inputError
            ? `2px solid ${theme.palette.error.main}`
            : undefined,
          '&:hover': {
            backgroundColor: theme.palette.gray.dark,
          },
          '&:focus-within': {
            backgroundColor: theme.palette.gray.main,
          },
          '&:focus-within .MuiInputAdornment-root': {
            color: inputError
              ? theme.palette.error.main
              : `${props.color || 'primary'}.main`,
          },
          fontFamily: props.type === 'password' ? 'monospace' : undefined,
          '& input::placeholder': {
            fontFamily: theme.typography.fontFamily,
          },
        }}
        inputProps={{
          ...(inputProps.inputProps || {}),
          'aria-errormessage': inputError
            ? `${props.baseId}-helperText`
            : undefined,
        }}
      ></InputBase>
      {props.helperText ? (
        <div
          role={inputError ? 'alert' : undefined}
          id={`${props.baseId}-helperText`}
        >
          <Typography
            variant='subtitle3'
            sx={{
              mb: '12px',
              ml: '16px',
              color: inputError
                ? theme.palette.error.main
                : theme.palette.grey[600],
            }}
            component='div'
          >
            {props.helperText}
          </Typography>
        </div>
      ) : null}
    </Fragment>
  );
};
