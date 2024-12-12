"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

import { useRouter } from "next/navigation";

import { ProductWithRelations } from "@/@types/types";
import { ChooseProductForm } from "../ChooseProductForm";
import { ChoosePizzaForm } from "../ChoosePizzaForm";

interface ChooseProductModalProps {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<ChooseProductModalProps> = ({
  className,
  product,
}) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <DialogTitle className="hidden"></DialogTitle>
        {isPizzaForm ? (
          <ChoosePizzaForm
            items={product.items}
            name={product.name}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
          />
        ) : (
          <ChooseProductForm name={product.name} imageUrl={product.imageUrl} />
        )}
      </DialogContent>
    </Dialog>
  );
};
