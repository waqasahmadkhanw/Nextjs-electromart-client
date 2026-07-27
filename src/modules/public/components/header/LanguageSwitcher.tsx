"use client";

import { ChangeEvent } from "react";
import { Languages } from "lucide-react";

export interface LanguageOption {
  label: string;
  value: string;
}

interface LanguageSwitcherProps {
  value: string;
  options: LanguageOption[];
  onChange: (language: string) => void;
}

const LanguageSwitcher = ({
  value,
  options,
  onChange,
}: LanguageSwitcherProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative">
<Languages className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <select
        value={value}
        onChange={handleChange}
        aria-label="Select Language"
        className="h-11 rounded-lg border border-border bg-background py-2 pl-10 pr-8 text-sm font-medium outline-none transition-all hover:border-primary focus:border-primary"
      >
        {options.map((language) => (
          <option
            key={language.value}
            value={language.value}
          >
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;