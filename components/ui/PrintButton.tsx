"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#7c3aed] text-white text-sm font-medium hover:bg-[#6d28d9] transition-colors cursor-pointer"
    >
      <Printer size={15} />
      Save as PDF
    </button>
  );
}
