import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="glass rounded-2xl p-8 mb-8 w-full max-w-lg">
          <img src="/src/assets/kedarlogo.png" alt="Kedar Logo" className="w-full h-32 mx-auto mb-4 floating" />
          <p className="text-white/80 mb-6">Loading Portfolio...</p>
          
          <div className="w-64 glass-dark rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full transition-all duration-300 glow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-white/60 mt-4 text-sm">{progress}%</p>
        </div>
        
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 glass rounded-full floating" style={{animationDelay: '0s'}}></div>
          <div className="w-3 h-3 glass rounded-full floating" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 glass rounded-full floating" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;