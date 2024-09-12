"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);
	useEffect(() => {console.log("count is: ", count)}, [count])
  return (
	<div className="flex flex-col justify-center items-center">
		<div className="h-auto">
			<h1 className="text-4xl font-bold">Count: {count}</h1>
		</div>
		<div className="h-auto">
			<button className="bg-white rounded text-black px-2 mr-5 mt-10" onClick={() => setCount(count + 1)}>Increment</button>
			<button className="bg-white rounded text-black px-2" onClick={() => setCount(count - 1)}>Increment</button>
		</div>
	</div>
  );
}
