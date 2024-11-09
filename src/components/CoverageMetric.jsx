import React from 'react';
import CoverageBar from './CoverageBar';

const CoverageMetric = ({ title, covered, total, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <span className="text-sm font-medium text-gray-700">
        {percentage}% ({covered}/{total})
      </span>
    </div>
    <CoverageBar percentage={percentage} />
  </div>
);

export default CoverageMetric;