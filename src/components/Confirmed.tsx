import { useEffect } from 'react';

export default function Confirmed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'foreverticket://login/';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
          <div className="mb-4">
            <img src="/ForeverTicket.svg" alt="Forever Ticket" className="h-8 mx-auto" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Account Confirmed!</h1>
          <h2 className="text-xl font-bold mb-4">
            <span className="gradient-text">Welcome to ForeverTicket</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Your account has been successfully verified. Redirecting you to the app...
          </p>
          <div className="animate-spin h-6 w-6 border-2 border-primary rounded-full border-t-transparent mx-auto" />
        </div>
      </div>
    </div>
  );
}
