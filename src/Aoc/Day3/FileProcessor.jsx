import React, { useState } from 'react';

const processString = (text, pattern) => {
    let sum = 0
    let action = true
    text.split('do')
    .map(line => {
        (line.substr(0,5) === "n't()") ? action = false : action = true
        if(action){
            const matches = line.match(pattern) 
            console.table(matches)
            matches?.map(match => {
                const [a, b] = match.substr(4).split(",")
                sum += parseInt(a)*parseInt(b.substr(0,3))
            })
        }
    });
    return sum
};


const FileProcessor = () => {
  const [result, setResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setIsProcessing(true);
      setError(null);

      const text = await file.text();
      const pattern = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;
      const processed = processString(text, pattern);
      setResult(processed);
    } catch (err) {
      setError('Chyba při zpracování souboru: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Zpracování textového souboru</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            onClick={() => document.getElementById('file-upload').click()}
            disabled={isProcessing}
          >
            {isProcessing ? 'Zpracovávám...' : 'Vybrat soubor'}
          </button>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".txt"
            onChange={handleFileUpload}
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Výsledek:</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto whitespace-pre-wrap">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileProcessor;

// 70812129 - too low
// 74838033 - ?
// 6550816 - ???
// 170807108 - ??