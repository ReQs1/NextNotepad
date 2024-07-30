"use client";

import {
  Dispatch,
  ElementRef,
  MouseEvent,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function Modal({ children, isOpen, setIsOpen }: Props) {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  function onDismiss() {
    setIsOpen(false);
  }

  function handleCLickOutside(
    event: MouseEvent<HTMLDialogElement, globalThis.MouseEvent>,
  ) {
    if (dialogRef.current && dialogRef.current === event.target) {
      setIsOpen(false);
    }
  }

  return (
    isOpen &&
    createPortal(
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        onClick={handleCLickOutside}
        className="backdrop:backdrop-blur-sm"
      >
        {children}
      </dialog>,
      document.body,
    )
  );
}

export default Modal;
