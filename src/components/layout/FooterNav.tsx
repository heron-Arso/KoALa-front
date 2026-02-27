export type NavKey = "home" | "search" | "create" | "library" | "profile";

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
      className={`flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition
      ${isActive ? "text-white" : "text-white/55 hover:text-white/80"}`}
      aria-label={label}
    >
      <div
        className={`h-6 w-6 grid place-items-center ${isActive ? "" : "opacity-90"}`}
      >
        {children}
      </div>
      <div className="text-[10px] leading-none">{label}</div>
    </button>
  );
}

export default function FooterNav({ active, onNavigate }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0B0D]/92 backdrop-blur border-t border-white/5">
      <div className="mx-auto max-w-[430px] px-3 h-[76px] grid grid-cols-5 items-center">
        <NavItem label="Home" isActive={active === "home"} onClick={() => onNavigate("home")}>
          {/* home */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </NavItem>

        <NavItem label="Search" isActive={active === "search"} onClick={() => onNavigate("search")}>
          {/* search */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16.5 16.5 21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </NavItem>

        <NavItem label="Create" isActive={active === "create"} onClick={() => onNavigate("create")}>
          {/* plus */}
          <div className="h-10 w-10 rounded-full bg-white text-black grid place-items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </NavItem>

        <NavItem
          label="Library"
          isActive={active === "library"}
          onClick={() => onNavigate("library")}
        >
          {/* grid */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M13 4h7v7h-7V4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="2" />
            <path d="M13 13h7v7h-7v-7Z" stroke="currentColor" strokeWidth="2" />
          </svg>
        </NavItem>

        <NavItem
          label="Profile"
          isActive={active === "profile"}
          onClick={() => onNavigate("profile")}
        >
          {/* user */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 20a8 8 0 0 1 16 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </NavItem>
      </div>
    </nav>
  );
}