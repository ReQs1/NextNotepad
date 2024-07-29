import SearchInput from "@/app/_components/SearchInput";
import AddNoteModal from "@/app/_components/AddNoteModal";

function NotesTopInputs() {
  return (
    <div className="mb-10 flex items-center gap-4 sm:max-w-[550px] sm:gap-6">
      <SearchInput />
      <AddNoteModal />
    </div>
  );
}

export default NotesTopInputs;
