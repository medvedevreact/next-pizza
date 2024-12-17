"use client";

import React, { useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { Input } from "@/components/ui/input";
import { RangeSlider } from "./Range-slider";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";
import { FilterCheckboxGroup } from "./FilterCheckbox-group";
import useFilters from "@/store/filters";

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  const {
    pizzaType,
    setPizzaType,
    priceFrom,
    priceTo,
    setPriceFrom,
    setPriceTo,
    ingredients,
    setIngredients,
  } = useFilters();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pizzaTypeParam = searchParams.get("pizzaType");
    const ingredientsParam = searchParams.get("ingredients");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");

    if (pizzaTypeParam) {
      setPizzaType(Number(pizzaTypeParam));
    }

    if (ingredientsParam) {
      setIngredients(ingredientsParam.split(","));
    }

    if (minPriceParam) {
      setPriceFrom(Number(minPriceParam));
    }

    if (maxPriceParam) {
      setPriceTo(Number(maxPriceParam));
    }
  }, [searchParams]);

  const handlePizzaTypeChange = (value: string) => {
    setPizzaType(Number(value));
  };

  const handlePriceFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceFrom(value);
  };

  const handlePriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceTo(value);
  };

  const handleSliderChange = (values: number[]) => {
    setPriceFrom(values[0]);
    setPriceTo(values[1]);
  };

  const handleIngredientChange = (ingredient: string, checked: boolean) => {
    if (checked) {
      setIngredients([...ingredients, ingredient]);
    } else {
      setIngredients(ingredients.filter((ing) => ing !== ingredient));
    }
  };

  const queryString = useMemo(() => {
    if (
      pizzaType === null &&
      ingredients.length === 0 &&
      priceFrom === 0 &&
      priceTo === 1000
    ) {
      return "";
    }
    return qs.stringify({
      pizzaType,
      ingredients: ingredients.join(","),
      minPrice: priceFrom,
      maxPrice: priceTo,
    });
  }, [pizzaType, ingredients, priceFrom, priceTo]);

  useEffect(() => {
    router.push(`?${queryString}`, { scroll: false });
  }, [queryString]);

  return (
    <div className={cn(className)}>
      <b>
        {" "}
        <Title className="mb-5" text="Фильтрация" size="lg"></Title>
      </b>

      <div className="mt-5 border-b border-y-neutral-100 py-6 mb-5">
        <b>
          {" "}
          <Title className="mb-5" text="Цена от и до:" size="sm"></Title>
        </b>

        <div className="flex gap-3 mt-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            value={priceFrom}
            onChange={handlePriceFromChange}
          />
          <Input
            type="number"
            placeholder="1000"
            value={priceTo}
            onChange={handlePriceToChange}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={50}
          value={[priceFrom, priceTo]}
          onValueChange={handleSliderChange}
        />
      </div>

      <div className="mt-5 py-3">
        <b>
          {" "}
          <Title className="mb-5" text="Ингредиенты" size="sm"></Title>
        </b>

        <FilterCheckboxGroup
          initialLimit={4}
          handleIngredientChange={handleIngredientChange}
        />
      </div>

      <div className="mt-5 py-3">
        <b>
          {" "}
          <Title className="mb-5" text="Тип теста" size="sm"></Title>
        </b>

        <RadioGroup
          defaultValue={String(pizzaType)}
          onValueChange={handlePizzaTypeChange}
        >
          <div className="flex items-center space-x-2 mb-1">
            <RadioGroupItem
              value="1"
              id="option-one"
              className="h-5 w-5"
              checked={pizzaType === 1}
            />
            <Label htmlFor="option-one" className="text-md">
              Традиционное
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option-two"
              className="h-5 w-5"
              checked={pizzaType === 2}
            />
            <Label htmlFor="option-two" className="text-md">
              Тонкое
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
