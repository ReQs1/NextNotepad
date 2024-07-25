import { Pen, Trash } from "lucide-react";

function CardButtons() {
  return (
    <div className="mt-auto flex gap-6">
      <button aria-label="delete a note" className="text-primary">
        <Trash size={26} />
      </button>
      <button aria-label="edit a note" className="text-primary">
        <Pen size={26} />
      </button>
    </div>
  );
}

export default CardButtons;
