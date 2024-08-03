"use client";

import {
  Dispatch,
  ElementRef,
  MouseEvent,
  ReactNode,
  SetStateAction,
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
  const modalRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    function onEscClose(e: KeyboardEvent) {
      if (e.code === "Escape") setIsOpen(false);
    }

    window.addEventListener("keypress", onEscClose);

    return () => window.removeEventListener("keypress", onEscClose);
  }, [setIsOpen]);

  function handleClickOutside(e: MouseEvent<Element, globalThis.MouseEvent>) {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  }

  return (
    isOpen &&
    createPortal(
      <div
        role="modal"
        ref={modalRef}
        className="absolute left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center backdrop-blur-md"
        onClick={handleClickOutside}
      >
        {children}
      </div>,
      document.body,
    )
  );
}

export default Modal;
