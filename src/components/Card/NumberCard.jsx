import React from 'react'
import Badge from '../common/Badge.jsx';




const NumberCard = ({ number, badge, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-6 rounded-lg border-2 transition-all hover:border-blue-500 hover:shadow-md text-left w-full ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
    >
      {badge && (
        <div className="absolute top-3 right-3">
          <Badge variant={badge.toLowerCase()}>{badge}</Badge>
        </div>
      )}
      <div className="text-xl font-semibold text-gray-900 tracking-wide">
        {number}
      </div>
    </button>
  );
};

export default NumberCard;