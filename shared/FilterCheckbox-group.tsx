"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterCheckbox } from "./FilterCheckbox";

interface FilterCheckboxGroupProps {
  className?: string;
  checkboxes: string[];
  initialLimit: number;
}

export const FilterCheckboxGroup = ({
  className,
  checkboxes,
  initialLimit,
}: FilterCheckboxGroupProps) => {
  const [limit, setLimit] = useState(initialLimit);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setLimit(checkboxes.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setLimit(initialLimit);
    setShowAll(false);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {checkboxes.slice(0, limit).map((checkbox: string, index: number) => (
        <FilterCheckbox text={checkbox} key={index} value={String(index)} />
      ))}
      {!showAll && limit < checkboxes.length && (
        <p className="cursor-pointer text-primary" onClick={handleShowMore}>
          Показать ещё...
        </p>
      )}
      {showAll && (
        <p className="cursor-pointer text-primary" onClick={handleShowLess}>
          Скрыть
        </p>
      )}
    </div>
  );
};
