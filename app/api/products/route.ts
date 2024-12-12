import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");

  if (query) {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: query as string,
          mode: "insensitive",
        },
      },
      take: 5,
    });

    return NextResponse.json(products);
  }
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
