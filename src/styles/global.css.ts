import { getThemeVars } from '@pittorica/picto';
import { style } from '@vanilla-extract/css';

export const theme = style({
  vars: getThemeVars({
    typography: {
      fonts: {
        sans: '"Momo Trust Sans", sans-serif',
        serif: '"Roboto Serif", serif',
        display: '"Momo Trust Display", sans-serif',
      },
    },
  }),
});
