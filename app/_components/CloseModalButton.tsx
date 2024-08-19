"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

function CloseModalButton({ setIsOpen }: Props) {
  const router = useRouter();
  if (setIsOpen)
    return (
      <button
        className="absolute right-2 top-2"
        onClick={() => setIsOpen(false)}
        aria-label="close modal"
      >
        <X size={28} />
      </button>
    );

  if (!setIsOpen)
    return (
      <button
        className="absolute right-2 top-2"
        onClick={() => router.back()}
        aria-label="close modal"
      >
        <X size={28} />
      </button>
    );
}

export default CloseModalButton;
