'use client';

import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="c-toggle-theme-icon">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className="c-toggle-theme-text">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
