import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { Input } from "@/components/ui/input";
import { RangeSlider } from "./Range-slider";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";
import { FilterCheckboxGroup } from "./FilterCheckbox-group";

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={cn(className)}>
      <b>
        {" "}
        <Title className="mb-5" text="Фильтрация" size="lg"></Title>
      </b>

      {/* <FilterCheckbox className="mb-2" text="Можно собирать" value="1" />
      <FilterCheckbox className="mb-2" text="Новинки" value="2" /> */}

      <div className="mt-5 border-b border-y-neutral-100 py-6 mb-5">
        <b>
          {" "}
          <Title className="mb-5" text="Цена от и до:" size="sm"></Title>
        </b>

        <div className="flex gap-3  mt-3 mb-5 ">
          <Input type="number" placeholder="0" />
          <Input type="number" placeholder="30000" />
        </div>
        <RangeSlider min={0} max={30000} step={10} value={[0, 5000]} />
      </div>

      <div className="mt-5 py-3">
        <b>
          {" "}
          <Title className="mb-5" text="Ингредиенты" size="sm"></Title>
        </b>

        <FilterCheckboxGroup initialLimit={4} />
      </div>

      <div className="mt-5 py-3">
        <b>
          {" "}
          <Title className="mb-5" text="Тип теста" size="sm"></Title>
        </b>

        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2 mb-1">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="h-5 w-5"
            />
            <Label htmlFor="option-one" className="text-md">
              Традиционное
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-two"
              id="option-two"
              className="h-5 w-5"
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
