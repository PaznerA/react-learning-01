
import NUMBER_LIST from "./NumbersDay2"

import React, { useMemo, useState } from 'react';

function findErrors(levels) {
    const errors = [];
    if (levels.length < 2) return errors;
    
    // First determine if sequence should be increasing or decreasing
    const firstDiff = levels[1] - levels[0];
    const isIncreasing = firstDiff > 0;
    
    // Check first difference
    if (Math.abs(firstDiff) > 3 || Math.abs(firstDiff) < 1) {
      errors.push(`Invalid difference ${Math.abs(firstDiff)} between ${levels[0]} and ${levels[1]}`);
    }
    
    // Check each pair
    for (let i = 1; i < levels.length; i++) {
      const diff = levels[i] - levels[i-1];
      
      // Check direction
      if (isIncreasing && diff <= 0) {
        errors.push(`Decreasing at position ${i} (${levels[i-1]} -> ${levels[i]})`);
      }
      if (!isIncreasing && diff >= 0) {
        errors.push(`Increasing at position ${i} (${levels[i-1]} -> ${levels[i]})`);
      }
      
      // Check difference magnitude
      const absDiff = Math.abs(diff);
      if (absDiff > 3 || absDiff < 1) {
        errors.push(`Invalid difference ${absDiff} between ${levels[i-1]} and ${levels[i]}`);
      }
    }
    
    return errors;
  }
  
  function isSafeReport(levels) {
    return findErrors(levels).length === 0;
  }
  
  export default function Day2Solution() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;
  
    const groups = useMemo(() => {
      return NUMBER_LIST.split('\n')
        .map(line => line.trim().split(/\s+/).map(Number))
        .filter(line => line.length > 0);
    }, []);
  
    const results = useMemo(() => {
      return groups.map((group, index) => {
        const errors = findErrors(group);
        return {
          levels: group,
          isSafe: errors.length === 0,
          errors,
          index: index + 1
        };
      });
    }, [groups]);
  
    const safeCount = results.filter(r => r.isSafe).length;
    const singleErrorCount = results.filter(r => r.errors.length === 1).length;
    
    // Pagination
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleResults = results.slice(startIndex, startIndex + itemsPerPage);
  
    return (
      <div style={{ fontFamily: 'monospace', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ position: 'sticky', top: 0, backgroundColor: 'white', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
          <h2>AoC Day 2: Total Safe Reports: {safeCount}</h2>
          <div style={{ marginBottom: '10px', color: 'blue' }}>
            Number of sequences with exactly ONE error: {singleErrorCount}
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
            | Showing {startIndex + 1} - {Math.min(startIndex + itemsPerPage, results.length)} of {results.length}
          </div>
        </div>
  
        <div style={{ 
          display: 'table', 
          width: '100%', 
          borderCollapse: 'collapse' 
        }}>
          {visibleResults.map(({ levels, isSafe, errors, index }) => (
            <div 
              key={index}
              style={{
                display: 'table-row',
                backgroundColor: isSafe ? '#e6ffe6' : '#ffe6e6'
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
                width: '80px',
                textAlign: 'right',
                fontWeight: 'bold',
                color: isSafe ? 'green' : 'red'
              }}>
                {isSafe ? 'SAFE' : 'UNSAFE'}
              </div>
              <div style={{ 
                display: 'table-cell', 
                padding: '5px', 
                borderBottom: '1px solid #ddd',
                width: '80px',
                textAlign: 'right',
                color: errors.length > 0 ? 'red' : 'green'
              }}>
                {errors.length} errors
              </div>
              <div style={{ 
                display: 'table-cell', 
                padding: '5px', 
                borderBottom: '1px solid #ddd',
                fontSize: '12px',
                color: '#666'
              }}>
                {errors.join('; ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 252 - too low 213 + 39