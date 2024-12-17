import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = req.cookies.get("cartToken")?.value;
    const { quantity } = await req.json();

    if (!token) {
      return NextResponse.json({ error: "Token is missing" }, { status: 401 });
    }

    const id = Number(params.id);

    // Найти элемент в корзине по token и itemId
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
        cart: {
          token,
        },
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Обновить количество элемента
    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });

    // Получить обновленную корзину
    const updatedCart = await prisma.cart.findFirst({
      where: {
        token,
      },
      include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Token is missing" }, { status: 401 });
    }

    const id = Number(params.id);

    // Найти элемент в корзине по token и itemId
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
        cart: {
          token,
        },
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Удалить элемент из корзины
    await prisma.cartItem.delete({
      where: {
        id,
      },
    });

    // Получить обновленную корзину
    const updatedCart = await prisma.cart.findFirst({
      where: {
        token,
      },
      include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
