import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router";

interface InfoBannerProps {
  text: string;
  linkText: string;
  linkHref: string;
  backgroundColor?: string;
  textColor?: string;
  linkColor?: string;
}

function InfoBanner({
  text,
  linkText,
  linkHref,
  backgroundColor = "bg-gray-200",
  textColor = "text-gray-700",
  linkColor = "text-blue-600",
}: InfoBannerProps) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 rounded-lg ${backgroundColor} border border-gray-300`}
    >
      <p className={`text-sm ${textColor}`}>{text}</p>
      <NavLink
        to={linkHref}
        className={`flex items-center text-sm font-medium ${linkColor} hover:underline ml-1`}
      >
        {linkText}
        <FaArrowRight className="ml-1 h-4 w-4" />
      </NavLink>
    </div>
  );
}

export default InfoBanner;
