import React from "react";
import { cn } from "@/lib/utils";
import { FaSort } from "react-icons/fa";

interface PopUpProps {
  className?: string;
}

export const PopUp = ({ className }: PopUpProps) => {
  return (
    <div
      className={cn(
        "bg-gray-50 flex items-center rounded-sm gap-2 p-2 cursor-pointer",
        className
      )}
    >
      <FaSort className="text-primary" />
      <b>Сортировка по:</b>
      <p className="text-primary">Популярное</p>
    </div>
  );
};
