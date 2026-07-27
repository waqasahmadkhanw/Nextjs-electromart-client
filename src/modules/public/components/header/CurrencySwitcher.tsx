"use client";

import { ChangeEvent } from "react";
import { DollarSign } from "lucide-react";

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
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const currentCurrency = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <DollarSign className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <select
        value={value}
        onChange={handleChange}
        aria-label="Select Currency"
        className="h-11 cursor-pointer rounded-lg border border-border bg-background py-2 pl-8 pr-7 text-xs font-medium outline-none transition-all hover:border-primary focus:border-primary appearance-none"
      >
        {options.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.symbol} {currency.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[8px] font-semibold text-muted-foreground">
        {currentCurrency?.value}
      </span>
    </div>
  );
};

export default CurrencySwitcher;
