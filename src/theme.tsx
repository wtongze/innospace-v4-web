import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    marker1: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    marker1?: React.CSSProperties;
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
    marker1: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    gray: true;
  }
}


const t = createTheme({
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
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    marker1: {
      fontSize: '2rem',
      fontFamily: 'Permanent Marker, sans-serif',
      lineHeight: 'inherit',
      letterSpacing: '2px',
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
          paddingTop: '8px',
          paddingBottom: '8px',
          borderRadius: '4px',
        },
      },
    },
  },
});

export const theme = t;
