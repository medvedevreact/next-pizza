import { prisma } from "@/prisma/prisma-client";
import { ChooseProductModal } from "@/shared/modals/ChooseProductModal";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params,
}: {
  params: { id: string };
}) {
  // Ожидаем params перед использованием его свойств
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
