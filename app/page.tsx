import { Categories } from "@/shared/Categories";
import { Container } from "@/shared/Container";
import { Filters } from "@/shared/Filters";
import { PopUp } from "@/shared/Pop-up";

import { ProductList } from "@/shared/ProductList";
import { Title } from "@/shared/Title";

const pizzas = {
  categoryId: 0,
  items: [
    {
      id: 0,
      name: "",
      price: 599,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    },
    {
      id: 1,
      name: "",
      price: 599,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    },
    {
      id: 2,
      name: "",
      price: 599,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    },
    {
      id: 3,
      name: "",
      price: 599,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    },
    {
      id: 4,
      name: "",
      price: 599,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    },
    {
      id: 5,
      name: "",
      price: 0,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    },
  ],
};
const breakfast = {
  categoryId: 1,
  items: [
    {
      id: 0,
      name: "",
      price: 199,
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EF90613992FBC69C3DD4772681C783.avif",
    },
    {
      id: 1,
      name: "",
      price: 199,
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EF90613992FBC69C3DD4772681C783.avif",
    },
    {
      id: 2,
      name: "",
      price: 199,
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EF90613992FBC69C3DD4772681C783.avif",
    },
  ],
};

export default function Home() {
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
            <Categories />
            <PopUp />
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <ProductList
              title="Пиццы"
              items={pizzas.items}
              categoryId={pizzas.categoryId}
            />
            <ProductList
              title="Завтрак"
              items={breakfast.items}
              categoryId={breakfast.categoryId}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
