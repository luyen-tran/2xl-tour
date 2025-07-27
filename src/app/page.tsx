import ThemeToggle from '../components/theme-toggle/ThemeToggle';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
        className="text-center"
      >
        Hello World
      </h1>
      <ThemeToggle />
    </div>
  );
}
