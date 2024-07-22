import { mockedData } from "@/app/_lib/mock-data";
import { formatDate } from "@/app/_lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "A place to jot down your thoughts.",
};

export default function NotepadPage() {
  const data = [...mockedData, ...mockedData, ...mockedData];
  return (
    <main className="flex-1 overflow-hidden px-6 py-4 md:px-10">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
        {data.map((note, id) => (
          <div
            key={id}
            className="flex cursor-pointer flex-col gap-4 rounded-lg border-2 border-secondary/40 bg-bg1 px-6 py-4 shadow-md transition-[border] duration-500 hover:border-primary"
          >
            <div className="grid gap-1">
              <h2 className="text-xl font-semibold text-primary">
                {note.title}
              </h2>
              <p className="text-secondary">{formatDate(note.created_at)}</p>
            </div>
            <p className="text-primary">{note.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
