"use client";

import { ChangeEvent } from "react";
import { Globe } from "lucide-react";

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

  const currentLang = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <Globe className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <select
        value={value}
        onChange={handleChange}
        aria-label="Select Language"
        className="h-11 cursor-pointer rounded-lg border border-border bg-background py-2 pl-8 pr-7 text-xs font-medium outline-none transition-all hover:border-primary focus:border-primary appearance-none"
      >
        {options.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[8px] text-muted-foreground">
        {currentLang?.value.toUpperCase()}
      </span>
    </div>
  );
};

export default LanguageSwitcher;

