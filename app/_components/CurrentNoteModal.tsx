"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";

type Props = {
  currNote: string;
  children: React.ReactNode;
};

function CurrentNoteModal({ currNote, children }: Props) {
  const router = useRouter();
  const isCurrNote = Boolean(currNote);

  const closeModal = () => router.back();

  return (
    <Modal isOpen={isCurrNote} action={closeModal}>
      {children}
    </Modal>
  );
}

export default CurrentNoteModal;
