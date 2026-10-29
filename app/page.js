"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.page}>
      <h1>Komponenter</h1>
      <p className={styles.intro}>Vælg en pill for at åbne Hick&apos;s Law.</p>
      <div className={styles.pills}>
        <Pill type="Primary" onClick={() => setIsModalOpen(true)} />
        <Pill type="Secondary" onClick={() => setIsModalOpen(true)} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
