"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingChat() {
  return (
    <motion.div
      className="fixed bottom-6 right-6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring" }}
    >
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-blue-500 p-4 text-white shadow-lg hover:bg-blue-600"
      >
        <MessageCircle size={28} />
      </a>
    </motion.div>
  );
}
