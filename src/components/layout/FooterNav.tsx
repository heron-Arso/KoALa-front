import React from "react";

export type NavKey = "home" | "search" | "library" | "profile";

type Props = {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
};

function NavItem({
  label,
  isActive,
  onClick,
  children,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 py-2 transition-colors
      ${
        isActive
          ? "text-black"
          : "text-gray-400 hover:text-black"
      }`}
      aria-label={label}
    >
      <div className="h-6 w-6 grid place-items-center">{children}</div>
      <div className="text-[11px]">{label}</div>
    </button>
  );
}

export default function FooterNav({ active, onNavigate }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-[430px] px-4 h-[70px] grid grid-cols-4 items-center">
        <NavItem
          label="Home"
          isActive={active === "home"}
          onClick={() => onNavigate("home")}
        >
          🏠
        </NavItem>

        <NavItem
          label="Search"
          isActive={active === "search"}
          onClick={() => onNavigate("search")}
        >
          🔍
        </NavItem>

        <NavItem
          label="Library"
          isActive={active === "library"}
          onClick={() => onNavigate("library")}
        >
          📚
        </NavItem>

        <NavItem
          label="Profile"
          isActive={active === "profile"}
          onClick={() => onNavigate("profile")}
        >
          👤
        </NavItem>
      </div>
    </nav>
  );
}