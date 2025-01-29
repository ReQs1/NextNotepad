"use client";

import Modal from "@/app/_components/Modal";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import CalendarModalForm from "@/app/_components/calendar/CalendarModalForm";
import { addEvent } from "@/app/_lib/actions";
import useServerActionWithToast from "@/app/_lib/hooks/useSeverActionWithToast";

function CalendarModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  const { execute, isPending } = useServerActionWithToast(addEvent, setIsOpen, {
    successMessage: "Event added!",
    errorMessage: "Couldn't add the event",
  });

  return (
    <>
      <CalendarModalTrigger onOpenModal={handleOpenModal} />

      {isOpen && (
        <Modal isPending={isPending} isOpen={isOpen} action={handleCloseModal}>
          <CalendarModalForm
            execute={execute}
            setIsOpen={setIsOpen}
            isPending={isPending}
          />
        </Modal>
      )}
    </>
  );
}

export default CalendarModal;

type TriggerProps = {
  onOpenModal: () => void;
};

function CalendarModalTrigger({ onOpenModal }: TriggerProps) {
  return (
    <button
      className="flex items-center gap-2 self-start rounded-lg bg-primary px-3 py-2 font-semibold text-bg2 transition-colors duration-300 hover:bg-primary/60"
      onClick={onOpenModal}
    >
      <span>
        <PlusIcon />
      </span>
      Add Event
    </button>
  );
}
