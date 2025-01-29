"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "@/app/_components/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "@/app/_lib/zodSchemas";
import { z } from "zod";
import useServerActionWithToast from "@/app/_lib/hooks/useSeverActionWithToast";
import CloseModalButton from "../CloseModalButton";

function CalendarModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  // const { execute, isPending } = useServerActionWithToast();
  // TODO: to nizej do wyjebania jest
  const isPending = false;
  let execute;

  return (
    <>
      <CalendarModalTrigger onOpenModal={handleOpenModal} />

      {isOpen && (
        <Modal isPending={isPending} isOpen={isOpen} action={handleCloseModal}>
          <CalendarModalContent
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

type ContentProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  execute: any;
  isPending: boolean;
};

function CalendarModalContent({ setIsOpen, execute, isPending }: ContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      start: new Date(),
      end: new Date(),
    },
  });

  return (
    <div className="relative w-full max-w-[500px] rounded-xl border-2 border-gray-200 bg-bg1 px-3 py-5 shadow-lg sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold text-primary">Add an event</h2>
      <CloseModalButton setIsOpen={setIsOpen} />

      <form onSubmit={handleSubmit((value) => execute(value))}>
        <button
          disabled={isPending}
          type="submit"
          className="w-full rounded-md bg-primary p-2 font-semibold text-bg1 transition-colors duration-300 hover:bg-primary/70 disabled:bg-primary/70"
        >
          {isPending ? "Adding event..." : "Add Event"}
        </button>
      </form>
    </div>
  );
}
