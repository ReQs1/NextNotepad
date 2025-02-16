"use client";

import { ElementRef, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  action: () => void;
  isPending?: boolean;
};

function Modal({ children, isOpen, action, isPending }: Props) {
  const modalRef = useRef<ElementRef<"div">>(null);

  // Close modal on escape key press
  useEffect(() => {
    function onEscClose(e: KeyboardEvent) {
      if (!isPending && e.code === "Escape") action();
    }

    window.addEventListener("keydown", onEscClose);

    return () => window.removeEventListener("keydown", onEscClose);
  }, [action, isPending]);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // Check if it's not a left click so we can do nothing
      if (e.button !== 0) return;

      if (!isPending && modalRef.current === e.target) {
        action();
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [action, isPending]);

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
      <FocusLock>
        <div
          role="modal"
          ref={modalRef}
          className="fixed left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center backdrop-blur-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </FocusLock>,
      document.body,
    )
  );
}

export default Modal;
