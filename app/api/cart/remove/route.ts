import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const body: { userId: number; productId: number } = await request.json();
  const { userId, productId } = body;

  try {
    const res = await sql`
                    DELETE FROM cart
                    WHERE userId = ${userId} AND productId = ${productId};
                `;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}