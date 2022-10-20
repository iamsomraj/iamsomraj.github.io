import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

type Props = {};

const ThemeButton = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className="h-12 w-12 rounded-full bg-dark-gray p-3 text-mint-green"
        role="button"
        onClick={() => setTheme('light')}
      />
    );
  } else {
    return (
      <MoonIcon
        className="h-12 w-12 rounded-full bg-mint-green p-3 text-dark-gray"
        role="button"
        onClick={() => setTheme('dark')}
      />
    );
  }
};

export default ThemeButton;
