import { createTheme } from '@mui/material';

export const theme = createTheme(
  Object.freeze({
    colors: {
      white: '#ffffff',
      grey: '#bababa',
      bgGrey: '#f1f1f1',
      black: '#000000',
      accentShadow: '#1de9b6',
      lightRed: '#ff7777',
    },

    palette: {
      primary: {
        main: '#1de9b6',
        contrastText: '#000',
      },
      secondary: {
        main: '#f44336',
        contrastText: '#fff',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },

    fontsSizes: {
      xs: 12,
      s: 14,
      m: 18,
      l: 24,
      xl: 32,
    },

    fontWeights: {
      normal: 400,
      semiBold: 500,
      bold: 700,
    },

    borders: {
      generic: '1px solid #ccc',
    },

    radii: {
      none: '0',
      generic: '5px',
      semiRound: '15px',
      round: '50%',
    },

    space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  })
);
