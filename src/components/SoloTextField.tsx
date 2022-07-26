import { CloseRounded } from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputBase,
  InputBaseProps,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment, FunctionComponent, useState } from 'react';
import type { FieldError } from 'react-hook-form';

export const SoloTextField: FunctionComponent<
  InputBaseProps & {
    helperText?: string;
    label?: string;
    error?: boolean;
    fieldError?: FieldError;
    baseId: string;
    clearable?: boolean;
  }
> = (props) => {
  const theme = useTheme();
  const [val, setVal] = useState(props.value || '');
  const {
    helperText,
    label,
    error,
    fieldError,
    baseId,
    clearable,
    ...inputProps
  } = props;

  const inputError = props.error || props.fieldError !== undefined;

  return (
    <Fragment>
      {label ? (
        <label htmlFor={`${baseId}-input`}>
          <Typography
            variant='subtitle2'
            sx={{ mb: '4px', display: 'block' }}
            component='span'
          >
            {label}
          </Typography>
        </label>
      ) : null}
      <InputBase
        {...inputProps}
        value={val}
        onChange={(e) => setVal(e.currentTarget.value)}
        id={`${baseId}-input`}
        sx={{
          mb: helperText ? '4px' : '16px',
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
          ...inputProps.sx,
        }}
        inputProps={{
          ...(inputProps.inputProps || {}),
          'aria-errormessage': inputError ? `${baseId}-helperText` : undefined,
        }}
        endAdornment={
          <Fragment>
            {clearable ? (
              !val ? null : (
                <IconButton
                  sx={{ my: -0.5 }}
                  onClick={() => {
                    setVal('');
                  }}
                >
                  <CloseRounded />
                </IconButton>
              )
            ) : null}
            {inputProps.endAdornment}
          </Fragment>
        }
      ></InputBase>
      {props.helperText ? (
        <div
          role={inputError ? 'alert' : undefined}
          id={`${baseId}-helperText`}
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
            {helperText}
          </Typography>
        </div>
      ) : null}
    </Fragment>
  );
};
