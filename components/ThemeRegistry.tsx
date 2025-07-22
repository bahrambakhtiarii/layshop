// components/ThemeRegistry.tsx
'use client'; // این بسیار مهمه!

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';

// مسیر ایمپورت تم رو بر اساس جایی که theme.ts رو گذاشتید تنظیم کنید
// اگر theme.ts در روت پروژه است:
import theme from '../components/theme'; // از ThemeRegistry.tsx به روت یک پوشه برگرد
// اگر theme.ts در components/theme.ts است (کنار ThemeRegistry.tsx):
// import theme from './theme';

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

// تایپ‌دهی پراپ‌ها برای ThemeRegistry
interface ThemeRegistryProps {
  options: { key: string; prepend?: boolean }; // مثلاً { key: 'mui' }
  children: React.ReactNode;
}

export default function ThemeRegistry({ options, children }: ThemeRegistryProps) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createEmotionCache();
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = []; // تایپ آرایه مشخص شد
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}