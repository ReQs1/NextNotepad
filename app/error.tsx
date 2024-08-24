"use client";

import { CircleX } from "lucide-react";
import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center bg-bg2">
      <div className="flex max-w-[700px] flex-1 flex-col items-center gap-4 rounded-md bg-bg1 py-8 shadow-lg">
        <CircleX size={58} className="text-red-500" />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-semibold text-primary">Oops!</h1>
          <h2 className="text-xl font-semibold">Something went wrong</h2>
        </div>
        <p className="text-lg text-secondary">{error.message}</p>

        <div className="flex items-center gap-4">
          <button
            className="rounded-md bg-red-500 px-3 py-2 text-white transition-colors hover:bg-red-400"
            onClick={() => reset()}
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-md bg-yellow-500 px-3 py-2 text-white transition-colors hover:bg-yellow-400"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
