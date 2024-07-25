import { PlusIcon, Search } from "lucide-react";

function NotesTopInputs() {
  return (
    <div className="mb-10 flex items-center gap-4 sm:max-w-[550px] sm:gap-6">
      <div className="relative sm:flex-1">
        <label
          htmlFor="search"
          className="absolute left-2 top-1/2 -translate-y-1/2"
        >
          <Search size={18} />
        </label>
        <input
          className="h-10 w-full rounded-lg p-1 pl-8 outline-none"
          id="search"
          type="search"
          placeholder="Search a note"
        />
      </div>

      <button
        className="rounded-full bg-primary p-2 text-bg1"
        aria-label="Add new note"
      >
        <PlusIcon size={24} />
      </button>
    </div>
  );
}

export default NotesTopInputs;
