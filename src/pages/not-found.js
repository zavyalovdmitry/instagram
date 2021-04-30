import { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not found - Zinstagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl">Not found!</p>
      </div>
    </div>
  );
}
