import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }
  interface Palette {
    gray: Palette['primary'];
  }
  interface PaletteOptions {
    gray: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle3: {
      fontSize: '0.85rem',
      fontWeight: 500,
    },
  },
  palette: {
    gray: {
      main: '#f1f3f5',
      dark: '#e1e3e5',
    },
    error: {
      main: '#f03e3e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
