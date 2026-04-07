
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const texts = [
      'Initializing...',
      'Loading Portfolio...',
      'Crafting Experience...',
      'Almost Ready...',
      'Welcome!'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(texts[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setLoadingText(texts[2]);
        } else if (newProgress >= 60 && newProgress < 90) {
          setLoadingText(texts[3]);
        } else if (newProgress >= 90) {
          setLoadingText(texts[4]);
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }
        
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-slate-900 to-background z-50 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle particle-1 absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center neon-glow animate-pulse mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan animate-spin"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-fade-in">
            B.Nihanth
          </h1>
          <p className="text-neon-cyan text-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Full Stack Developer
          </p>
        </div>

        <div className="w-80 max-w-full mx-auto">
          <div className="mb-4">
            <p className="text-black text-sm animate-fade-in" style={{ animationDelay: '1s' }}>
              {loadingText}
            </p>
          </div>
          
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="mt-2 text-neon-cyan text-sm font-medium">
            {progress}%
          </div>
        </div>

        {progress >= 100 && (
          <div className="mt-6 animate-fade-in">
            <p className="text-black text-sm">
              "Engineering Smart Solutions"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
