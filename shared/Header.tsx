import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { CartButton } from "./CartButton";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("border border-b ", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          {" "}
          <div className="flex gap-2 cursor-poiner">
            <Image
              src="/img/Логотип.png"
              alt="Logo Image"
              width={35}
              height={35}
            ></Image>
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        <SearchInput />
        <div className=" flex gap-1">
          <Button variant={"outline"}>
            <FaUser /> Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
