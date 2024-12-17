import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import useFilters from "@/store/filters";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  name?: string;
  className?: string;
  handleIngredientChange: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  name,
  className,
  handleIngredientChange,
}) => {
  const { ingredients } = useFilters();

  const isChecked = ingredients.includes(value);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={handleIngredientChange}
        checked={isChecked}
        value={value}
        className={cn("rounded-[8px] w-6 h-6", className)}
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
