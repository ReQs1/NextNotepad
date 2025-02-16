import SearchInput from "@/app/_components/notes/SearchInput";
import AddNoteTrigger from "@/app/_components/notes/AddNoteTrigger";

function NotesTopInputs() {
  return (
    <div className="mb-10 flex items-center gap-4 sm:max-w-[550px] sm:gap-6">
      <SearchInput />
      <AddNoteTrigger />
    </div>
  );
}

export default NotesTopInputs;
