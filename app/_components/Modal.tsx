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

  // Close modal on escape key press
  useEffect(() => {
    function onEscClose(e: KeyboardEvent) {
      if (e.code === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", onEscClose);

    return () => window.removeEventListener("keydown", onEscClose);
  }, [setIsOpen]);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (modalRef.current === e.target) {
        setIsOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  //preventing user from scrolling when modal is opened

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    isOpen &&
    createPortal(
      <div
        role="modal"
        ref={modalRef}
        className="absolute left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center backdrop-blur-sm"
      >
        {children}
      </div>,
      document.body,
    )
  );
}

export default Modal;
