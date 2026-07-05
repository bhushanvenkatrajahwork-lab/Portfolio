'use client';

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-bg-primary select-none pointer-events-none">
      {/* Light Cobalt top-centered ambient radial highlight */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37, 99, 235, 0.035), transparent 75%)',
        }}
      />
      
      {/* Light Indigo secondary corner highlight */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle 600px at -10% 90%, rgba(79, 70, 229, 0.015), transparent 80%)',
        }}
      />

      {/* Clean soft noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
