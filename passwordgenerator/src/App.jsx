import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+~`[]{}";
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-800">
        <h1 className="flex items-center justify-center mb-6 text-2xl font-semibold text-white">
          Password Generator
        </h1>
        <div className="flex items-center justify-center shadow rounded-lg overflow-hidden mb-6 bg-gray-700">
          <input
            className="w-full p-3 text-white bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            placeholder="password"
            readOnly
          />
          <button 
            className="outline-none bg-pink-500 text-white px-3 py-1 ml-2"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="length" className="text-white">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="numberInput" className="text-white">Numbers</label>
          <input
            id="numberInput"
            type="checkbox"
            checked={numberAllowed}
            className="cursor-pointer"
            onChange={() => setNumberAllowed(prev => !prev)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="charInput" className="text-white">Characters</label>
          <input
            id="charInput"
            type="checkbox"
            checked={charAllowed}
            className="cursor-pointer"
            onChange={() => setCharAllowed(prev => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
