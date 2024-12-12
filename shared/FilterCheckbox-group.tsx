"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FilterCheckbox } from "./FilterCheckbox";
import { fetchIngredients } from "@/services/ingredients";
import { Ingredient } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterCheckboxGroupProps {
  className?: string;
  initialLimit: number;
}

export const FilterCheckboxGroup = ({
  className,
  initialLimit,
}: FilterCheckboxGroupProps) => {
  const [limit, setLimit] = useState(initialLimit);
  const [showAll, setShowAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<Set<string>>(
    new Set()
  );

  const handleShowMore = () => {
    setLimit(checkboxes.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setLimit(initialLimit);
    setShowAll(false);
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSelectedCheckboxes((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (checked) {
        newSelected.add(value);
      } else {
        newSelected.delete(value);
      }
      return newSelected;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIngredients();
        setCheckboxes(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {loading
        ? Array.from({ length: initialLimit }).map((_, index) => (
            <Skeleton key={index} className="w-[225px] h-[20px] rounded-full" />
          ))
        : checkboxes
            .slice(0, limit)
            .map((checkbox: Ingredient, index: number) => (
              <FilterCheckbox
                text={checkbox.name}
                key={index}
                value={String(checkbox.id)}
                checked={selectedCheckboxes.has(String(checkbox.id))}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(String(checkbox.id), checked)
                }
              />
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
