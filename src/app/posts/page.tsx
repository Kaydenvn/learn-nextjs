import * as React from "react";
import Link from "next/link";

export interface PostProps {}

export default function Post(props: PostProps) {
  return (
    <div className=" bg-white h-screen w-screen">
      <h1 className=" text-black">Post</h1>
      Link to <Link href="/">Home</Link>
    </div>
  );
}
