import React from "react";
import { cn } from "@/lib/utils";
import { ProductItem } from "@prisma/client";

import { Title } from "./Title";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ChooseProductFormProps {
  className?: string;
  imageUrl: string;
  name: string;
  items: ProductItem[];
  loading?: boolean;
  id: any;
}

export const ChooseProductForm: React.FC<ChooseProductFormProps> = ({
  className,
  name,
  items,
  imageUrl,
  loading,
  id,
}) => {
  const totalPrice = 350;
  const textDesc = "Отличный товар, выбор настоящего мужчины или женщины :3";
  const { addCartItem } = useCartStore();
  const firstItem = items[0];
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await addCartItem({
        productItemId: items[0].id,
      });
      toast.success("Элемент успешно добавлен в корзину!");
      router.back();
    } catch (error) {
      toast.error(
        "Добавление в корзину не удалось. Пожалуйста, повторите попытку."
      );
    }
  };
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
          onClick={handleSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
