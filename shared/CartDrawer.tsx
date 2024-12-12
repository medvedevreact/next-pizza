"use client";

import React from "react";
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

const cartItems = [
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Product 1",
    price: 100,
    quantity: 2,
    details: "Details about product 1",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Product 2",
    price: 200,
    quantity: 1,
    details: "Details about product 2",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Product 3",
    price: 200,
    quantity: 1,
    details: "Details about product 3",
  },
];

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>
            В корзине{" "}
            <span className="font-bold">{cartItems.length} товара</span>
          </SheetTitle>
        </SheetHeader>
        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.map((item, index) => (
            <CartDrawerItem
              key={index}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              details={item.details}
              onClickCountButton={(type) => {
                // Handle count button click
                console.log(`Button ${type} clicked for item ${item.name}`);
              }}
              onClickRemove={() => {
                // Handle remove button click
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

              <span className="font-bold text-lg">
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                ₽
              </span>
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
