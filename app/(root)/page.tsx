import { prisma } from "@/prisma/prisma-client";
import { Categories } from "@/shared/Categories";
import { Container } from "@/shared/Container";
import { Filters } from "@/shared/Filters";
import { PopUp } from "@/shared/Pop-up";
import { ProductList } from "@/shared/ProductList";
import { Title } from "@/shared/Title";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
  return (
    <div>
      <Container className="mt-5">
        <div className="sticky top-0 bg-white pb-[16px] z-10 mb-10  border-b border-gray-200 ">
          <Title
            text="Все категории"
            size="2xl"
            className="font-extrabold mb-4"
          ></Title>
          <div className="flex justify-between  ">
            <Categories categories={categories} />
            <PopUp />
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            {categories.map((category) => (
              <ProductList
                key={category.id}
                title={category.name}
                items={category.products}
                categoryId={category.id}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
