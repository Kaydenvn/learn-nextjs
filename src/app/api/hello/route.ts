import { NextResponse } from "next/server";

const API_KEY = process.env.DATA_API_KEY;

const url = new URL(
  `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ac0afd9832dd4f1e297bc8935ace95b2`
);

export async function GET(request: Request) {
  const res = await fetch(url);

  const data = await res.json();

  return NextResponse.json(data);
}
