import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { CartDrawer } from "./CartDrawer";

interface CartButtonProps {
  className?: string;
}

export const CartButton: React.FC<CartButtonProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <CartDrawer>
        <Button variant={"outline"}>
          <FaShoppingCart />
        </Button>
      </CartDrawer>
    </div>
  );
};
