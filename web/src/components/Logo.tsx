import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="w-20 drop-shadow-xl"
        src="/logo.png"
        alt="Infectio logo"
      />
      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
        Infectio
      </span>
    </div>
  );
}
