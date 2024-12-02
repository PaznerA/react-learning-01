import NUMBER_LIST from "./NumbersDay2"
import React, { useMemo, useState } from 'react';

function isSafeReport(levels) {
  if (levels.length < 2) return false;
  
  const firstDiff = levels[1] - levels[0];
  const isIncreasing = firstDiff > 0;
  
  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i-1];
    if (isIncreasing && diff <= 0) return false;
    if (!isIncreasing && diff >= 0) return false;
    const absDiff = Math.abs(diff);
    if (absDiff < 1 || absDiff > 3) return false;
  }
  
  return true;
}

function checkWithRemovals(levels) {
  // Try removing each number one at a time
  for (let i = 0; i < levels.length; i++) {
    const newLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isSafeReport(newLevels)) {
      return {
        canBeSafe: true,
        removedIndex: i,
        removedValue: levels[i],
        newSequence: newLevels
      };
    }
  }
  return { canBeSafe: false };
}

export default function Day2Solution2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRemovals, setShowRemovals] = useState(false);
  const itemsPerPage = 50;

  const groups = useMemo(() => {
    return NUMBER_LIST.split('\n')
      .map(line => line.trim().split(/\s+/).map(Number))
      .filter(line => line.length > 0);
  }, []);

  const results = useMemo(() => {
    return groups.map((group, index) => {
      const isOriginalSafe = isSafeReport(group);
      const removalCheck = showRemovals ? checkWithRemovals(group) : null;
      
      return {
        levels: group,
        isSafe: isOriginalSafe,
        index: index + 1,
        removalCheck
      };
    });
  }, [groups, showRemovals]);

  const safeCount = results.filter(r => r.isSafe).length;
  const fixableCount = showRemovals ? 
    results.filter(r => !r.isSafe && r.removalCheck?.canBeSafe).length : 0;
  const totalSafeWithRemovals = safeCount + fixableCount;
  
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleResults = results.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ fontFamily: 'monospace', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ position: 'sticky', top: 0, backgroundColor: 'white', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
        <h2>AoC Day 2: Analysis</h2>
        <div>
          <button 
            onClick={() => setShowRemovals(!showRemovals)}
            style={{ 
              margin: '10px 0',
              padding: '5px 10px',
              backgroundColor: showRemovals ? '#e0e0e0' : '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            {showRemovals ? 'Hide Removal Analysis' : 'Show Removal Analysis'}
          </button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          Originally Safe Reports: {safeCount}
          {showRemovals && (
            <>
              <br />
              Fixable by removing one number: {fixableCount}
              <br />
              Total safe after fixes: {totalSafeWithRemovals}
            </>
          )}
        </div>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          Page {currentPage} of {totalPages} |
          <button 
            onClick={() => setCurrentPage(1)} 
            disabled={currentPage === 1}
            style={{ margin: '0 5px' }}
          >
            First
          </button>
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
            disabled={currentPage === 1}
            style={{ margin: '0 5px' }}
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
            disabled={currentPage === totalPages}
            style={{ margin: '0 5px' }}
          >
            Next
          </button>
          <button 
            onClick={() => setCurrentPage(totalPages)} 
            disabled={currentPage === totalPages}
            style={{ margin: '0 5px' }}
          >
            Last
          </button>
        </div>
      </div>

      <div style={{ 
        display: 'table', 
        width: '100%', 
        borderCollapse: 'collapse' 
      }}>
        {visibleResults.map(({ levels, isSafe, removalCheck, index }) => (
          <div 
            key={index}
            style={{
              display: 'table-row',
              backgroundColor: isSafe ? '#e6ffe6' : (removalCheck?.canBeSafe ? '#fff3e0' : '#ffe6e6')
            }}
          >
            <div style={{ 
              display: 'table-cell', 
              padding: '5px', 
              borderBottom: '1px solid #ddd',
              width: '50px'
            }}>
              #{index}
            </div>
            <div style={{ 
              display: 'table-cell', 
              padding: '5px', 
              borderBottom: '1px solid #ddd' 
            }}>
              {levels.join(' ')}
            </div>
            <div style={{ 
              display: 'table-cell', 
              padding: '5px', 
              borderBottom: '1px solid #ddd',
              width: '100px',
              textAlign: 'right',
              fontWeight: 'bold',
              color: isSafe ? 'green' : 'red'
            }}>
              {isSafe ? 'SAFE' : 'UNSAFE'}
            </div>
            {showRemovals && !isSafe && (
              <div style={{ 
                display: 'table-cell', 
                padding: '5px', 
                borderBottom: '1px solid #ddd',
                fontSize: '12px',
                color: removalCheck?.canBeSafe ? 'blue' : '#666'
              }}>
                {removalCheck?.canBeSafe ? 
                  `Can be fixed by removing ${removalCheck.removedValue} at position ${removalCheck.removedIndex + 1}: ${removalCheck.newSequence.join(' ')}` : 
                  'Cannot be fixed by removing one number'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}