"use client";
import React from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={handleScroll}
      className="fixed bottom-6 right-6 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded shadow-lg transition-transform hover:scale-105 z-50"
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}