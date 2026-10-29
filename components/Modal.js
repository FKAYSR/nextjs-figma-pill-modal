"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal". Open it when isOpen becomes true.
export default function Modal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.separator} aria-hidden="true" />
          <button className={styles.close} type="button" onClick={onClose} aria-label="Luk modal">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h2 className={styles.title} id="modal-title">Hick&apos;s Law</h2>
        <p className={styles.description} id="modal-description">
          Jo flere valgmuligheder, jo længere tid tager det at vælge.
        </p>
      </div>
    </dialog>
  );
}
