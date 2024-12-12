import React from "react";
import { cn } from "@/lib/utils";
import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaImage } from "./PizzaImage";
import { Title } from "./Title";
import { Button } from "@/components/ui/button";

interface ChooseProductFormProps {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
}

export const ChooseProductForm: React.FC<ChooseProductFormProps> = ({
  className,
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
}) => {
  const totalPrice = 350;
  const textDesc = "30 см, традиционное тесто";
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] bg-gray-100 p-7 h-[100%]">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDesc}</p>
        <Button
          loading={loading}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
