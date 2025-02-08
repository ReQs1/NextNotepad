"use client";

import Modal from "@/app/_components/Modal";
import { useRouter } from "next/navigation";

function EventModal({
  eventId,
  children,
}: {
  eventId?: string;
  children: React.ReactNode;
}) {
  const isModalOpen = Boolean(eventId);
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <Modal isOpen={isModalOpen} action={closeModal}>
      {children}
    </Modal>
  );
}

export default EventModal;
