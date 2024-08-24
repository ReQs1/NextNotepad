import { FileQuestionIcon } from "lucide-react";
import Link from "next/link";

function NotFound() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center bg-bg2">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          <FileQuestionIcon size={58} className="text-yellow-500" />
          <h2 className="text-2xl font-bold text-primary">Not Found</h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-secondary">Could not find requested resource</p>
          <Link
            href="/sign-in"
            className="rounded-md bg-yellow-500 px-3 py-2 text-white transition-colors hover:bg-yellow-400"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
