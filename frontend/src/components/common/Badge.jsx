import React from 'react'

const Badge = ({ children, variant = 'gold' }) => {
  const variants = {
    gold: 'bg-yellow-100 text-yellow-800',
    silver: 'bg-gray-100 text-gray-800'
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};




export default Badge;