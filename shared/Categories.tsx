"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategory } from "@/store/category";

interface CategoriesProps {
  className?: string;
}

const categories = [
  { id: 0, name: "Пиццы" },
  { id: 1, name: "Завтраки" },
  { id: 2, name: "Острые" },
  { id: 3, name: "Сладкие" },
  { id: 4, name: "Вегетарианские" },
];

export const Categories = ({ className }: CategoriesProps) => {
  const { activeId } = useCategory();

  return (
    <ul
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-sm", className)}
    >
      {categories.map((category) => (
        <a
          href={`/#${category.id}`}
          key={category.id}
          className={cn(
            "px-5 rounded-sm cursor-pointer",
            category.id === activeId
              ? "bg-white text-black shadow-sm"
              : "bg-gray-200"
          )}
        >
          {category.name}
        </a>
      ))}
    </ul>
  );
};
