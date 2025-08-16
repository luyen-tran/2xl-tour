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
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
        className="text-center"
      >
        2XL Tour - Booking Platform
      </h1>

      <p className="text-center text-gray-600 max-w-md">
        Discover amazing tours and travel experiences. Book your perfect
        adventure with our professional tour booking platform.
      </p>

      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          🚧 UI Implementation in Progress
        </p>
        <p className="text-xs text-gray-400">
          Backend architecture ready • API routes functional • State management
          configured
        </p>
      </div>

      <ThemeToggle />
    </div>
  );
}
