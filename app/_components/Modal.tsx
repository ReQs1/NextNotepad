"use client";

import {
  Dispatch,
  ElementRef,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  action: () => void;
};

function Modal({ children, isOpen, action }: Props) {
  const modalRef = useRef<ElementRef<"div">>(null);

  // Close modal on escape key press
  useEffect(() => {
    function onEscClose(e: KeyboardEvent) {
      if (e.code === "Escape") action();
    }

    window.addEventListener("keydown", onEscClose);

    return () => window.removeEventListener("keydown", onEscClose);
  }, [action]);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (modalRef.current === e.target) {
        action();
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [action]);

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
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>,
      document.body,
    )
  );
}

export default Modal;
