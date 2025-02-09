"use client";

import Modal from "@/app/_components/Modal";
import { deleteEvent } from "@/app/_lib/actions";
import useServerActionWithToast from "@/app/_lib/hooks/useSeverActionWithToast";
import { TriangleAlert, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  deleteModalId: string;
};

function DeleteEventModal({ deleteModalId }: Props) {
  const router = useRouter();
  const isOpen = Boolean(deleteModalId);

  const closeModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("eventDelete");
    router.replace(url.toString());
  };

  const { isPending, execute } = useServerActionWithToast(
    deleteEvent,
    closeModal,
    {
      successMessage: "Successfully deleted note",
      errorMessage: "Couldn't delete note",
    },
  );

  return (
    <Modal isPending={isPending} isOpen={isOpen} action={closeModal}>
      <div className="relative flex w-full max-w-[425px] flex-col items-center justify-center gap-6 rounded-xl border-2 bg-bg1 px-4 py-10 sm:px-6">
        <CloseModalBtn onClose={closeModal} isPending={isPending} />

        <TriangleAlert size={48} color="red" />

        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-lg font-bold text-primary">Are you sure?</h2>
          <p className="text-sm text-secondary sm:text-base">
            This action cannot be undone. This will permanently delete the
            selected item.
          </p>
        </div>

        <div className="flex w-full justify-end gap-4 text-end">
          <button
            className="bg-1 rounded-lg border px-3 py-2 text-primary transition-colors duration-300 hover:bg-hoverAccent"
            onClick={closeModal}
            disabled={isPending}
          >
            No
          </button>
          <button
            className="rounded-lg bg-red-500 px-3 py-2 text-white transition-colors duration-300 hover:bg-red-600"
            onClick={() => execute({ eventId: Number(deleteModalId) })}
          >
            {isPending ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteEventModal;

function CloseModalBtn({
  onClose,
  isPending,
}: {
  onClose: () => void;
  isPending: boolean;
}) {
  return (
    <button
      className="absolute right-4 top-4 text-primary transition-colors duration-300 hover:text-primary/50"
      onClick={onClose}
      aria-label="close modal"
      disabled={isPending}
    >
      <X size={28} />
    </button>
  );
}
