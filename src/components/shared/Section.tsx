import React from "react";

export default function Section({
  children,
  bg = "white",
  spacing = "lg",
  fullWidth = false,
  withDivider = false,
  bordered = false,
}: {
  children: React.ReactNode;
  bg?: "white" | "gray" | "grapevine";
  spacing?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  withDivider?: boolean;
  bordered?: boolean;
}) {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-gray-50",
    grapevine:
      "bg-gradient-to-b from-[#7f264a]/5 via-white to-white",
  };

  const spacingStyles = {
    sm: "py-10 md:py-12",
    md: "py-14 md:py-16",
    lg: "py-20 md:py-24",
  };

  return (
    <section className={`relative w-full overflow-hidden ${bgStyles[bg]}`}>
      
      {/* ================= BRAND GLOW (GRAPEVINE MODE) ================= */}
      {bg === "grapevine" && (
        <>
          <div className="absolute -top-28 -right-28 w-[28rem] h-[28rem] bg-[#7f264a]/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-28 -left-28 w-[28rem] h-[28rem] bg-[#7f264a]/5 blur-[140px] rounded-full" />
        </>
      )}

      {/* ================= OPTIONAL BORDER SYSTEM ================= */}
      {bordered && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7f264a]/20 to-transparent" />
      )}

      {/* ================= CONTENT WRAPPER ================= */}
      <div
        className={`relative mx-auto px-6 sm:px-8 lg:px-10 ${
          fullWidth ? "max-w-full" : "max-w-6xl"
        }`}
      >
        <div className={`${spacingStyles[spacing]} w-full`}>
          
          {/* OPTIONAL SECTION DIVIDER */}
          {withDivider && (
            <div className="mb-6 w-16 h-[3px] bg-[#7f264a]/40 rounded-full" />
          )}

          {children}
        </div>
      </div>

    </section>
  );
}