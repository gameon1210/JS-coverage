import React, { useState, useEffect } from 'react';
import CoverageMetric from './components/CoverageMetric';
import TestedFunction from './components/TestedFunction';

function App() {
  const [coverage, setCoverage] = useState({
    statements: {
      covered: 18,
      total: 18,
      percentage: 100
    },
    branches: {
      covered: 1,
      total: 1,
      percentage: 100
    },
    functions: {
      covered: 4,
      total: 4,
      percentage: 100
    },
    lines: {
      covered: 18,
      total: 18,
      percentage: 100
    }
  });

  const testedFunctions = [
    'add(a, b)',
    'subtract(a, b)',
    'multiply(a, b)',
    'divide(a, b)'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Code Coverage Report
          </h1>
          
          <div className="space-y-6">
            <CoverageMetric 
              title="Statements"
              covered={coverage.statements.covered}
              total={coverage.statements.total}
              percentage={coverage.statements.percentage}
            />
            
            <CoverageMetric 
              title="Branches"
              covered={coverage.branches.covered}
              total={coverage.branches.total}
              percentage={coverage.branches.percentage}
            />
            
            <CoverageMetric 
              title="Functions"
              covered={coverage.functions.covered}
              total={coverage.functions.total}
              percentage={coverage.functions.percentage}
            />
            
            <CoverageMetric 
              title="Lines"
              covered={coverage.lines.covered}
              total={coverage.lines.total}
              percentage={coverage.lines.percentage}
            />
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Tested Functions
            </h2>
            <div className="space-y-3">
              {testedFunctions.map((func, index) => (
                <TestedFunction key={index} name={func} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;