// app/api/products/[slug]/route.ts
import { NextResponse } from "next/server";
import { PRODUCTS_DATA } from "../data"

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug);

  if (!product) {
    return NextResponse.json({ message: "محصول پیدا نشد" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}