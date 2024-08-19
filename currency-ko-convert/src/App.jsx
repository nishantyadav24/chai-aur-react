import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div className="App">
      <InputBox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
        currencyOptions={options}
        selectedCurrency={from}
      />
      <InputBox
        label="To"
        amount={convertedAmount}
        onCurrencyChange={setTo}
        currencyOptions={options}
        selectedCurrency={to}
        amountDisabled={true}
      />
      <button onClick={convert}>Convert</button>
    </div>
  );
}

export default App;
