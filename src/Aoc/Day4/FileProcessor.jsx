import React, { useState } from 'react';

const getNextChar = (char) => {
  switch(char){
    case "X": return "M"; break;
    case "M": return "A"; break;
    case "A": return "S"; break;
    case "S": return "X"; break;
  }
}

const processString = (text) => {
  const pattern = /[^XMAS]/g;
  let sum = 0
  const chars = Array.from(text.replace(pattern,''))
  let completedList = {
    X: 0,
    M: 0,
    A: 0,
    S: 0
  }
  let nextChar = "X"
  let counter = 0
  let wordsFound = 0
  do {
    wordsFound = 0
    for(const char of chars){

      if(char === nextChar){
        nextChar = getNextChar(char)
        completedList[char]++
      }

      if(completedList.X === completedList.M === completedList.A === completedList.S){
        wordsFound++
      }

    }
  } while (wordsFound > 0)
  console.log(completedList)


  const charsRev = chars.reverse()

  do {
    wordsFound = 0
    for(const char of charsRev){

      if(char === nextChar){
        nextChar = getNextChar(char)
        completedList[char]++
      }

      if(completedList.X === completedList.M === completedList.A === completedList.S){
        wordsFound++
      }

    }
  } while (wordsFound > 0)
  console.log(completedList)

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
      const processed = processString(text);
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

// 3773 - too high