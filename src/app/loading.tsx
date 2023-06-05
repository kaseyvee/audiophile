"use client";

import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
export default function Loading() {
  return (
    <main className="loading page">
      <div className="top">
        <div className="wrapper">
          <motion.img
            src="/icon-treble-clef.svg"
            alt=""
            width={50}
            animate={{ y: [0, 10, 0]}}
          />
        </div>
      </div>
    </main>
  );
}
