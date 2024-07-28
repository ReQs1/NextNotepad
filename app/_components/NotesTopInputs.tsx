import SearchInput from "@/app/_components/SearchInput";
import AddNoteButton from "@/app/_components/AddNoteButton";

function NotesTopInputs() {
  return (
    <div className="mb-10 flex items-center gap-4 sm:max-w-[550px] sm:gap-6">
      <SearchInput />
      <AddNoteButton />
    </div>
  );
}

export default NotesTopInputs;
