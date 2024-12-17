import { prisma } from "@/prisma/prisma-client";
import { Categories } from "@/shared/Categories";
import { Container } from "@/shared/Container";
import { Filters } from "@/shared/Filters";
import { PopUp } from "@/shared/Pop-up";
import { ProductList } from "@/shared/ProductList";
import { Title } from "@/shared/Title";

export default async function Home({ searchParams }: { searchParams: any }) {
  const pizzaTypeParam = searchParams?.pizzaType;
  const ingredientsParam = searchParams?.ingredients;
  const minPriceParam = searchParams?.minPrice;
  const maxPriceParam = searchParams?.maxPrice;

  const ingredientsIdArr = ingredientsParam
    ? ingredientsParam.split(",").map(Number)
    : [];
  const minPrice = minPriceParam ? Number(minPriceParam) : 0;
  const maxPrice = maxPriceParam ? Number(maxPriceParam) : 1000;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients:
            ingredientsIdArr.length > 0
              ? {
                  some: {
                    id: {
                      in: ingredientsIdArr,
                    },
                  },
                }
              : undefined,
          items: {
            some: {
              pizzaType: pizzaTypeParam ? Number(pizzaTypeParam) : undefined,
              price: {
                gte: minPrice, // >=
                lte: maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });

  const filteredCategories = categories.filter((category) =>
    category.products.some((product) =>
      product.items.some(
        (item) =>
          item.price >= minPrice &&
          item.price <= maxPrice &&
          (pizzaTypeParam ? item.pizzaType === Number(pizzaTypeParam) : true) &&
          (ingredientsIdArr.length > 0
            ? product.ingredients.some((ingredient) =>
                ingredientsIdArr.includes(ingredient.id)
              )
            : true)
      )
    )
  );

  return (
    <div>
      <Container className="mt-5">
        <div className="sticky top-0 bg-white pb-[16px] z-10 mb-10 border-b border-gray-200">
          <Title
            text="Все категории"
            size="2xl"
            className="font-extrabold mb-4"
          ></Title>
          <div className="flex justify-between">
            <Categories categories={filteredCategories} />
            <PopUp />
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            {filteredCategories.map((category) => (
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
