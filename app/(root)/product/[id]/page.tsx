import React from "react";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container } from "@/shared/Container";
import { PizzaImage } from "@/shared/PizzaImage";
import { Title } from "@/shared/Title";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="my-10">
      <div className="flex flex-1">
        {" "}
        <PizzaImage imageUrl={product.imageUrl} size={30} />
        <div className="w-[490px] bg-gray-100 pl-8 pt-4">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
        </div>
      </div>
    </Container>
  );
}
