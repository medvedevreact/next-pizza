"use client";

import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartDrawerItem } from "./CartItem";
import { useCartStore } from "@/store/cart";

const pizzaSize: Variant[] = [
  { name: "Маленькая", value: "20" },
  { name: "Средняя", value: "30" },
  { name: "Большая", value: "40" },
];

const pizzaType: Variant[] = [
  { name: "Традиционное", value: "1" },
  { name: "Тонкое", value: "2" },
];

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { items, totalAmount, fetchCartItems, loading, error } = useCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart items.</div>;
  console.log(items);

  const getDetails = (item) => {
    const sizeName = pizzaSize.find(
      (size) => size.value === item.pizzaSize.toString()
    )?.name;
    const typeName = pizzaType.find(
      (type) => type.value === item.type.toString()
    )?.name;
    const ingredientsNames = item.ingredients
      .map((ingredient) => ingredient.name)
      .join(", ");
    return (
      <>
        Размер: {sizeName}
        <br />
        Тип теста: {typeName}
        <br />
        Ингредиенты: {ingredientsNames}
      </>
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>
        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.map((item, index) => (
            <CartDrawerItem
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              details={getDetails(item)}
              onClickCountButton={(type) => {
                console.log(`Button ${type} clicked for item ${item.name}`);
              }}
              onClickRemove={() => {
                console.log(`Remove clicked for item ${item.name}`);
              }}
              className="mb-4"
            />
          ))}
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/checkout">
              <Button className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
