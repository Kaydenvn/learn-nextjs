import { NextResponse } from "next/server";

const url = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${url}/${id}`);

  const todo = await res.json();

  if (!todo.id) return NextResponse.json({ message: "Id Not found" });

  return NextResponse.json(todo);
}
