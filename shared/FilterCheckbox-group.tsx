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
  handleIngredientChange: (ingredient: string, checked: boolean) => void;
}

export const FilterCheckboxGroup = ({
  className,
  initialLimit,
  handleIngredientChange,
}: FilterCheckboxGroupProps) => {
  const [limit, setLimit] = useState(initialLimit);
  const [showAll, setShowAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  const handleShowMore = () => {
    setLimit(checkboxes.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setLimit(initialLimit);
    setShowAll(false);
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
            .map((checkbox: Ingredient) => (
              <FilterCheckbox
                key={checkbox.id}
                text={checkbox.name}
                value={String(checkbox.id)}
                handleIngredientChange={(checked) =>
                  handleIngredientChange(String(checkbox.id), checked)
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
