import React from 'react';

const CoverageBar = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      className={`h-2.5 rounded-full ${
        percentage >= 80 ? 'bg-green-600' : 
        percentage >= 60 ? 'bg-yellow-400' : 
        'bg-red-600'
      }`}
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

export default CoverageBar;