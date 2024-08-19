import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`flex flex-col items-center bg-white p-2 rounded-lg text-xs ${className}`}>
      <div className='w-full max-w-xs'>
        <label htmlFor={amountInputId} className='text-black/60 mb-1 block text-center'>
          {label}
        </label>
        <input
          id={amountInputId}
          className='outline-none w-full bg-transparent py-1 px-2 text-center border rounded'
          type='number'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
        <div className='mt-2'>
          <label className='text-black/60 mb-1 block text-center'>
            Currency
          </label>
          <select
            className='rounded border px-2 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
