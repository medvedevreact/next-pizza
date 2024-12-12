"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { Title } from "./Title";
import { useIntersection } from "react-use";
import { useCategory } from "@/store/category";

interface ProductListProps {
  className?: string;
  title?: string;
  items: any[];
  categoryId: number;
}

export const ProductList = ({
  className,
  title,
  items,
  categoryId,
}: ProductListProps) => {
  const { setActiveId } = useCategory();
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);

  return (
    <div className="pb-[160px]" id={categoryId} ref={intersectionRef}>
      {title && (
        <b>
          <Title text={title} size="lg" className="mb-4" />
        </b>
      )}
      <div className={cn("gap-5 grid grid-cols-3", className)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
