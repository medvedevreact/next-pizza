"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaImage } from "./PizzaImage";
import { Title } from "./Title";
import { Button } from "@/components/ui/button";
import { GroupVariants, Variant } from "./GroupVariants";
import { IngredientItem } from "./Ingredient";

interface ChoosePizzaFormProps {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
}

const pizzaSize: Variant[] = [
  { name: "Маленькая", value: "20" },
  { name: "Средняя", value: "30" },
  { name: "Большая", value: "40" },
];

const pizzaType: Variant[] = [
  { name: "Традиционное", value: "1" },
  { name: "Тонкое", value: "2" },
];

export const ChoosePizzaForm: React.FC<ChoosePizzaFormProps> = ({
  className,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  name,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("20");
  const [selectedType, setSelectedType] = useState<string>("1");
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);
  const [availableTypes, setAvailableTypes] = useState<Variant[]>(pizzaType);

  useEffect(() => {
    const updateAvailableTypes = () => {
      const newAvailableTypes = pizzaType.map((type) => ({
        ...type,
        disabled: !items.some(
          (item) => item.pizzaType == type.value && item.size == selectedSize
        ),
      }));

      setAvailableTypes(newAvailableTypes);

      const currentTypeDisabled = newAvailableTypes.find(
        (type) => type.value == selectedType
      )?.disabled;

      if (currentTypeDisabled) {
        const firstAvailableType = newAvailableTypes.find(
          (type) => !type.disabled
        );

        if (firstAvailableType) {
          setSelectedType(firstAvailableType.value);
        }
      }
    };

    updateAvailableTypes();
  }, [selectedSize, items, selectedType]);

  const pizzaPrice = items.find(
    (item) => item.pizzaType == selectedType && item.size == selectedSize
  )?.price;

  const ingredientsPrice = ingredients
    .filter((ing) => selectedIngredients.includes(ing.id))
    .reduce((acc, ing) => acc + ing.price, 0);

  const totalPrice = pizzaPrice + ingredientsPrice;
  const textDesc = `${selectedSize} см, ${
    pizzaType.find((type) => type.value == selectedType)?.name
  } тесто`;

  const handleIngredientClick = (ingredientId: number) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredientId)
        ? prevSelected.filter((id) => id != ingredientId)
        : [...prevSelected, ingredientId]
    );
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage imageUrl={imageUrl} size={Number(selectedSize)} />
      </div>
      <div className="w-[490px] bg-gray-100 p-7 h-[100%]">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400 mb-6">{textDesc}</p>

        <GroupVariants
          items={pizzaSize}
          onClick={setSelectedSize}
          value={selectedSize}
          className="mb-2"
        />
        <GroupVariants
          items={availableTypes}
          onClick={setSelectedType}
          value={selectedType}
          className="mb-2"
        />
        <div className="grid grid-cols-3 gap-3 mb-6">
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              imageUrl={ingredient.imageUrl}
              name={ingredient.name}
              price={ingredient.price}
              active={selectedIngredients.includes(ingredient.id)}
              onClick={() => handleIngredientClick(ingredient.id)}
            />
          ))}
        </div>
        <Button
          loading={loading}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-6"
          onClick={() => onSubmit(items[0].id, selectedIngredients)}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
