import { useState } from 'react';

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxValue,
} from '@/components/ui/combobox';

type Props = {
  placeholder: string;
  value: string[];
  onChange: (value: string[]) => void;
};

export function MultipleCombobox({ value, onChange, placeholder }: Props) {
  const [inputValue, setInputValue] = useState('');

  const addOption = (rawValue: string) => {
    const alias = rawValue.trim();

    if (!alias) return;

    const alreadyExists = value.some((item) => item.toLowerCase() === alias.toLowerCase());

    if (alreadyExists) {
      setInputValue('');
      return;
    }

    onChange([...value, alias]);
    setInputValue('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      addOption(inputValue);
    }

    if (event.key === 'Backspace' && inputValue === '' && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const handleBlur = () => {
    if (inputValue.trim()) {
      addOption(inputValue);
    }
  };

  return (
    <Combobox multiple value={value} onValueChange={onChange}>
      <ComboboxChips>
        <ComboboxValue>
          {value.map((alias) => (
            <ComboboxChip key={alias}>{alias}</ComboboxChip>
          ))}
        </ComboboxValue>

        <ComboboxChipsInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      </ComboboxChips>
    </Combobox>
  );
}
