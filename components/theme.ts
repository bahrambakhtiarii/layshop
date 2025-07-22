// theme.ts
// (این فایل باید در روت پروژه، یا یک پوشه مثل `config` یا `styles` باشه)
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Extend MUI Theme for custom properties if needed (اختیاری)
// declare module '@mui/material/styles' {
//   interface Theme {
//     // مثلا: appDrawer: { width: number };
//   }
//   interface ThemeOptions {
//     // مثلا: appDrawer?: { width?: number };
//   }
// }

let theme = createTheme({
  direction: 'rtl', // اگر سایت شما RTL هست
  typography: {
    fontFamily: 'IRANSansX, sans-serif', // نام فونت فارسی شما
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    // ... سایر تنظیمات typography
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  // ... سایر تنظیمات تم
});

theme = responsiveFontSizes(theme);

export default theme;