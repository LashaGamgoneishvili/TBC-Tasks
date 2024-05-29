import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    console.log("GettAllCartID", id);
    const result = await sql`
      SELECT * FROM cart WHERE userid = ${id}; 
    `;

    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}