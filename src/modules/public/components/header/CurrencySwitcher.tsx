"use client";

import { ChangeEvent } from "react";

export interface CurrencyOption {
  label: string;
  value: string;
  symbol: string;
}

interface CurrencySwitcherProps {
  value: string;
  options: CurrencyOption[];
  onChange: (currency: string) => void;
}

const CurrencySwitcher = ({
  value,
  options,
  onChange,
}: CurrencySwitcherProps) => {
  const handleChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={value}
        onChange={handleChange}
        aria-label="Select Currency"
        className="h-11 rounded-lg border border-gray-200 bg-white px-4 pr-8 text-sm font-medium outline-none transition-all hover:border-primary focus:border-primary"
      >
        {options.map((currency) => (
          <option
            key={currency.value}
            value={currency.value}
          >
            {currency.symbol} {currency.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySwitcher;